import { next } from "@vercel/functions";

/**
 * GEME old blog → new Shopify blog 301 migration
 *
 * Old:
 * https://www.geme.bio/blog/:slug
 *
 * New candidates:
 * 1. https://gemebio.com/blogs/journal/:slug
 * 2. https://gemebio.com/blogs/blog/:slug
 *
 * Only redirects when a real destination exists.
 */

const NEW_DOMAIN = "https://gemebio.com";


/**
 * Optional manual mappings.
 *
 * Only put articles here when the new Shopify slug
 * is DIFFERENT from the old Docusaurus slug.
 *
 * Example:
 *
 * "old-slug": "/blogs/journal/new-slug"
 */
const MANUAL_REDIRECTS = {

  // Add renamed articles here when needed.

};


/**
 * Check whether a destination exists.
 *
 * HEAD avoids downloading the full article.
 */
async function checkUrl(targetUrl) {
  try {

    let response = await fetch(targetUrl, {
      method: "HEAD",
      redirect: "follow",
    });

    /*
     * Some servers may not behave normally for HEAD.
     * If that happens, fall back to GET.
     */
    if (response.status === 405) {
      response = await fetch(targetUrl, {
        method: "GET",
        redirect: "follow",
      });
    }

    if (response.ok) {
      return response.url || targetUrl;
    }

    return null;

  } catch (error) {

    console.error(
      "[GEME redirect] Failed checking:",
      targetUrl,
      error
    );

    return null;
  }
}


/**
 * Return a real HTTP 301.
 */
function permanentRedirect(destination) {

  return new Response(null, {
    status: 301,
    headers: {
      Location: destination,

      /*
       * Keep the cache relatively short during migration.
       * After the mapping is fully verified, this can be increased.
       */
      "Cache-Control":
        "public, max-age=3600, s-maxage=3600",
    },
  });
}


export default async function middleware(request) {

  const requestUrl = new URL(request.url);

  let pathname = requestUrl.pathname;


  /*
   * Normalize trailing slash.
   *
   * /blog/example/
   * becomes
   * /blog/example
   */
  if (pathname.length > 1) {
    pathname = pathname.replace(/\/+$/, "");
  }


  /*
   * ---------------------------------------------------------
   * 1. OLD BLOG HOMEPAGE
   * ---------------------------------------------------------
   */

  if (pathname === "/blog") {

    return permanentRedirect(
      `${NEW_DOMAIN}/blogs/blog`
    );

  }


  /*
   * ---------------------------------------------------------
   * 2. OLD PAGINATION
   *
   * These are NOT individual articles.
   *
   * /blog/page/2
   * /blog/page/3
   * /blog/page/5
   *
   * Send them to the current blog collection.
   * ---------------------------------------------------------
   */

  if (/^\/blog\/page\/\d+$/.test(pathname)) {

    return permanentRedirect(
      `${NEW_DOMAIN}/blogs/blog`
    );

  }


  /*
   * ---------------------------------------------------------
   * 3. OLD TAG PAGES
   *
   * Do NOT let them fall into the article redirect logic.
   *
   * For now they go to the main blog collection.
   *
   * Later you can create exact Shopify tag mappings if desired.
   * ---------------------------------------------------------
   */

  if (pathname.startsWith("/blog/tags/")) {

    return permanentRedirect(
      `${NEW_DOMAIN}/blogs/blog`
    );

  }


  /*
   * ---------------------------------------------------------
   * 4. ONLY PROCESS REAL /blog/:slug ARTICLE URLs
   * ---------------------------------------------------------
   */

  if (!pathname.startsWith("/blog/")) {

    return next();

  }


  /*
   * Everything after /blog/
   */
  const slug = pathname
    .replace(/^\/blog\//, "")
    .replace(/^\/+|\/+$/g, "");


  /*
   * Safety:
   * Do not treat nested paths as articles.
   */
  if (!slug || slug.includes("/")) {

    return next();

  }


  /*
   * ---------------------------------------------------------
   * 5. MANUAL OVERRIDE
   *
   * This always wins.
   *
   * Used when:
   *
   * old:
   * /blog/old-slug
   *
   * new:
   * /blogs/journal/completely-new-slug
   * ---------------------------------------------------------
   */

  if (MANUAL_REDIRECTS[slug]) {

    const manualTarget =
      `${NEW_DOMAIN}${MANUAL_REDIRECTS[slug]}`;

    return permanentRedirect(manualTarget);

  }


  /*
   * ---------------------------------------------------------
   * 6. FIRST CHECK NEW JOURNAL
   *
   * Example:
   *
   * old:
   * geme.bio/blog/how-to-make-bananas-last-longer
   *
   * new:
   * gemebio.com/blogs/journal/how-to-make-bananas-last-longer
   * ---------------------------------------------------------
   */

  const journalCandidate =
    `${NEW_DOMAIN}/blogs/journal/${encodeURIComponent(slug)}`;

  const journalTarget =
    await checkUrl(journalCandidate);


  if (journalTarget) {

    console.log(
      `[GEME redirect] ${pathname} → ${journalTarget}`
    );

    return permanentRedirect(journalTarget);

  }


  /*
   * ---------------------------------------------------------
   * 7. THEN CHECK LEGACY SHOPIFY BLOG
   *
   * Some migrated articles still live under:
   *
   * /blogs/blog/:slug
   * ---------------------------------------------------------
   */

  const blogCandidate =
    `${NEW_DOMAIN}/blogs/blog/${encodeURIComponent(slug)}`;

  const blogTarget =
    await checkUrl(blogCandidate);


  if (blogTarget) {

    console.log(
      `[GEME redirect] ${pathname} → ${blogTarget}`
    );

    return permanentRedirect(blogTarget);

  }


  /*
   * ---------------------------------------------------------
   * 8. NO MATCH FOUND
   *
   * VERY IMPORTANT:
   *
   * Do NOT 301 an unmatched article to the homepage.
   * Do NOT blindly send it to /blogs/journal/:slug.
   *
   * Leave the old article accessible until an exact
   * replacement is manually mapped.
   * ---------------------------------------------------------
   */

  console.warn(
    `[GEME redirect] No matching new article for ${pathname}`
  );

  return next();

}


/**
 * Only execute middleware for the old /blog section.
 *
 * Product pages, images, JS, CSS, etc. are untouched.
 */
export const config = {
  matcher: "/blog/:path*",
};
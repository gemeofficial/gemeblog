export const config = {
    matcher: ['/blog/:path*'],
  };
  
  const redirects = {
    '/blog/geme-vs-lomi':
      'https://gemebio.com/blogs/journal/geme-vs-lomi',
  
    '/blog/geme-vs-reencle-composter-2026':
      'https://gemebio.com/blogs/journal/geme-vs-reencle-composter-2026',
  
    '/blog/advanced-geme-compost-application-guide':
      'https://gemebio.com/blogs/journal/advanced-geme-compost-application-guide',
  
    '/blog/electric-compost-bin-filters-costs-comparison':
      'https://gemebio.com/blogs/journal/electric-compost-bin-filters-costs-comparison',
  };
  
  export default function middleware(request) {
    const url = new URL(request.url);
  
    let pathname = url.pathname;
  
    if (pathname.length > 1 && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
    }
  
    const destination = redirects[pathname];
  
    if (destination) {
      return new Response(null, {
        status: 301,
        headers: {
          Location: destination,
        },
      });
    }
  }
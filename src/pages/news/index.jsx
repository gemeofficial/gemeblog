import { usePluginData } from "@docusaurus/useGlobalData";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import moment from "moment";
import clsx from "clsx";

function getNewsTags(blogs) {
  const newsTags = blogs.flatMap(blog => blog.metadata.tags);

  const map = new Map();
  newsTags.forEach(item => {
    if (!map.has(item.label)) {
      map.set(item.label, item);
    }
  });

  return Array.from(map.values());
}

const tagBackgroundColors = ["#3B7F6F", "#4A8F7F", "#2A6F5F"];

export default function News() {
  const { siteConfig } = useDocusaurusContext();
  const allBlogData = usePluginData("docusaurus-plugin-content-blog");
  const newsBlogData = allBlogData.blogs.filter(blog =>
    blog.metadata.frontMatter.tags.includes("news")
  );

  const newsTags = getNewsTags(newsBlogData);

  return (
    <Layout title={`${siteConfig.title}`} description="Geme News">
      <main
        className={clsx(
          "container margin-vert--lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl",
          "flex flex-col-reverse lg:flex-row gap-8 px-4 md:px-0"
        )}
      >
        <div className="flex-1">
          <h1 className="text-[#3B7F6F] border-0 border-b mb-6 border-solid border-gray-900 h-[72px] flex items-center text-2xl md:text-[32px]">
            GEME Latest News
          </h1>
          {newsBlogData.map((blog, index) => (
            <ul key={index} className="p-0 flex flex-col gap-4">
              <li className="list-none group xl:hover:bg-gray-100 p-4 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-lg xl:shadow-none xl:rounded-none">
                <Link
                  className="hover:no-underline flex flex-col md:flex-row gap-4 md:gap-6 xl:gap-8"
                  to={blog.metadata.permalink}
                >
                  <div className="w-full md:w-72 h-48 md:h-52 overflow-hidden rounded-md">
                    <img
                      className="w-full h-full object-cover hover:scale-105 duration-500"
                      src={blog.metadata.frontMatter.picture}
                      alt={blog.metadata.title}
                    />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="m-0 group-hover:underline transition-all duration-300 text-base md:text-lg xl:text-xl">
                      {blog.metadata.title}
                    </h3>
                    <p className="m-0 md:py-2 text-xs md:text-sm text-gray-600">
                      {blog.metadata.frontMatter.authors && (
                        <>
                          <span>
                            {blog.metadata.frontMatter.authors.join(",")}
                          </span>
                          <span className="mx-1">-</span>
                        </>
                      )}
                      <span className="">
                        {moment(blog.metadata.date).format("MMMM D, YYYY")}
                      </span>
                    </p>
                    <p className="m-0 text-gray-500 text-xs md:text-sm max-w-sm xl:max-w-lg">
                      {blog.metadata.frontMatter.description}
                    </p>

                    {blog.metadata.frontMatter?.tags && (
                      <div className="flex flex-wrap gap-2">
                        {blog.metadata.frontMatter.tags.map((tag, i) =>
                          tag.toLowerCase() !== "news" ? (
                            <p
                              key={i}
                              style={{
                                backgroundColor: tagBackgroundColors[i % 3],
                              }}
                              className="m-0 text-white text-[10px] px-1"
                            >
                              {tag}
                            </p>
                          ) : null
                        )}
                      </div>
                    )}
                  </div>
                </Link>
              </li>
            </ul>
          ))}
        </div>
        <div className="lg:max-w-[20%]">
          <h2 className="text-[#3B7F6F] border-0 border-b mb-6 border-solid border-gray-900 h-[72px] flex items-center text-2xl md:text-[32px]">
            Tags
          </h2>
          <ul className="flex flex-wrap gap-2 p-0 m-0">
            {newsTags.map((tag, index) => (
              <Link
                className={clsx(
                  "hover:no-underline text-sm px-4 py-3",
                  "bg-[#eee] hover:bg-[#ccc] text-gray-700",
                  "hover:text-gray-900"
                )}
                key={index}
                to={tag.permalink}
              >
                {tag.label}
              </Link>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
}

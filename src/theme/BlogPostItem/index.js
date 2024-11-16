import React from 'react';
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import BlogPostItem from '@theme-original/BlogPostItem';
import GiscusComponent from '@site/src/components/GiscusComponent';

// 给博客文章添加评论
// 参考链接：https://rikublock.dev/docs/tutorials/giscus-integration/
export default function BlogPostItemWrapper(props) {
  const { metadata, isBlogPostPage } = useBlogPost()

  const { frontMatter, slug, title } = metadata
  // 是否关闭评论 可在blog md的metadata中设置 eg: closeComments: true
  const { closeComments } = frontMatter
  return (
    <>
      <BlogPostItem {...props} />
      {(closeComments != true && isBlogPostPage) && (
        <GiscusComponent />
      )}
    </>
  );
}

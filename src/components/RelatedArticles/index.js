import React from 'react';
import { usePluginData } from "@docusaurus/useGlobalData";
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function RelatedArticles({ slugs = [], className }) {
  const allBlogData = usePluginData("docusaurus-plugin-content-blog");
  console.log('allBlogData', allBlogData);

  // 根据slugs过滤相关文章
  const relatedPosts = allBlogData.blogs.filter(blog =>
    slugs.includes(blog.id)
  );

  if (!relatedPosts || relatedPosts.length === 0) {
    return null;
  }

  return (
    <>
      <h2>Related Articles</h2>

      <div className={clsx(styles.relatedArticlesContainer, className)}>
        <div className={styles.articlesGrid}>
          {relatedPosts.map((post, index) => {
            const { metadata } = post;
            const { title, tags, picture, slug } = metadata.frontMatter;

            return (
              <article key={index} className={styles.articleCard}>
                <Link to={`/blog/${slug}`} className={styles.cardLink}>
                  <div className={styles.cardImageContainer}>
                    <img
                      src={picture}
                      alt={title}
                      className={styles.cardImage}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardTags}>
                      {metadata.tags && metadata.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className={styles.tag}>
                          {tag.label}
                        </span>
                      ))}
                    </div>
                    <h4 className={styles.cardTitle}>{title}</h4>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}

import { usePluginData } from '@docusaurus/useGlobalData'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function News() {
  const { siteConfig } = useDocusaurusContext();
  const blogData = usePluginData('docusaurus-plugin-content-blog')
  console.log('blogData', blogData)


  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Geme News">
      <main>
        <h1>All Blog Posts</h1>
      </main>
    </Layout>
  );
}

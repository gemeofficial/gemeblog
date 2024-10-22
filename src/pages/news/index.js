import { usePluginData } from '@docusaurus/useGlobalData'

export default function News() {
  const blogData = usePluginData('docusaurus-plugin-content-blog')
  console.log('blogData', blogData)

  // ./img/geme-vs-mill.png


  return (
    <div>
      <h1>All Blog Posts</h1>
    </div>
  )
}

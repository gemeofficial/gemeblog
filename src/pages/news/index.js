import { usePluginData } from '@docusaurus/useGlobalData'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css'
import Link from '@docusaurus/Link';
import moment from 'moment';

export default function News() {
  const { siteConfig } = useDocusaurusContext();
  const allBlogData = usePluginData('docusaurus-plugin-content-blog')
  const newsBlogData = allBlogData.blogs.filter(blog => blog.metadata.frontMatter.tags.includes('news'))
  console.log('newsBlogData', newsBlogData)
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Geme News">
      <main className='container margin-vert--lg max-w-7xl px-0 flex gap-8'>
        <div className='flex-1'>
          <h1 className='text-[#3B7F6F] border-0 border-b mb-6 border-solid border-gray-900 h-[72px] flex items-center'>GEME Latest News</h1>
          {newsBlogData.map((blog, index) => (
            <ul key={index} className='p-0 flex flex-col gap-4'>
              <li className='list-none group'>
                <Link className="hover:no-underline flex gap-4 md:gap-6 xl:gap-8" to={blog.metadata.permalink}>
                  <div className='w-72 h-52 overflow-hidden rounded-md'>
                    {/* <img src={blog.metadata.frontMatter.picture} alt={blog.metadata.title} /> */}
                    <img className='w-full h-full object-cover hover:scale-105 duration-500' src="https://www.geme.bio/assets/images/geme-vs-mill-69dea0c402948f36a29bdf55e7ec0d37.png" alt={blog.metadata.title} />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h3 className='m-0 group-hover:underline transition-all duration-300 text-base md:text-lg xl:text-xl'>{blog.metadata.title}</h3>
                    <p className='m-0 py-2 text-sm text-gray-600'>
                      {
                        blog.metadata.frontMatter.authors && (
                          <>
                            <span>{blog.metadata.frontMatter.authors.join(',')}</span>
                            <span className='mx-1'>-</span>
                          </>
                        )
                      }
                      <span className=''>{moment(blog.metadata.date).format('MMMM D, YYYY')}</span>
                    </p>
                    <p className='m-0 text-gray-500 text-sm max-w-sm xl:max-w-lg'>{blog.metadata.frontMatter.description}</p>
                  </div>
                </Link>
              </li>
            </ul>
          ))}
        </div>
        <div className='max-w-[20%]'>
          <h2 className='text-[#3B7F6F] border-0 border-b mb-6 border-solid border-gray-900 h-[72px] flex items-center'>Tags</h2>
        </div>
      </main>
    </Layout>
  );
}

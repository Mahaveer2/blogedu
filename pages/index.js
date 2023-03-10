import Head from 'next/head'
import Image from 'next/image'
import { PostCard,Categories,PostWidget } from '../components'
import FeaturedPosts from '../sections/FeaturedPosts'
import { getPosts } from '../services'

const Home = ({posts}) => {
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
      <meta name="google-site-verification" content="sIb_6pn3SEuVd-r3vJnNpuHXaq4l7FVxU_5I35LE5_k" />
        <title>EduPak</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <FeaturedPosts/>
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
      <div className='lg:col-span-8 col-span-1'>
      {posts.map((post,index) => (
        <PostCard post={post.node} key={post.title}/>
      ))}
      </div>
      <div className='lg:col-span-4 col-span-1'>
        <div className='lg:sticky relative top-8'>
          <PostWidget/>
          <Categories/>
        </div>
      </div>
    </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
export default Home

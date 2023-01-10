import React from 'react'
import {  getPosts,getPostDetails } from '../../services'
import { PostDetail,Categories,PostWidget,Comments,Author,CommentsForm } from "../../components";
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Loader from '../../components';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const PostDetails = ({post}) => {
  const router = useRouter();

  if(router.isFallback){
    return <Loader/>
  }
  return (
    <motion.main
    variants={variants} // Pass the variant object into Framer Motion 
    initial="hidden" // Set the initial state to variants.hidden
    animate="enter" // Animated state to variants.enter
    exit="exit" // Exit state (used later) to variants.exit
    transition={{ type: 'linear' }} // Set the transition to linear
    className=""
>
    <div className='container mx-auto px-10 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
           <PostDetail post={post}/>
           <Author author={post.author}/>
           <CommentsForm slug={post.slug}/>
           <Comments slug={post.slug}/>
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative lg:sticky top-8'>
            <PostWidget slug={post.slug} categories={post.categories.map(category => category.slug)}/>
            <Categories/>
          </div>
        </div>
      </div>
    </div>
    </motion.main>
  )
}

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug)
  
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}

export default PostDetails
import React, { useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { useState } from 'react'
import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({categories,slug}) => {
  const [relatedPosts,setRelatedPosts ] =useState([]);

  useEffect(() => {
    if(slug){
      getSimilarPosts(categories,slug).then(result => setRelatedPosts(result))
    }else{
      getRecentPosts().then(result => setRelatedPosts(result))
    }
  },[slug]);


  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4 '>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map( post => (
     <div key={post.title} className="flex items-center mb-4 w-full">
      <div className='w-16 flex-none'>
        <img src={post.featuredImage.url} className='align-middle rounded-full' height="60px" width="60px" alt={post.title} />
      </div>
      <div className='flex-grow ml-4'>
        <p className='text-gray-500 font-xs'>{moment(post.createdAt).format("MMM DD, YYYY")}</p>
        <Link href={`/post/${post.slug}`} className="text-md" key={post.title}>
          {post.title}
        </Link>
      </div>
      </div>))}
    </div>
  )
}

export default PostWidget
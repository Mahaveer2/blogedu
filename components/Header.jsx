import { useContext } from 'react'
import Link from 'next/link'
import React,{ useEffect ,useState} from 'react'
import { getCategories } from '../services'
import Head from 'next/head'

const Header = () => {

const [categories,setCategories] = useState([]);
useEffect(() => {
  getCategories().then(categories => setCategories(categories))
},[]);
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <Head>
          <meta name="google-site-verification" content="sIb_6pn3SEuVd-r3vJnNpuHXaq4l7FVxU_5I35LE5_k" />
          <title>Pak Edu</title>
        </Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9486411437483012"
     crossorigin="anonymous"></script>
        <div className='md:float-left block'>
          <Link href="/">
            <span className='cursor-pointer font-bold text-4xl text-white'>
              EduPak
            </span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents '>
          {categories.map(category => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Header
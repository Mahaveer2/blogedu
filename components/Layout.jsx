import React from 'react'
import Header from './Header'
import NextNProgress from 'nextjs-progressbar';

const Layout = ({children}) => {
  
  return (
    <>
    <NextNProgress color="#05d8ff" />
    <Header/>
    {children}
    </>
  )
}

export default Layout
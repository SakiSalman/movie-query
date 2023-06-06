import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

const Layout = () => {
  return (
    <div>
        {/* Header */}
        <Header></Header>
        {/* Header end */}
        <Outlet/>

        {/* Footer */}
        <Footer></Footer>
    </div>
  )
}

export default Layout
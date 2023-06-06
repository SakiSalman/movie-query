import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { showFetch } from '../features/shows/showsApi'

const Layout = () => {
  const dispatch = useDispatch();

    // fetch all data
    useEffect(() => {
      dispatch(showFetch())
    }, [dispatch]);
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
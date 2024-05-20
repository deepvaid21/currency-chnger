import React from 'react'
import Header from './Router/componets/Header'
import Footer from './Router/componets/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
    <Header/>
<Outlet />
<Footer />    </>
  )
}

export default Layout

import React, { useContext } from 'react'
import Header from './Header'
import LeftSideBar from './LeftSideBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { AppContext } from '../stores/AppContext'


function AppLayout() {
    const { isSidebarOpen } = useContext(AppContext);
  return (
    <>
        <Header />
        <LeftSideBar />
        <main className={`${isSidebarOpen? "lg:ml-64" : "ml-0"} min-h-75 md:min-h-148 pt-22 p-6 transition-all duration-300`}>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default AppLayout
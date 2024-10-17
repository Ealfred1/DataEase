import { useState } from 'react'
import { Outlet, Link, ScrollRestoration  } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const AuthLayout = () => {
	const [sideBarClose, setSideBarClose] = useState(false)
  
	const handleSideBarToggle = () => {
	  setSideBarClose(!sideBarClose)
	}
  return (
    <>
      <ScrollRestoration />
      <div>
        <Navbar handleSideBarToggle={handleSideBarToggle} closed={sideBarClose} />
        <Sidebar sideBarClose={sideBarClose} handleSideBarToggle={handleSideBarToggle} />
        <div className="w-full h-screen mt-24 sm:ml-[5px]">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default AuthLayout
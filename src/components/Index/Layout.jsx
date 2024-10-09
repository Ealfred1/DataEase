import { Outlet, Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
	return (
		<div className="max-w-[75rem] mx-auto">
	        <Navbar />
		        <div className="max-w-7xl mx-auto mt-24 pt-[220rem]">
		          <Outlet />
		        </div>
	        <Footer />
      	</div>
	)
}

export default Layout
import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Image from '../../assets/hero.png'

const Navbar = ({ handleSideBarToggle, closed }) => {
  const { pathname } = useLocation();
  const [display, setDisplay] = useState('')
  const navigate = useNavigate()
  const [profileMenuOpen, setProfileMenuOpen] = useState('')

  const handleNavigate = () => {
    navigate('/search')
  }

  useEffect(() => {
    if (pathname === '/search') {
      setDisplay('hidden')
    } else {
      setDisplay('')
    }
  }, [pathname])
  
  return (
    <nav className="navbar bg-transparent backdrop-blur-2xl dark:bg-slate-900 dark:border dark:border-slate-900 dark:border-b-gray-500">
  <div className="logo-items flex items-center">
      <div className="menu-icon translate-y-1" onClick={handleSideBarToggle}>
          <span></span>
          <span></span>
        </div>
    <h2 className="text-2xl">DataEase</h2>
  </div>

  <div className="relative">
    <img 
      src={Image} 
      alt="logo_img" 
      className="w-[40px] h-[40px] rounded-full cursor-pointer object-cover ring ring-4 ring-offset-2 ring-vibrantGreen" 
      onClick={() => setProfileMenuOpen(!profileMenuOpen)}
    />
    {profileMenuOpen && (
      <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg">
        <Link to="/profile" className="flex items-center px-4 py-4 text-gray hover:bg-vibrantGreen rounded-t-md hover:text-white">
          <i className="pi pi-user mr-2"></i>
          Profile
        </Link>
        <Link to="/settings" className="flex items-center px-4 py-4 text-gray hover:bg-vibrantGreen hover:text-white">
          <i className="pi pi-cog mr-2"></i>
          Settings
        </Link>
        <Link to="/logout" className="flex items-center px-4 py-4 text-gray hover:text-white w-full hover:bg-vibrantGreen rounded-b-md hover:text-white">
          <i className="pi pi-sign-out mr-2"></i>
          Logout
        </Link>
      </div>
    )}
  </div>
</nav>

  )
}

export default Navbar
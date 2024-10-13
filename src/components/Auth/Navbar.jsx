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
      <div className="logo-items">
        <i className={`pi ${closed ? 'pi-times' : 'pi-bars'}`}  onClick={handleSideBarToggle}></i>
        <h2 className="text-2xl">DataEase</h2>
      </div>
      
      <div className={`search-bar ${display}`} onClick={() => handleNavigate()}>
        <input type="text" className="dark:bg-transparent dark:border-gray-500 dark:text-white" placeholder="Search..." />
      </div>

      <div className="relative">
        <img 
          src={Image} 
          alt="logo_img" 
          className="w-[40px] h-[40px] rounded-full cursor-pointer object-cover ring ring-4 ring-offset-2 ring-vibrantGreen" 
          onClick={() => setProfileMenuOpen(!profileMenuOpen)}
        />
        {profileMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg py-1">
            <Link to="/profile" className="block px-4 py-2 text-gray-700 dark:text-white">Profile</Link>
            <Link to="/settings" className="block px-4 py-2 text-gray-700 dark:text-white">Settings</Link>
            <Link to="/logout" className="block px-4 py-2 text-gray-700 dark:text-white">Logout</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
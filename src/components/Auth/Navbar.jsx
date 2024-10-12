import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Image from '../../assets/hero.png'

const Navbar = ({ handleSideBarToggle, closed }) => {
  const { pathname } = useLocation();
  const [display, setDisplay] = useState('')
  const navigate = useNavigate()

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
        <i className={`pi ${ closed ? 'pi-close' : 'pi-bars' }`} className="" onClick={handleSideBarToggle}></i>
        <h2 className="text-2xl">DataEase</h2>
      </div>
      
      <div className={`search-bar ${display}`} onClick={() => handleNavigate()}>
        <input type="text" className="dark:bg-transparent dark:border-gray-500 dark:text-white" placeholder="Search..." />
      </div>
      
      <div className="navbar-content">
        <i className='bx bx-bell i'></i>
        <img src={Image} alt="logo_img" className="w-[40px] h-[40px] rounded-full" />
      </div>
      
    </nav>
  )
}

export default Navbar
import { useState, useEffect } from 'react'
import MobileNav from './MobileNav'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav
        className={`bg-transparent top-0 z-[999] backdrop-blur-2xl transition-all border border-transparent duration-500 ${
          isScrolled
            ? 'lg:fixed lg:w-[90%] lg:top-5 lg:py-[3px] lg:shadow-lg lg:rounded-[3rem] lg:border lg:border-[#ddd]'
            : 'lg:sticky lg:w-full lg:top-0 lg:scale-100 lg:py-4'
        }`}
      >
        <div className="w-full flex items-center justify-between py-4 px-[1rem] md:px-[2rem]">
          <div className="text-vibrantGreen text-3xl font-bold">
            <h1 className="">
              Data<span className="text-gray">Ease</span>
            </h1>
          </div>

          <ul className="items-center justify-center gap-2 space-x-10 hidden lg:flex">
            <li className="navlink">
              <a href="#home">Home</a>
            </li>
            <li className="navlink">
              <a href="#about">About Kap</a>
            </li>
            <li className="navlink">
              <a href="#features">Features</a>
            </li>
            <li className="navlink">
              <a href="#community">Community</a>
            </li>
            <li className="navlink">
              <a href="#faq">FAQs</a>
            </li>
          </ul>

          <div className="flex gap-2 lg:hidden">
            <button className="w-[8rem] h-[2.8rem] text-[14px] flex items-center justify-center border border-gray text-[#333] rounded-3xl cursor-pointer transition-all duration-300 hover:scale-[1.04]">Sign In</button>
            <button className="menu-btn" onClick={toggleMenu}>
              <span className={`pi ${openMenu ? 'pi-times' : 'pi-bars'} text-[1rem]`}></span>
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <button className="w-[8rem] h-[2.8rem] text-[14px] flex items-center justify-center border border-gray text-[#333] rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.04]">
              Login
            </button>
            <button className="menu-btn2 bg-vibrantGreen block">Sign Up</button>
          </div>
        </div>
      </nav>

      <div className="px-4 w-full flex items-center justify-center">
        <div className="bg-grey bg-opacity-40 w-[78%] h-[0.2px] px-2" />
      </div>
    </>
  )
}

export default Navbar

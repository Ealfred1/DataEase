import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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
			<motion.nav
				initial={{ opacity: 1, borderRadius: "0px" }}
				animate={isScrolled ? { 
					scale: 0.9, 
					borderRadius: "20px", 
					left: "50%", 
					top: "20px", 
					position: "fixed", 
					transform: "translateX(-50%)", 
					opacity: 0.9 
				} : { 
					scale: 1, 
					borderRadius: "0px", 
					left: "0", 
					top: "0", 
					position: "sticky", 
					transform: "translateX(0)", 
					opacity: 1 
				}}
				className={`bg-transparent py-2 sticky top-0 z-[999] backdrop-blur-2xl transition-all duration-300 ${isScrolled ? 'shadow-lg w-[90%]' : 'w-full'}`}
			>
				<div className="w-full flex items-center justify-between py-4 px-[1rem] md:px-[2rem]">
					<div className="text-vibrantGreen text-3xl font-bold">
						<h1 className="">Data<span className="text-gray">Ease</span></h1>
					</div>

					<ul className="items-center justify-center gap-2 space-x-10 hidden lg:flex">
						<li className="navlink"><a href="#home">Home</a></li>
						<li className="navlink"><a href="#about">About Kap</a></li>
						<li className="navlink"><a href="#features">Features</a></li>
						<li className="navlink	"><a href="#community">Community</a></li>
						<li className="navlink"><a href="#faq">FAQs	</a></li>
					</ul>

					<div className="flex gap-2 lg:hidden">
						<button className="menu-btn2 bg-lightGreen block">Sign In</button>
						<button className="menu-btn" onClick={toggleMenu}><span className={`pi ${openMenu ? 'pi-times' : 'pi-bars'} text-[1rem]`}></span></button>	
					</div>
					
					<div className="hidden lg:flex items-center gap-2">
						<button className="w-[8rem] h-[2.8rem] text-[14px] flex items-center justify-center border border-gray text-[#333] rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.04]">Login</button>
						<button className="menu-btn2 bg-vibrantGreen block">Sign Up</button>
					</div>
				</div>
			</motion.nav>

			<div className="px-4 w-full flex items-center justify-center">
				<div className="bg-grey bg-opacity-40 w-[78%] h-[0.2px] px-2" />
			</div>
		</>
	)
}

export default Navbar

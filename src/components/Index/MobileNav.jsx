import { useState } from 'react'

const MobileNav = ({ isOpen, toggleMenu }) => {
	return (
		<>
			<div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
				<div className="w-[60vw] h-screen bg-darkGreen p-[2rem]">
					<div className="text-green1 text-2xl font-bold">
						<h1 className="">Kap</h1>
					</div>
					<ul className="flex flex-col gap-4 ml-2 space-y-4 text-white">
						<li className="navlink"><a href="#home">Home</a></li>
						<li className="navlink"><a href="#about">About Kap</a></li>
						<li className="navlink"><a href="#features">Features</a></li>
						<li className="navlink"><a href="#community">Community</a></li>
						<li className="navlink"><a href="#faq"> FAQs</a></li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default MobileNav
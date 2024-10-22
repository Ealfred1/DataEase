import React from 'react'

const FooterBase = () => {
	return (
		<div className="bg-blue-50 text-black py-8">
		  <div className="container mx-auto px-4 text-center">
			{/* Footer Text */}
			<p className="text-sm mb-4">
			<div className='justify-center flex items-center'>
			<h2 className="text-2xl text-center mb-2 font-bold flex text-vibrantGreen">Data<p className='text-gray'>Ease</p></h2>
			</div>
			  © 2023 MyWebsite. All Rights Reserved.
			</p>
	
			{/* Social Media Links */}
			<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
			  <a href="#" className="hover:text-gray-400 flex items-center justify-center space-x-2">
				<i className="bx bxl-facebook"></i>
				<span>Facebook</span>
			  </a>
			  <a href="#" className="hover:text-gray-400 flex items-center justify-center space-x-2">
				<i className="bx bxl-twitter"></i>
				<span>Twitter</span>
			  </a>
			  <a href="#" className="hover:text-gray-400 flex items-center justify-center space-x-2">
				<i class='bx bxl-instagram-alt'></i>
				<span>Instagram</span>
			  </a>
			  <a href="#" className="hover:text-gray-400 flex items-center justify-center space-x-2">
				<i className="bx bxl-linkedin"></i>
				<span>LinkedIn</span>
			  </a>
			</div>
	
			{/* Additional Info */}
			<div className="mt-4">
			  <a href="mailto:dataease247@gmail.com" className="text-md font-medium text-gray-600">Email: dataease247@gmail.com</a>
			  <p className="text-md font-medium text-gray-600">
				Phone: +2349036105384
			  </p>
			</div>
		  </div>
		</div>
	  );
}

export default FooterBase
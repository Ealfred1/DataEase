import { useEffect, useRef } from 'react';
import { BackgroundBeams } from "../ui/background-beams";
import { Element, Link as LinkScroll } from "react-scroll";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'

const Hero = () => {
	const ballRefs = useRef([]);

	// Function to capture mouse movement and animate the balls
	const handleMouseMove = (e) => {
	    const { innerWidth, innerHeight } = window;
	    const xPos = (e.clientX / innerWidth) - 0.5;
	    const yPos = (e.clientY / innerHeight) - 0.5;

	    // Animate each ball slightly based on mouse movement
	    ballRefs.current.forEach((ball, index) => {
	      const movementIntensity = (index + 1) * 10; // Customize how much each ball moves
	      gsap.to(ball, {
	        x: xPos * movementIntensity,
	        y: yPos * movementIntensity,
	        duration: 1.2,
	        ease: "power2.out",
	      });
	    });
  	};


	  useEffect(() => {
	    // Add mousemove listener to the window
	    window.addEventListener('mousemove', handleMouseMove);

	    // Clean up mousemove listener on component unmount
	    return () => {
	      window.removeEventListener('mousemove', handleMouseMove);
	    };
	  }, []);

	return (
		<section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 mb-[200rem]">
	      <Element name="hero">
	        <div className="container">
	          <div className="relative z-2 max-w-512 max-lg:max-w-388">
	            <div className="caption small-2 uppercase text-orangeYellow">
	              Empowering Creators & Businesses
	            </div>
	            <h1 className="mb-6 h1 text-vibrantGreen uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
	              Thriving Online Made Easy
	            </h1>
	            <p className="max-w-440 mb-14 body-2 max-md:mb-10 text-gray">
	              Thrivr empowers entrepreneurs with customized storefronts, essential tools, and seamless workflows, enabling limitless growth potential.
	            </p>
	            <LinkScroll to="features" offset={-100} spy smooth>
	              <button className="">Get Started</button>
	            </LinkScroll>
	          </div>

	          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
	            <img
	              src="/vite.svg"
	              className="size-1230 scale-[0.534]  max-lg:h-auto"
	              alt="hero"
	            />
	          </div>
	        </div>
	      </Element>
	      <BackgroundBeams />
	    </section>
	)
}

export default Hero
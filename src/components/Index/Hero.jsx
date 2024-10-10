import { useEffect, useRef } from 'react';
import { BackgroundBeams } from "../ui/background-beams";
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
		<section>
			

			<BackgroundBeams />
		</section>
	)
}

export default Hero
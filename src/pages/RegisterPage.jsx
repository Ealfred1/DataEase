import { useRef } from 'react'
import { Link } from 'react-router-dom'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Lottie from 'lottie-react';
import animationData from '../assets/Animation - 1728603847074.json'

const RegisterPage = () => {
	const animationRef = useRef(null);

	return (
		<div>
			<div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
		<div className="hidden bg-transparent lg:block">
	        {/*<img
	          src="/placeholder.svg"
	          alt="Image"
	          width="1920"
	          height="1080"
	          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
	        />*/}
	        <Lottie lottieRef={animationRef} animationData={animationData} className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />
	      </div>
	      <div className="flex items-center justify-center py-12">
	        <div className="mx-auto grid w-[350px] gap-6">
	          <div className="grid gap-2 text-left">
	            <h1 className="h4 font-bold text-vibrantGreen relative mb-3">Create an Account</h1>
	            <p className="text-gray small-1">
	              Create an account and explore VTU offers and rewards
	            </p>
	          </div>
	          <div className="grid gap-4">
	            <div className="grid gap-2">
	              <Label htmlFor="full-name" className="small-1 text-gray font-semibold text-[16px]">Full Name</Label>
	              <input
	                id="full-name"
	                type="text"
	                className="task-input"
	                placeholder="Sam Smither"
	                required
	              />
	            </div>
	            <div className="grid gap-2">
	              <Label htmlFor="username" className="small-1 text-gray font-semibold text-[16px]">Username</Label>
	              <input
	                id="username"
	                type="text"
	                className="task-input"
	                placeholder="Sam Smither"
	                required
	              />
	            </div>
	            <div className="grid gap-2">
	              <Label htmlFor="email" className="small-1 text-gray font-semibold text-[16px]">Email</Label>
	              <input
	                id="email"
	                type="email"
	                className="task-input"
	                placeholder="email@example.com"
	                required
	              />
	            </div>
	            <div className="grid gap-2">
	              <div className="flex items-center">
	                <Label htmlFor="password" className="small-1 text-gray font-semibold text-[16px]">Password</Label>
	                <Link
	                  href="/forgot-password"
	                  className="ml-auto inline-block text-sm underline text-lightGreen"
	                >
	                  Forgot your password?
	                </Link>
	              </div>
	              <input id="password" className="task-input" type="password" placeholder="helloDataEase@1>" required />
	            </div>
	            <Button type="submit" className="inline-flex h-16 animate-shimmer items-center justify-center rounded-2xl border-none bg-[linear-gradient(110deg,#00c158,45%,#7ad67f,55%,#00c158)] body-2 bg-[length:200%_100%] px-16 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-50">
	              Login
	            </Button>
	          </div>
	          <div className="mt-4 text-center text-sm text-green-900">
	            Don&apos;t have an account?{" "}
	            <Link to="/register" className="underline">
	              Sign up
	            </Link>
	          </div>
	        </div>
	      </div>
    </div>
		</div>
	)
}

export default RegisterPage
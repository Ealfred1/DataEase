import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../assets/Animation - 1728603847074.json';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const RegisterPage = () => {
  const { register, otpSent, verifyOtp } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    full_name: '',
    username: '',
    phone_number: '',
    email: '',
    password: '',
  });
  const [otp, setOtp] = useState('');

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    register({
      first_name: userData.full_name.split(' ')[0],
      last_name: userData.full_name.split(' ')[1] || '',
      phone_number: userData.phone_number,
      email: userData.email,
      username: userData.username,
      password: userData.password,
      is_active: false,
    });
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    verifyOtp(userData.email, otp);
  };

  return (
    <div>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="hidden bg-transparent lg:block">
          <Lottie animationData={animationData} className="h-full w-full object-cover" />
        </div>
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-left">
              <h1 className="h4 font-bold text-vibrantGreen relative mb-3">
                {otpSent ? 'Enter OTP' : 'Create an Account'}
              </h1>
              <p className="text-gray small-1">
                {otpSent ? 'Check your email for the OTP.' : 'Create an account to explore VTU offers and rewards'}
              </p>
            </div>
            <div className="grid gap-4">
              {!otpSent ? (
                <>
                  {/* Registration Form */}
                  <div className="grid gap-2">
                  	<Label htmlFor="full-name" className="small-1 text-gray font-semibold text-[16px]">Full Name</Label>
                    <input
                      id="full_name"
                      type="text"
                      value={userData.full_name}
                      onChange={handleChange}
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
                      value={userData.username}
                      onChange={handleChange}
                      className="task-input"
                      placeholder="Sterling"
                      required
                    />
                   </div>
                   <div className="grid gap-2">
                   <Label htmlFor="phone" className="small-1 text-gray font-semibold text-[16px]">Phone Number</Label>
                    <input
                      id="phone_number"
                      type="tel"
                      value={userData.phone_number}
                      onChange={handleChange}
                      className="task-input"
                      placeholder="09132347584"
                      required
                    />
                   </div>
                   <div className="grid gap-2">
                    <input
                      id="email"
                      type="email"
                      value={userData.email}
                      onChange={handleChange}
                      className="task-input"
                      placeholder="Email"
                      required
                    />
                   </div>

                   <div className="grid gap-2">
                    <input
                      id="password"
                      type="password"
                      value={userData.password}
                      onChange={handleChange}
                      className="task-input"
                      placeholder="Password"
                      required
                    />
                   </div>
                  <button onClick={handleRegister} className="inline-flex h-16 animate-shimmer items-center justify-center rounded-2xl border-none bg-[linear-gradient(110deg,#00c158,45%,#7ad67f,55%,#00c158)] body-2 bg-[length:200%_100%] px-16 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  {/* OTP Verification Form */}
                  <div className="grid gap-2">
                    <input
                      id="otp"
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="task-input"
                      placeholder="Enter OTP"
                      required
                    />
                  </div>
                  <button onClick={handleVerifyOtp} className="btn-primary">
                    Verify OTP
                  </button>
                </>
              )}
            </div>
            {!otpSent && (
              <div className="mt-4 text-center text-sm text-green-900">
                Already have an account?{" "}
                <Link to="/login" className="underline">
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

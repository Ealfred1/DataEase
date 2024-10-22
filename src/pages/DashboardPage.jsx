import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation to settings page
import { DashboardContext } from '../context/DashboardContext';
import Swal from 'sweetalert2'; // SweetAlert2 for modals
import { TransactionSection } from '../components';

const DashboardPage = () => {
  const { user, loading } = useContext(DashboardContext);
  const navigate = useNavigate(); // To navigate the user to the settings page

  // Show the modal if the user doesn't have a pin
  useEffect(() => {
    if (user && user?.pin === null) {
      Swal.fire({
        title: 'Set Your PIN',
        text: 'You currently don’t have a PIN set. Would you like to create one?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Set PIN',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/settings'); // Navigate to settings page to set the PIN
        }
      });
    }
  }, [user, navigate]);

  return (
    <div className="px-1 w-full lg:pr-4">
      {/* Main Dashboard Sections */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:space-x-3 space-x-0 px-3">
        
        {/* Welcome Section - Left Side */}
        <div className="w-[100%] md:w-[70%] h-auto lg:h-80 bg-vibrantGreen bg-opacity-10 border border-vibrantGreen border-opacity-50 rounded-2xl px-7 pt-4 pb-5 flex gap-2 flex-row justify-between relative">
          <div className="pt-5">
            <p className="text-neutral-700">Hello! 👋</p>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-3">{user?.first_name} {user?.last_name}</h1>
            <p className="text-gray-500 tracking-wide mb-3">Explore your dashboard</p>
            <div className="flex lg:hidden justify-between gap-2">
              <button className="inline-flex h-14 animate-shimmer items-center justify-center rounded-2xl border-none bg-[linear-gradient(110deg,#00c158,45%,#7ad67f,55%,#00c158)] bg-[length:200%_100%] px-14 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-52 text-sm rounded-[4rem] px-0 whitespace-nowrap hover:opacity-70">Fund Wallet <i className="pi pi-wallet ml-2"></i></button>
            </div>
            <div className="hidden absolute bottom-5 lg:flex justify-between gap-2">
              <button className="inlinegit-flex h-14 animate-shimmer items-center justify-center rounded-2xl border-none bg-[linear-gradient(110deg,#00c158,45%,#7ad67f,55%,#00c158)] bg-[length:200%_100%] px-14 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-52 text-sm rounded-[4rem] px-0 whitespace-nowrap hover:opacity-70">Fund Wallet <i className="pi pi-wallet ml-2"></i></button>
              <button className="inline-flex h-14 animate-shimmer items-center justify-center rounded-2xl border border-vibrantGreen hover:bg-[linear-gradient(110deg,#00c158,45%,#7ad67f,55%,#00c158)] hover:text-white  bg-[length:200%_100%] px-14 font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-52 whitespace-nowrap bg-transparent rounded-[4rem]">Upgrade Account <i className="pi pi-arrow-up ml-2"></i></button>
            </div>
          </div>

          <div className="pt-10">
            <div className="space-y-1 mb-5">
              <p className="text-gray text-[12px] lg:text-[13px]">Main Balance</p>
              <p className="font-semibold text-black  text-right text-opacity-90 text-lg sm:text-3xl"><span className="text-opacity-70 text-black whitespace-nowrap">₦</span> {user.balance}</p>
            </div>
            <div className="flex gap-2 flex-col text-right absolute bottom-5 right-5">
              <div className="">
                <p className="text-gray text-[11px]">Your Number</p>
                <p className="font-semibold text-black text-opacity-90 text-[12px] lg:text-lg">**** *** {(user.phone_number).slice(-4)}</p>
              </div>
              <div className="">
                <p className="text-gray text-[11px]">Referral Bonus</p>
                <p className="font-semibold text-black text-opacity-90 text-[12px] lg:text-lg">₦ 150.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full md:w-[40%] sm:h-80 bg-vibrantGreeni bg-opacity-10 border border-opacity-50 border-vibrantGreen rounded-2xl py-8 sm:mt-0">
          <h2 className="text-gray-800 text-left font-medium  px-4 lg:text-left text-lg sm:text-xl mb-6">Features</h2>
          
          <div className="grid grid-cols-3 gap-6">
            {/* Data */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-2">
                <i className="pi pi-wifi text-blue-500  text-xl"></i>
              </div>
              <p className="text-gray-800 text-sm">Data</p>
            </div>

            {/* Wallet */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-2">
                <i className="pi pi-wallet text-green-500 text-xl"></i>
              </div>
              <p className="text-gray-800 text-sm">Wallet</p>
            </div>

            {/* Airtime */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mb-2">
                <i className="pi pi-mobile text-yellow-500 text-xl"></i>
              </div>
              <p className="text-gray-800 text-sm">Airtime</p>
            </div>

            {/* Electricity */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-2">
                <i className="pi pi-bolt text-purple-500 text-xl"></i>
              </div>
              <p className="text-gray-800 text-sm">Electricity</p>
            </div>

            {/* Education */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center mb-2">
                <i className="pi pi-book text-pink-500 text-xl"></i>
              </div>
              <p className="text-gray-800 text-sm">Education</p>
            </div>

            {/* Bills */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-2">
                <i className="pi pi-money-bill text-red-500 text-xl"></i>
              </div>
              <p className="text-gray-800 text-sm">Cable</p>
            </div>
          </div>
        </div>
      </div>

      <TransactionSection/>
    </div>
  );
};

export default DashboardPage;

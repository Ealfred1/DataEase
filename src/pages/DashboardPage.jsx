import React from 'react'

const DashboardPage = () => {
  return (
    <div className="container mx-auto">
      {/* Main Dashboard Sections */}
      <div className="flex flex-col md:flex-row justify-between items-center md:space-x-3 space-x-0 px-3">
        
        {/* Welcome Section - Left Side */}
        <div className="w-full md:w-[70%] h-80 bg-vibrantGreen bg-opacity-10 border border-vibrantGreen border-opacity-50 rounded-2xl px-7 pt-4 pb-5 flex gap-2 flex-col md:flex-row justify-between relative">
          <div className="pt-10">
            <p className="text-neutral-700">Hello! 👋</p>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-3">Eric Alfred</h1>
            <p className="text-gray-500 tracking-wide mb-3">Explore your dashboard</p>

            <div className="absolute bottom-5 flex justify-between gap-2">
              <button className="inline-flex h-14 animate-shimmer items-center justify-center rounded-2xl border-none bg-[linear-gradient(110deg,#00c158,45%,#7ad67f,55%,#00c158)] bg-[length:200%_100%] px-14 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-52 text-sm rounded-[4rem] px-0 whitespace-nowrap hover:opacity-70">Fund Wallet <i className="pi pi-wallet ml-2"></i></button>
              <button className="inline-flex h-14 animate-shimmer items-center justify-center rounded-2xl border border-vibrantGreen hover:bg-[linear-gradient(110deg,#00c158,45%,#7ad67f,55%,#00c158)] hover:text-white  bg-[length:200%_100%] px-14 font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-52 whitespace-nowrap bg-transparent rounded-[4rem]">Upgrade Account <i className="pi pi-arrow-up ml-2"></i></button>
            </div>
          </div>

          <div className="pt-10">
          <div className="space-y-1">
            <p className="text-gray text-[15px]">Wallet Balance</p>
            <p className="font-bold text-gray-900 text-2xl sm:text-3xl">₦500,000</p>
          </div>
          <div className="space-y-4">
            <p className="text-gray-800 text-lg sm:text-xl">Referral Bonus</p>
            <p className="font-bold text-gray-900 text-2xl sm:text-3xl">₦50,000</p>
          </div>
          </div>
        </div>

        {/* Wallet Balance & Referral Bonus - Right Side */}
        <div className="w-full md:w-[30%] h-80 bg-vibrantGreen bg-opacity-10 border border-opacity-50 border-vibrantGreen rounded-2xl pl-6 py-8 space-y-8 sm:mt-0">
          <div className="space-y-4">
            <p className="text-gray-800 text-lg sm:text-xl mb-1">Wallet Balance</p>
            <p className="font-bold text-gray-900 text-2xl sm:text-3xl">₦500,000</p>
          </div>
          <div className="space-y-4">
            <p className="text-gray-800 text-lg sm:text-xl">Referral Bonus</p>
            <p className="font-bold text-gray-900 text-2xl sm:text-3xl">₦50,000</p>
          </div>
        </div>
      </div>

      {/* Shortcuts Section */}
      <div className="mt-10 px-3">
        <h2 className="text-2xl font-bold text-gray-900">Your Shortcuts</h2>
      </div>
      
      {/* Shortcut Buttons */}
      <div className="flex flex-wrap gap-4 mt-4 px-3">
        <Shortcut icon="pi pi-wifi" label="Buy Data" />
        <Shortcut icon="pi pi-phone" label="Buy Airtime" />
        <Shortcut icon="pi pi-tv" label="Cable Subscription" />
        <Shortcut icon="pi pi-bolt" label="Electricity" />
        <Shortcut icon="pi pi-graduation-cap" label="Result Checker" />
      </div>
    </div>
  )
}

const Shortcut = ({ icon, label }) => (
  <div className="box w-32 h-32 bg-white rounded-lg flex flex-col items-center justify-center shadow-md hover:shadow-lg transition">
    <i className={`${icon} text-6xl text-vibrantGreen mb-2`}></i>
    <div className="text-gray-800 text-center">{label}</div>
  </div>
)

export default DashboardPage

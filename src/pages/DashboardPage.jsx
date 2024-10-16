import React from 'react'

const DashboardPage = () => {
  return (
    <div className="container mx-auto">
      {/* Main Dashboard Sections */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:space-x-3 px-3">
        
        {/* Welcome Section - Left Side */}
        <div className="w-full sm:w-[70%] h-80 bg-vibrantGreen bg-opacity-10 border border-vibrantGreen rounded-2xl px-7 pt-4 pb-5">
          <div className="space-y-5 pt-10">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-700">Welcome back, John!</h1>
            <p className="text-gray-500 tracking-wide">Explore your dashboard</p>
            <button className="w-80 bg-white text-vibrantGreen font-bold py-2 px-4 rounded-lg hover:bg-vibrantGreen hover:text-white transition">
              Fund Wallet
            </button>
          </div>
        </div>

        {/* Wallet Balance & Referral Bonus - Right Side */}
        <div className="w-full sm:w-[30%] h-full bg-gradient-to-r from-vibrantGreen to-blue-400 rounded-2xl pl-6 py-8 space-y-8 mt-9 sm:mt-0">
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

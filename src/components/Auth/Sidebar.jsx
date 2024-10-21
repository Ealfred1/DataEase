import { Link, useLocation } from 'react-router-dom'
import Image from '../../assets/hero.png'

const SideBar = ({ sideBarClose, handleSideBarToggle }) => {
  
  const location = useLocation()
  const isActive = (path) => {
    return location.pathname === path ? 'ring ring-2 ring-vibrantGreen text-white' : 'text-white'
  }

  const toggle = () => {
    if (sideBarClose) {
      handleSideBarToggle()
    }
  }
  
  return (
    <nav className={sideBarClose ? 'sidebar dark:bg-slate-900' : 'sidebar close dark:bg-slate-900'}>
      <div className="menu_content pt-10" onClick={toggle}>
        <ul className="menu_items space-y-6">
          {/* Menu Section */}
          <div className="menu_title font-semibold menu_dashboard"></div> 
          <li className="item">
            <Link to="/dashboard" className={`nav_link ${isActive('/dashboard')}`} title='Dashboard'>
              <span className="navlink_icon">
                <i className="pi pi-th-large"></i>
              </span>
              <span className="navlink2">Dashboard</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/fund" className={`nav_link ${isActive('/fund')}`} title='Fund Account'>
              <span className="navlink_icon">
                <i className="pi pi-wallet"></i>
              </span>
              <span className="navlink2">Fund Account</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/data-sub" className={`nav_link ${isActive('/data-sub')}`} title='Data Sub'>
              <span className="navlink_icon">
                <i className="pi pi-wifi"></i>
              </span>
              <span className="navlink2">Data Sub</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/airtime-sub" className={`nav_link ${isActive('/airtime-sub')}`} title='Airtime Sub'>
              <span className="navlink_icon">
                <i className="pi pi-mobile"></i>
              </span>
              <span className="navlink2">Airtime Sub</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/bills" className={`nav_link ${isActive('/bills')}`} title='Bills'>
              <span className="navlink_icon">
                <i className="pi pi-credit-card"></i>
              </span>
              <span className="navlink2">                  <span className="navlink2">Cable Sub</span></span>
            </Link>
          </li>
          <li>
            <Link to="/bills/electricity-sub" className={`nav_link ${isActive('/bills/electricity-sub')}`} title='Electricity Sub'>
              <span className="navlink_icon"><i className="pi pi-bolt"></i></span>
              <span className="navlink2">Electricity Sub</span>
            </Link>
          </li>
          <li>
            <Link to="/bills/exam-sub" className={`nav_link ${isActive('/bills/exam-sub')}`} title='NECO/WAEC'>
              <span className="navlink_icon"><i className="pi pi-book"></i></span>
              <span className="navlink2">NECO/WAEC</span>
            </Link>
          </li>

          {/* Admin Section */}
          <div className="menu_title font-semibold menu_admin"></div> 
          <li className="item">
            <Link to="/admin" className={`nav_link ${isActive('/admin')}`} title='Admin Panel'>
              <span className="navlink_icon">
                <i className="pi pi-lock"></i>
              </span>
              <span className="navlink2">Admin Panel</span>
            </Link>
          </li>

          {/* Transactions Section */}
          <div className="menu_title font-semibold menu_trans"></div>
          <li className="item">
            <Link to="/transactions/payment" className={`nav_link ${isActive('/transactions/payment')}`} title='Payment'>
              <span className="navlink_icon">
                <i className="pi pi-dollar"></i>
              </span>
              <span className="navlink2">Payment</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/transactions/purchase-history" className={`nav_link ${isActive('/transactions/purchase-history')}`} title='Purchase History'>
              <span className="navlink_icon">
                <i className="pi pi-shopping-cart"></i>
              </span>
              <span className="navlink2">Purchase History</span>
            </Link>
          </li>

          {/* Profile Section */}
          <div className="menu_title font-semibold menu_setting"></div>
          <li className="item">
            <Link to="/profile/bonus" className={`nav_link ${isActive('/profile/bonus')}`} title='Bonus'>
              <span className="navlink_icon">
                <i className="pi pi-gift"></i>
              </span>
              <span className="navlink2">Bonus</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/profile/referrals" className={`nav_link ${isActive('/profile/referrals')}`} title='Referrals'>
              <span className="navlink_icon">
                <i className="pi pi-users"></i>
              </span>
              <span className="navlink2">Referrals</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/profile/settings" className={`nav_link ${isActive('/profile/settings')}`} title='Settings'>
              <span className="navlink_icon">
                <i className="pi pi-cog"></i>
              </span>
              <span className="navlink2">Settings</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/profile/api" className={`nav_link ${isActive('/profile/api')}`} title='Developers API'>
              <span className="navlink_icon">
                <i className="pi pi-code"></i>
              </span>
              <span className="navlink2">Developers API</span>
            </Link>
          </li>

          {/* Support Section */}
          <div className="menu_title font-semibold menu_support"></div>
          <li className="item">
            <Link to="/support/faqs" className={`nav_link ${isActive('/support/faqs')}`} title='FAQs'>
              <span className="navlink_icon">
                <i className="pi pi-question-circle"></i>
              </span>
              <span className="navlink2">FAQs</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/support/contact" className={`nav_link ${isActive('/support/contact')}`} title='Contact Us'>
              <span className="navlink_icon">
                <i className="pi pi-envelope"></i>
              </span>
              <span className="navlink2">Contact Us</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/support/pricing" className={`nav_link ${isActive('/support/pricing')}`} title='Pricing'>
              <span className="navlink_icon">
                <i className="pi pi-money-bill"></i>
              </span>
              <span className="navlink2">Pricing</span>
            </Link>
          </li>

          {/* Logout Section */}
          <div className="bottom_content">  
            <div className="bottom collapse_sidebar text-center dark:bg-slate-900">
              <div className="flex items-center">
                <img src={Image} alt="" className="" />
              </div>
              <div className="pr-[1.5px]">
                <h1 className="text-sm font-bold text-black text-opacity-80 text-left">Eric Alfred</h1>
                <p className="text-sm"></p>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default SideBar

import { Link, useLocation } from 'react-router-dom'

const SideBar = ({ sideBarClose, handleSideBarToggle }) => {
  
  const location = useLocation()
  const isActive = (path) => {
    return location.pathname === path ? 'bg-vibrantGreen text-white' : 'hover:text-red-500'
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
          <div className="menu_title font-semibold">Menu</div> 
          <li className="item">
            <Link to="/fund" className={`nav_link ${isActive('/fund')}`} title='Fund Account'>
              <span className="navlink_icon">
                <i className="pi pi-wallet"></i>
              </span>
              <span className="navlink">Fund Account</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/data-sub" className={`nav_link ${isActive('/data-sub')}`} title='Data Sub'>
              <span className="navlink_icon">
                <i className="pi pi-wifi"></i>
              </span>
              <span className="navlink">Data Sub</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/airtime-sub" className={`nav_link ${isActive('/airtime-sub')}`} title='Airtime Sub'>
              <span className="navlink_icon">
                <i className="pi pi-mobile"></i>
              </span>
              <span className="navlink">Airtime Sub</span>
            </Link>
          </li>
          
          {/* Bills Section */}
          <li className="item">
            <Link to="/bills" className={`nav_link ${isActive('/bills')}`} title='Bills'>
              <span className="navlink_icon">
                <i className="pi pi-credit-card"></i>
              </span>
              <span className="navlink">Bills</span>
            </Link>
            <ul className="ml-6 space-y-2">
              <li>
                <Link to="/bills/cable-sub" className={`nav_link ${isActive('/bills/cable-sub')}`} title='Cable Sub'>
                  <span className="navlink_icon"><i className="pi pi-tv"></i></span>
                  <span className="navlink">Cable Sub</span>
                </Link>
              </li>
              <li>
                <Link to="/bills/electricity-sub" className={`nav_link ${isActive('/bills/electricity-sub')}`} title='Electricity Sub'>
                  <span className="navlink_icon"><i className="pi pi-bolt"></i></span>
                  <span className="navlink">Electricity Sub</span>
                </Link>
              </li>
              <li>
                <Link to="/bills/exam-sub" className={`nav_link ${isActive('/bills/exam-sub')}`} title='NECO/WAEC'>
                  <span className="navlink_icon"><i className="pi pi-book"></i></span>
                  <span className="navlink">NECO/WAEC</span>
                </Link>
              </li>
            </ul>
          </li>

          {/* Admin Section */}
          <div className="menu_title font-semibold">Admin</div> 
          <li className="item">
            <Link to="/admin" className={`nav_link ${isActive('/admin')}`} title='Admin Panel'>
              <span className="navlink_icon">
                <i className="pi pi-lock"></i>
              </span>
              <span className="navlink">Admin Panel</span>
            </Link>
          </li>

          {/* Transactions Section */}
          <div className="menu_title font-semibold">Transactions</div>
          <li className="item">
            <Link to="/transactions/payment" className={`nav_link ${isActive('/transactions/payment')}`} title='Payment'>
              <span className="navlink_icon">
                <i className="pi pi-dollar"></i>
              </span>
              <span className="navlink">Payment</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/transactions/purchase-history" className={`nav_link ${isActive('/transactions/purchase-history')}`} title='Purchase History'>
              <span className="navlink_icon">
                <i className="pi pi-shopping-cart"></i>
              </span>
              <span className="navlink">Purchase History</span>
            </Link>
          </li>

          {/* Profile Section */}
          <div className="menu_title font-semibold">Profile</div>
          <li className="item">
            <Link to="/profile/bonus" className={`nav_link ${isActive('/profile/bonus')}`} title='Bonus'>
              <span className="navlink_icon">
                <i className="pi pi-gift"></i>
              </span>
              <span className="navlink">Bonus</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/profile/referrals" className={`nav_link ${isActive('/profile/referrals')}`} title='Referrals'>
              <span className="navlink_icon">
                <i className="pi pi-users"></i>
              </span>
              <span className="navlink">Referrals</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/profile/settings" className={`nav_link ${isActive('/profile/settings')}`} title='Settings'>
              <span className="navlink_icon">
                <i className="pi pi-cog"></i>
              </span>
              <span className="navlink">Settings</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/profile/api" className={`nav_link ${isActive('/profile/api')}`} title='Developers API'>
              <span className="navlink_icon">
                <i className="pi pi-code"></i>
              </span>
              <span className="navlink">Developers API</span>
            </Link>
          </li>

          {/* Support Section */}
          <div className="menu_title font-semibold">Support</div>
          <li className="item">
            <Link to="/support/faqs" className={`nav_link ${isActive('/support/faqs')}`} title='FAQs'>
              <span className="navlink_icon">
                <i className="pi pi-question-circle"></i>
              </span>
              <span className="navlink">FAQs</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/support/contact" className={`nav_link ${isActive('/support/contact')}`} title='Contact Us'>
              <span className="navlink_icon">
                <i className="pi pi-envelope"></i>
              </span>
              <span className="navlink">Contact Us</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/support/pricing" className={`nav_link ${isActive('/support/pricing')}`} title='Pricing'>
              <span className="navlink_icon">
                <i className="pi pi-money-bill"></i>
              </span>
              <span className="">Pricing</span>
            </Link>
          </li>

          {/* Logout Section */}
          <div className="bottom_content">  
            <div className="bottom collapse_sidebar text-center dark:bg-slate-900">
              <button title='Logout'>
                <span>Logout </span>
                <i className='pi pi-sign-out'></i>
              </button>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default SideBar

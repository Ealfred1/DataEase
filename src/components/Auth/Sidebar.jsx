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
          <div className="menu_title menu_dashboard font-semibold"></div> 
          <li className="item">
            <Link to="/dashboard" className={`nav_link ${isActive('/dashboard')}`} title='Dashboard'>
              <span className="navlink_icon">
                <i className="pi pi-home"></i>
              </span>
              <span className="navlink">Dashboard</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/task" className={`nav_link ${isActive('/task')}`} title='Task Overview'>
              <span className="navlink_icon">
                <i className="pi pi-file"></i>
              </span>
              <span className="navlink">Task Overview</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/category" className={`nav_link ${isActive('/category')}`} title='Categories'>
              <span className="navlink_icon">
                <i className="pi pi-box"></i>
              </span>
              <span className="navlink">Categories</span>
            </Link>
          </li>
          
          <li className="item">
            <Link to="/search" className={`nav_link ${isActive('/search')}`} title='Search'>
              <span className="navlink_icon">
                <i className="pi pi-search"></i>
              </span>
              <span className="navlink">Search</span>
            </Link>
          </li>

          <li className="item">
            <Link to="/projects" className={`nav_link ${isActive('/projects')}`} title='Projects'>
              <span className="navlink_icon">
                <i className="pi pi-code"></i>
              </span>
              <span className="navlink">Projects</span>
            </Link>
          </li>


          <li className="item">
            <Link to="/calendar" className={`nav_link ${isActive('/calendar')}`} title='Calendar'>
              <span className="navlink_icon">
                <i className="pi pi-calendar"></i>
              </span>
              <span className="navlink">Calendar</span>
            </Link>
          </li>
          <li className="item">
            <Link to="/settings" className={`nav_link ${isActive('/settings')}`} title='Settings'>
              <span className="navlink_icon">
                <i className="pi pi-cog"></i>
              </span>
              <span className="navlink">Settings</span>
            </Link>
          </li>
        </ul>

        <div className="bottom_content">  
          <div className="bottom collapse_sidebar text-center dark:bg-slate-900">
          <button title='Logout'>
            <span>Logout </span>
            <i className='pi pi-log-out'></i>
          </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default SideBar
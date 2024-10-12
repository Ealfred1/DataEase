import { useLocation, Navigate, Outlet } from 'react-router-dom'

const RequireAuth = () => {
  const access = localStorage.getItem('accessToken');
  const location = useLocation()
  
  
  return (
    // auth?.access ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
    access ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default RequireAuth
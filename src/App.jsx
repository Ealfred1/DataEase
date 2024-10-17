import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Layout, RequireAuth, AuthLayout } from './components'
import { LandingPage, LoginPage, RegisterPage, NotFound, DashboardPage } from './pages'

const App = () => {

  return (
    <div className="w-full h-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/*' element={<NotFound />} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route element={<AuthLayout />}>
            <Route path='/dashboard' element={<DashboardPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App

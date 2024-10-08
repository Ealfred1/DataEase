import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components'
import { LandingPage, LoginPage, RegisterPage, NotFound } from './pages'

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          {/*<Route path="/waitlist" element={<WaitlistPage />} />*/}
          <Route path='/*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

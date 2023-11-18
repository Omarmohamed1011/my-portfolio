import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppError from './components/AppError.jsx'
import Childhood from './components/Childhood.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Aspirations from './components/Aspirations.jsx'
import Contact from './components/Contact.jsx'
import Homepage from './components/Homepage.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider  } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<App />}
      errorElement={AppError}
    >
      <Route index element={<Homepage />} />
      <Route path='/childhood' element={<Childhood />} />
      <Route path='/education' element={<Education />} />
      <Route path='/skills-and-talents' element={<Skills />} />
      <Route path='/aspirations' element={<Aspirations />} />
      <Route path='/contact-information' element={<Contact />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

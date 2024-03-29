import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import HomePage from './pages/Home.jsx'
import ResumePage from './pages/Resume.jsx'
import PortfolioPage from './pages/Portfolio.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import ContactPage from './pages/Contact.jsx'

import { ThemeProvider } from '@material-tailwind/react';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'resume',
        element: <ResumePage />
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)

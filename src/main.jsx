import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './AllComponent/Sharied/Route/Route.jsx'
import AuthProvider from './AllComponent/AuthoncationAll/AuthProvider/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route}></RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,


)

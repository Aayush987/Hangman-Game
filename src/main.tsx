import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Homepage from './pages/Homepage.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/App",
    element: <App />,
  },
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} >
      <App />
     </RouterProvider>
  </React.StrictMode>,
)

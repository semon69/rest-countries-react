import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Registration from './components/Registration';
import SingleCourseDetails from './components/SingleCourseDetails';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/about",
        element: <About></About>
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch('https://restcountries.com/v3.1/all')
      },
      {
        path: "/courses/:name",
        element: <SingleCourseDetails></SingleCourseDetails>,
        loader: ({params}) => fetch(`https://restcountries.com/v3.1/name/${params.name}`)
      },
      {
        path:"/registration",
        element: <Registration></Registration>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from './Component/About.jsx';
import Eduction from './Component/Eduction.jsx';
import Home from './Component/Home.jsx';
import Skills from './Component/Skills.jsx';
import Projects from './Component/Projects.jsx';


  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <App />,
  //     children: [
  //       {
  //         path: "/home",
  //         element: <Home />,
  //       },
  //       {
  //         path: "/about",
  //         element: <About />,
  //       },
  //       { 
  //         path:"/Education",
  //         element: <Eduction/>
  
  //       },
  //       { 
  //         path:"/Skills",
  //         element: <Skills/>
  
  //       },
  //       { 
  //         path:"/Projects",
  //         element: <Projects/>
  
  //       },
       
  //     ],
  //   },
  // ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <RouterProvider router={router}></RouterProvider> */}
      <App></App>
  </React.StrictMode>,
)

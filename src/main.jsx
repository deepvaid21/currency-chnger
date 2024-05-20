import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Router/componets/Home/Home.jsx'
import About from './Router/componets/About/About.jsx'
import Contact from './Router/componets/Contact/Contact.jsx'
import User from './Router/componets/User/User.jsx'
import Github, { githubInfoLoader } from './Router/componets/Github/Github.jsx'
// first way 
// const router = createBrowserRouter ([
//   {path:'/',element:<Layout/>,
//   children:[{path:'',element:<Home />},{
//     path:"about",
//     element:<About/>
//   },{
//     path:'Contact',
//     element:<Contact />
//   }]}
// ])
// second way 
const router= createBrowserRouter(createRoutesFromElements(
  <Route path='/'element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/> 
    {/* nested route : it means about de andr koi hor path 
    <Route path='deep'/>
    </Route> */}
    
    <Route path='Contact' element={<Contact/>}/>
    <Route 
    loader={githubInfoLoader}
    path='Github' 
    element={<Github/>}/>
    <Route path='User/:UserId' element={<User/>}/>
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* RouterProvider nu ik hi chiz chahidi ha oh ha this.props. */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

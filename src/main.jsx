import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter,Route,createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Flights from './SidebarComponents/Flights.jsx'
import Hotels from './SidebarComponents/hotels.jsx'
import Destination from './SidebarComponents/Destination.jsx'
import Login from './LoginComponents/Login.jsx'
import Home from './LoginComponents/Home.jsx'
import Signup from './LoginComponents/Signup.jsx'
import Trains from './SidebarComponents/Trains.jsx'
import About from './NavbarComponents/About.jsx'
import Contact from './NavbarComponents/Contact.jsx'
import Construction from './SidebarComponents/Construction.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/flights' element={<Flights/>}/>
      <Route path='/hotels' element={<Hotels/>}/>
      <Route path='/destination' element={<Destination/>}/>
      <Route path='/trains' element={<Trains/>}/>
      <Route path='/register' element={<Signup/>}/>

      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/register/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>

     <Route path='/construction' element={<Construction/>}/>


    </Route>




  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

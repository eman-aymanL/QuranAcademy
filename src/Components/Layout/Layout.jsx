import React from 'react'
import Navbar from './../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
     <div>
         <Navbar/>
    <div className='h-screen bg-slate-200 dark:bg-black dark:text-white'>
    <Outlet/>
    </div>
    <Footer/>
     </div>
  )
}

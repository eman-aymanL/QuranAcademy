import { createHashRouter, RouterProvider } from 'react-router'
import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Layout from './Components/Layout/Layout';
import Error from './Components/Error/Error';
import { LanguageProvider } from './Components/Context/LanguageContext/LanguageContext';
import Services from './Components/Services/Services';

function App() {
  const router =createHashRouter([
    {path:'',element:<Layout/>, children:[
      {index:'home' ,element:<Home/>},
      {path:'home' ,element:<Home/>},
      {path:'about' ,element:<About/>},
      {path:'contact' ,element:<Contact/>},
      {path:'services' ,element:<Services/>},
      {path:'*' , element:<Error/>},
    ]}
  ])

  return (
    <LanguageProvider>
    <RouterProvider router={router} />
  </LanguageProvider>
   
  )
}

export default App

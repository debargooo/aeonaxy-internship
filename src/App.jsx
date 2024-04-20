import './App.css';
import Login from './components/Login/Login.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Profile from './components/Profile/Profile.jsx'
import Work from './components/Work/Work.jsx'
import EmailVerify from './components/EmailVerify/EmailVerify.jsx';
import Footer from './components/Footer/Footer.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
      path: "/Profile",
      element: <><Navbar display="none" /> <Profile/></>
    },
    {
      path: "/Work",
      element: <><Navbar display="none" /> <Work/></>
    },
    {
      path: "/EmailVerify",
      element: <><Navbar display="flex" color="black" /> <EmailVerify /><Footer /></>
    },
    {
      path: "/Login",
      element: <Login/>,
    },

    
  ])
  return (
   <>
   <RouterProvider router={router} />
   </>
  );
}

export default App;
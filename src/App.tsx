import React from 'react';
import { Cart } from './Components/Cart';
import './styles/App.css';
import  {HomePage}  from './Components/HomePage';
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { ContextProvider } from './context/CartContext';
import { SignIn } from './Components/SignInPage';
import { SignUp } from './Components/SignUpPage';



function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<SignIn/>
    },
    {
      path:'/homepage',
      element:<HomePage/>
    },
    {
      path:'/cart',
      element:<Cart/>
    },
    {
      path:'/signup',
      element:<SignUp/>
    },

  ])
  
  return (
    <div className="App">
      <ContextProvider>
          <RouterProvider router={router} />
      </ContextProvider>
    </div>
    );
}

export default App;

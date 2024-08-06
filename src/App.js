import React, { lazy, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from '../utils/UserContext';

// Lazy loading About component
const About = lazy(() => import('./components/About'));



const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(()=>{
        const userData = {
          name:"Himanshi"
        }
        setUserName(userData.name)
  },[])
  return (
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className='app'>
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <About />
          </React.Suspense>
        ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:resID',
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error errorMessage="Something Went Wrong" />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

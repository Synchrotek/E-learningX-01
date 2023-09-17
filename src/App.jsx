import { React, useState } from 'react';
import { RouterProvider, createBrowserRouter }
  from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Courses from './pages/Courses';
import Signup from './pages/SignupLogin/Signup';
import Login from './pages/SignupLogin/Login';

// Router Path Declaration ---------------
const MainRouter = createBrowserRouter([
  { path: '/', Component: HomePage },
  { path: '/courses', Component: Courses },
  { path: '/login', Component: Login },
  { path: '/signup', Component: Signup },
]);

// Main App() Method ---------------------
const App = () => {

  const newTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(newTime);
  const [cnt, setCnt] = useState(0);

  const IncNum = () => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    // alert(`cnt : ${cnt}`);
  };

  return (
    <>
      <RouterProvider router={MainRouter} />
    </>
  );
};

export default App

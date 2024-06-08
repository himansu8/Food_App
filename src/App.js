
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header'
// import Footer from './Components/Footer'
import Body from './Components/Body'
import Error from './Components/Error';
//import About from './Components/About';
import Contact from './Components/Contact';
import ResturantMenu from './Components/ResturantMenu';
import React, { lazy, Suspense, useContext, useEffect, useState } from 'react';
import userContext from './utils/userContext';




function App() {
  const About = lazy(() => import('./Components/About')) //dynamic import 
  const [userName, setUserName] = useState()
  const {loginUser} = useContext(userContext)

  useEffect(() => {
    setUserName("jinu")
  }, [])
  return (
    <div className='app'>
      <userContext.Provider value={{loginUser: userName}}>
      <Routes>
        <Route path="/" element={<> <Header /> <Body /> </>} errorElement={<Error />} />  
        <Route path="/about" element={<> <Header /> <Suspense fallback={<div>Loading...</div>}><About /></Suspense>  </>} />
        <Route path="/contact" element={<> <Header /> <Contact /> </>} />
        <Route path='/resturants/:resId' element={<><Header /> <ResturantMenu /> </>} />
      </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;

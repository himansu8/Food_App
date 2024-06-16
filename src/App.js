
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
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Cart from './Components/Cart';


function App() {
  const About = lazy(() => import('./Components/About')) //dynamic import 
  const [userName, setUserName] = useState()
  const { loginUser } = useContext(userContext)

  useEffect(() => {
    setUserName("jinu")
  }, [])
  return (
    <div className='app'>
      <Provider store={store} >
        <userContext.Provider value={{ loginUser: userName }}>
          <Routes>
            <Route path="/" element={<> <Header /> <Body /> </>} errorElement={<Error />} />
            <Route path="/about" element={<> <Header /> <Suspense fallback={<div>Loading...</div>}><About /></Suspense>  </>} />
            <Route path="/contact" element={<> <Header /> <Contact /> </>} />
            <Route path="/cart" element={<> <Header /> <Cart/> </>} />
            <Route path='/resturants/:resId' element={<><Header /> <ResturantMenu /> </>} />
          </Routes>
        </userContext.Provider>
      </Provider>
    </div>
  );
}

export default App;

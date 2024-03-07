
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header'
// import Footer from './Components/Footer'
import Body from './Components/Body'
import Error from './Components/Error';
import About from './Components/About';
import Contact from './Components/Contact';
import ResturantMenu from './Components/ResturantMenu';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<> <Header /> <Body /> </>} errorElement={<Error />} />
        <Route path="/about" element={<> <Header /> <About /> </>} />
        <Route path="/contact" element={<> <Header /> <Contact /> </>} />
        <Route path='/resturants/:resId' element={<><Header /> <ResturantMenu /> </>} />
      </Routes>
    </div>
  );
}

export default App;

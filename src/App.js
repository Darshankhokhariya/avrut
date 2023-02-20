import './App.css';
import Home from './components/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Etc from './components/Etc';
import 'animate.css';
import Service1 from './components/Service1';
import Portfolio from './components/Portfolio';
import Career from './components/Career';
import Get from './components/Get';


function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/service' element={<Service1/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/careear' element={<Career/>} />
        <Route path='/getintouch' element={<Get/>} />
      </Routes>
    <Footer/>
      {/* <Etc/> */}

    </>
  );
}

export default App;

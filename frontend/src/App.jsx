
import './App.css'
import {ToastContainer} from 'react-toastify'
import  { Route, Routes} from "react-router-dom";
import Navbar from './components/UI/Navbar.jsx';
import Footer from './components/UI/Footer.jsx';
import Home from './pages/Home.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import { useContext } from 'react';
import { AppContext } from './context/AppContext.jsx';
import ViewWorks from './pages/viewWorks.jsx';
import AddWork from './admin/AddWork.jsx';

const App = ()=> {
  const {mode}=useContext(AppContext)

  return (
    <div
      className={`${
        mode === "light" ? "light-mode" : "dark-mode"
      } transition-colors duration-700 ease-in-out`}
    >
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<ViewWorks />} />            
        <Route path="/add-work/05101532" element={<AddWork />} />            
                   
      </Routes>
      <Footer />
    </div>
  );
}

export default App

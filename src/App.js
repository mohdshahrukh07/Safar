
import React from 'react';
import { HashRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/homepage/Home';
import ScrollTop from './components/ScrollTop';
import Blogs from './components/Blogs/Blogs';
import TourPage from './components/Tour/TourPage';
import About from './components/About us/About';
import Contact from './components/Contact Us/Contact';
import LoginPage from './components/Login/LoginPage';
import BookPage from './components/Tour/BookPage';
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollTop/>
      <Navbar />
      <Routes>
      <Route index element={<Home to='/home' replace/>} />
      <Route path='/home' element={<Home />}/>
          <Route path='/tour' element={<TourPage />}/>
          <Route path='/bookpage/:id' element={<BookPage/>} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

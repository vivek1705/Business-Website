  // src/App.js
  import React from 'react';
  import Navbar from './components/Navbar';
  import HomePage from './components/HomePage';
  import AboutUs from './components/AboutUs';
  import Services from './components/Services';
  import Gallery from './components/Gallery';
  import Testimonials from './components/Testimonial';
  import Contact from './components/Contact';
  import Footer from './components/Footer';
  import styled from "styled-components";

  const Wrapper = styled.div`
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 95%, 0 100%);
    `
    const Wrapper2 = styled.div`
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 99% 93%, 40px 100%, 0 100%);
    `
  const App = () => {
    return (
      <div id='app'>
        <Navbar />
        <Wrapper>
        <HomePage />
        </Wrapper>
        <AboutUs />
        <Wrapper2>
        <Services />
        </Wrapper2>
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  };

  export default App;

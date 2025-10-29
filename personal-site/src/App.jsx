import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;

import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-primary text-text px-6">
      <h2 className="text-3xl md:text-7xl font-extrabold mb-8 leading-tight"> Freelance Fullstack Developer South Africa</h2>
      <p className="text-xl md:text-2xl max-w-2xl text-secondary-light mb-12 leading-relaxed">Specializing in web & mobile apps, AI integration, MS Power Platform automation, software redesign, and digital marketing for businesses and startups. Let's transform your ideas into digital solutions.</p>
      <a href="#projects" className="bg-accent hover:bg-accent/80 text-primary font-bold px-10 py-4 rounded-lg transition text-lg">Explore My Work</a>
    </section>
  );
};

export default Hero;

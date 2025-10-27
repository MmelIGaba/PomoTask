import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-green-900 to-slate-900 text-white px-6">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Crafting Bold & Beautiful Web Experiences</h2>
      <p className="text-lg md:text-xl max-w-xl text-slate-200 mb-8">I build modern, scalable, and user‑focused web & mobile apps. Let's turn your ideas into impactful digital products.</p>
      <a href="#projects" className="bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-3 rounded-lg transition">Explore My Work</a>
    </section>
  );
};

export default Hero;

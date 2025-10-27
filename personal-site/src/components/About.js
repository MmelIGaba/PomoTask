import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">About Me</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
          I'm Mmeli Gabriel Dyantyi, a passionate software developer specializing in web and mobile applications.
          With a keen eye for design and a love for clean code, I create digital experiences that are both functional and beautiful.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Web Development</h3>
            <p className="text-slate-600">Building responsive and interactive websites using modern technologies like React, Node.js, and more.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Mobile Apps</h3>
            <p className="text-slate-600">Creating cross-platform mobile applications with React Native and Flutter.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-700 mb-4">UI/UX Design</h3>
            <p className="text-slate-600">Designing intuitive user interfaces and experiences that delight users.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

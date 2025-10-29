import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-32 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-text mb-12">About Me</h2>
        <p className="text-xl text-text max-w-3xl mx-auto mb-16 leading-relaxed">
          I am Mmeli Gabriel Dyantyi, a freelance fullstack developer based in Johannesburg, South Africa, specializing in custom web and mobile app development. With expertise in .NET, Java Spring Boot, Flutter, Firebase, and modern web frameworks, I deliver AI-integrated solutions, MS Power Platform automation, software redesign services, and digital marketing strategies. I focus on creating scalable, user-focused digital products that drive business transformation and tech innovation for startups and enterprises across Africa.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-secondary p-8 rounded-lg border border-accent">
            <h3 className="text-2xl font-bold text-accent mb-6">Fullstack Engineer</h3>
            <p className="text-text leading-relaxed">Building end-to-end solutions with modern web technologies, APIs, and databases for seamless user experiences.</p>
          </div>
          <div className="bg-secondary p-8 rounded-lg border border-accent">
            <h3 className="text-2xl font-bold text-accent mb-6">AI Integration</h3>
            <p className="text-text leading-relaxed">Incorporating machine learning and AI capabilities to create smarter, more adaptive applications.</p>
          </div>
          <div className="bg-secondary p-8 rounded-lg border border-accent">
            <h3 className="text-2xl font-bold text-accent mb-6">Cloud Solutions</h3>
            <p className="text-text leading-relaxed">Deploying scalable applications on cloud platforms with focus on performance, security, and cost-efficiency.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

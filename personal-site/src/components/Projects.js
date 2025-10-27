import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Student Progress Tracker',
      description: 'Visual academic dashboard built with Firebase, Tailwind, and JavaScript.',
      link: '#'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack online store with React, Node.js, and MongoDB.',
      link: '#'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application using OpenWeatherMap API.',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-700 mb-4">{project.title}</h3>
              <p className="text-slate-600 mb-4">{project.description}</p>
              <a href={project.link} className="inline-block text-green-600 font-medium hover:underline">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

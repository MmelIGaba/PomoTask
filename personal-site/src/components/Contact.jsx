import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-text mb-8">Get In Touch</h2>
        <p className="text-xl text-secondary mb-16 max-w-2xl mx-auto leading-relaxed">Have a project in mind? Let's collaborate — I'm always open to exciting opportunities.</p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid gap-8">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-6 py-4 bg-secondary border border-accent rounded-lg focus:ring-2 focus:ring-accent focus:outline-none text-text placeholder-text/60 text-lg"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full px-6 py-4 bg-secondary border border-accent rounded-lg focus:ring-2 focus:ring-accent focus:outline-none text-text placeholder-text/60 text-lg"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="6"
            required
            className="w-full px-6 py-4 bg-secondary border border-accent rounded-lg focus:ring-2 focus:ring-accent focus:outline-none text-text placeholder-text/60 text-lg resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-accent hover:bg-accent/80 transition text-primary font-bold px-8 py-4 rounded-lg text-lg"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center space-x-8 mt-16 text-3xl">
          <a href="https://github.com/MmelIGaba" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent transition-colors">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/mmela-dyantyi-849aa52a3/" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent transition-colors">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:msgwebworks@gmail.com" className="text-text hover:text-accent transition-colors">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

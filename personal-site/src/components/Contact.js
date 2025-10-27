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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Get In Touch</h2>
        <p className="text-slate-600 mb-8">Have a project in mind? Let's collaborate — I'm always open to exciting opportunities.</p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto grid gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="5"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-500 transition text-white font-semibold px-6 py-3 rounded-md"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center space-x-6 mt-8 text-2xl">
          <a href="https://github.com/MmelIGaba" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-green-600">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/mmela-dyantyi-849aa52a3/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-green-600">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:msgwebworks@gmail.com" className="text-slate-600 hover:text-green-600">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

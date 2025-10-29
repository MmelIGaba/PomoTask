import React, { useState } from 'react';
import styles from './Contact.module.css';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const status = document.getElementById("my-form-status");
    const data = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form";
        }
      }
    } catch (error) {
      status.innerHTML = "Oops! There was a problem submitting your form";
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.subtitle}>Ready to transform your business with custom web & mobile apps, AI integration, or MS Power Platform automation? Let's discuss your project in Johannesburg, South Africa.</p>

        <form id="my-form" action="https://formspree.io/f/mldbvnod" method="POST" onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className={styles.input}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="6"
            required
            className={styles.textarea}
          ></textarea>
          <button
            type="submit"
            className={styles.button}
          >
            Send Message
          </button>
          <p id="my-form-status" className={styles.status}></p>
        </form>

        <div className={styles.socialLinks}>
          <a href="https://github.com/MmelIGaba" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/mmela-dyantyi-849aa52a3/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:msgwebworks@gmail.com" className={styles.socialLink}>
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

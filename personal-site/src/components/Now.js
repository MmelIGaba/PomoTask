import React from 'react';
import { motion } from 'framer-motion';

const Now = () => {
  return (
    <section id="now" className="py-32 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-text mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What I'm Up To Now
        </motion.h2>
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-secondary p-8 rounded-lg border border-accent">
            <h3 className="text-2xl font-bold text-accent mb-4">Developing LitLink</h3>
            <p className="text-text leading-relaxed">
              Building a privacy-conscious event networking app that helps professionals connect meaningfully
              at conferences and meetups without compromising personal data.
            </p>
          </div>
          <div className="bg-secondary p-8 rounded-lg border border-accent">
            <h3 className="text-2xl font-bold text-accent mb-4">Deepening AI/ML Fluency</h3>
            <p className="text-text leading-relaxed">
              Completing ranked machine learning and deep learning projects to strengthen my technical foundation
              and explore cutting-edge AI applications.
            </p>
          </div>
          <div className="bg-secondary p-8 rounded-lg border border-accent">
            <h3 className="text-2xl font-bold text-accent mb-4">Refining Professional Presence</h3>
            <p className="text-text leading-relaxed">
              Focusing on minimalist, performance-driven design principles to create digital experiences
              that are both beautiful and functional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Now;

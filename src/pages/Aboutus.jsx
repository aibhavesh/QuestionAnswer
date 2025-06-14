import React from 'react';

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #e8f5e9, #c8e6c9)',
    padding: '3rem 1rem',
    fontFamily: "'Open Sans', 'Montserrat', sans-serif",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: 'fadeIn 1.2s ease-in-out',
  },
  card: {
    background: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 8px 24px rgba(0, 128, 0, 0.15)',
    maxWidth: '750px',
    width: '100%',
    padding: '3rem',
    textAlign: 'center',
    lineHeight: '1.6',
  },
  heading: {
    color: '#2e7d32',
    fontWeight: '700',
    fontSize: '2.6rem',
    marginBottom: '1.2rem',
  },
  subheading: {
    fontSize: '1.4rem',
    color: '#388e3c',
    marginBottom: '2rem',
    fontWeight: '500',
  },
  paragraph: {
    fontSize: '1.1rem',
    color: '#444',
    marginBottom: '1.2rem',
  },
  highlight: {
    color: '#1b5e20',
    fontWeight: '600',
  },
  slogan: {
    fontStyle: 'italic',
    color: '#2e7d32',
    fontSize: '1.2rem',
    marginTop: '2rem',
    fontWeight: '600',
  },
};

// Optional: Add this in your main CSS or inside a `<style>` tag if not using styled-components
const styleSheet = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
`;

const AboutUs = () => {
  return (
    <>
      <style>{styleSheet}</style>
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.heading}>About QuesAns</h1>
          <p style={styles.subheading}>
            QuesAns is your trusted platform for asking and answering questions—
            built for curious minds and passionate learners.
          </p>
          <p style={styles.paragraph}>
            Our mission is to connect people through knowledge sharing, foster insightful discussions,
            and empower everyone to find the answers they seek. We believe in the power of community
            and the importance of accessible information.
          </p>
          <p style={styles.paragraph}>
            <span style={styles.highlight}>Inspired by environmental values</span>, we strive to create a
            platform that not only supports learning but also raises awareness about our planet.
            We regularly feature eco-friendly tips, green trivia, and sustainability challenges
            to engage and inspire our users.
          </p>
          <div style={styles.slogan}>
            “Nurture Curiosity. Share Knowledge. Grow Together for a Greener Tomorrow.”
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

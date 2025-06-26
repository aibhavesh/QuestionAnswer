import React from 'react';

const footerStyle = {
  backgroundColor: '#388e3c',
  color: 'white',
  textAlign: 'center',
  padding: '1rem 0',

  left: 0,
  bottom: 0,
  width: '100%',
  letterSpacing: '1px',
  fontSize: '1rem',
};

const Footer = () => (
  <footer style={footerStyle}>
    &copy; {new Date().getFullYear()} QuesAns — Empowering Curiosity & Environmental Awareness
  </footer>
);

export default Footer;

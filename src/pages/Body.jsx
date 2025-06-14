import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addData } from '../Redux/SortedQueSlice';
// Fade-in animation CSS
const fadeInKeyframes = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px);}
  to { opacity: 1; transform: translateY(0);}
}
@keyframes float {
  0%, 100% { transform: translateY(0px);}
  50% { transform: translateY(-20px);}
}
`;

const styles = {
  background: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #e0f7fa 0%, #a5d6a7 100%)',
    fontFamily: 'Montserrat, Arial, sans-serif',
    overflow: 'hidden',
    position: 'relative',
    animation: 'fadeIn 1.2s ease-in-out',
  },
  circle: {
    position: 'absolute',
    borderRadius: '50%',
    opacity: 0.25,
    zIndex: 0,
    animation: 'float 8s ease-in-out infinite',
  },
  content: {
    padding: '4rem 2rem 6rem 2rem',
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
  },
  heading: {
    color: '#2e7d32',
    fontWeight: 600,
    marginBottom: '1rem',
  },
  paragraph: {
    color: '#388e3c',
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  button: {
    borderRadius: '25px',
    padding: '0.6rem 2rem',
  },
};

const Body = () => {

  let dispatch = useDispatch();
  let go =() => {
    const arr = [];
    while (arr.length < 10) {
      const num = Math.floor(Math.random() * 500);
      if (!arr.includes(num)) arr.push(num);
    }
   dispatch(addData(arr));

  }
  return(
  <>
    <style>{fadeInKeyframes}</style>
    <div style={styles.background}>
      {/* Animated circles */}
      <div style={{ ...styles.circle, top: '10%', left: '5%', width: '120px', height: '120px', background: '#66bb6a' }} />
      <div style={{ ...styles.circle, bottom: '20%', right: '10%', width: '200px', height: '200px', background: '#4db6ac' }} />
      <div style={{ ...styles.circle, top: '60%', left: '40%', width: '80px', height: '80px', background: '#81c784' }} />

      {/* Main Content */}
      <div style={styles.content}>
        <h2 style={styles.heading} className="mb-3">
          Welcome to QuesAns
        </h2>
        <p style={styles.paragraph} className="mb-4">
          Your platform for practicing questions with an environmental touch!
        </p>
        <NavLink
        onClick={go}
          to="/questions"
          className="btn btn-danger btn-lg shadow"
          style={styles.button}
        >
          Let's Practice
        </NavLink>
      </div>
    </div>
  </>
)};

export default Body;

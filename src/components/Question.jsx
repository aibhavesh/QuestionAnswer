import React, { useEffect, useState } from 'react';
import '../assets/Question.css';
import { useSelector } from 'react-redux';

const Question = () => {
  const queArr = useSelector((state) => state.QueReducer);
  const sortedQueArr = useSelector((state) => state.SortedQueReducer);

  const [current, setCurrent] = useState(0);
  const [que, setQue] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    if (sortedQueArr && queArr && sortedQueArr.length > 0 && queArr.length > 0) {
      const index = sortedQueArr[current];
      setQue(queArr[index]);
      setSelectedOption(''); // reset selection on question change
    }
  }, [current, sortedQueArr, queArr]);

  if (!que) {
    return <div>Loading...</div>;
  }

  const totalQuestions = sortedQueArr.length;
  const progress = Math.round(((current + 1) / totalQuestions) * 100);

  const handleNext = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => Math.min(prev + 1, totalQuestions - 1));
      setAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => Math.max(prev - 1, 0));
      setAnimating(false);
    }, 500);
  };

  return (
    <div className="question-container">
      {/* Background circles */}
      <div className="background-circle" style={{ top: '5%', left: '10%', width: '150px', height: '150px', background: '#81c784' }} />
      <div className="background-circle" style={{ bottom: '15%', right: '8%', width: '200px', height: '200px', background: '#aed581' }} />
      <div className="background-circle" style={{ top: '50%', left: '40%', width: '100px', height: '100px', background: '#4db6ac' }} />

      <div className="container py-5" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="d-flex justify-content-between mb-1 text-success fw-semibold">
                <span>Question {current + 1}</span>
                <span>{progress}%</span>
              </div>
              <div className="progress progress-bar-custom">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className={`question-card shadow-lg rounded-4 border-0 ${animating ? 'fade-out' : 'fade-in'}`}>
              <div className="card-body p-5">
                <h5 className="card-title mb-4 text-dark fw-bold fs-4">
                  {que.question}
                </h5>
                <form>
                  <label className={`option-label ${selectedOption === 'A' ? 'highlighted' : ''}`}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="option"
                      value="A"
                      checked={selectedOption === 'A'}
                      onChange={() => setSelectedOption('A')}
                    />
                    <span className="option-text">A. {que.A}</span>
                  </label>
                  <label className={`option-label ${selectedOption === 'B' ? 'highlighted' : ''}`}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="option"
                      value="B"
                      checked={selectedOption === 'B'}
                      onChange={() => setSelectedOption('B')}
                    />
                    <span className="option-text">B. {que.B}</span>
                  </label>
                  <label className={`option-label ${selectedOption === 'C' ? 'highlighted' : ''}`}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="option"
                      value="C"
                      checked={selectedOption === 'C'}
                      onChange={() => setSelectedOption('C')}
                    />
                    <span className="option-text">C. {que.C}</span>
                  </label>
                  <label className={`option-label ${selectedOption === 'D' ? 'highlighted' : ''}`}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="option"
                      value="D"
                      checked={selectedOption === 'D'}
                      onChange={() => setSelectedOption('D')}
                    />
                    <span className="option-text">D. {que.D}</span>
                  </label>
                  <div className="d-flex justify-content-between mt-4">
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-quiz"
                      onClick={handlePrev}
                      disabled={current === 0 || animating}
                    >
                      ⬅️ Previous
                    </button>
                    <div>
                      <button
                        type="button"
                        className="btn btn-success me-2 btn-quiz"
                        disabled={animating}
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-quiz"
                        onClick={handleNext}
                        disabled={current === totalQuestions - 1 || animating}
                      >
                        Next ➡️
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;

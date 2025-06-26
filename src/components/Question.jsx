import React, { useEffect, useState } from 'react';
import '../assets/Question.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Question = () => {
  const queArr = useSelector((state) => state.QueReducer);
  const sortedQueArr = useSelector((state) => state.SortedQueReducer);
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [que, setQue] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [answers, setAnswers] = useState([]);
  // showResult is not needed if you route to /result

  useEffect(() => {
    if (sortedQueArr?.length > 0) {
      setAnswers(Array(sortedQueArr.length).fill(null));
    }
  }, [sortedQueArr]);

  useEffect(() => {
    if (sortedQueArr && queArr && current < sortedQueArr.length) {
      const index = sortedQueArr[current];
      setQue(queArr?.[index]);
      setSelectedOption(answers[current] || '');
    }
  }, [current, sortedQueArr, queArr, answers]);

  const handleSave = () => {
    const newAnswers = [...answers];
    console.log(newAnswers);
    newAnswers[current] = selectedOption;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => Math.min(prev + 1, sortedQueArr.length - 1));
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

  const handleSubmit = () => {
    navigate('/result', {
      state: {
        answers,
        sortedQueArr,
        queArr,
      }
    });
  };

  if (!que) return <div className="loading">Loading Questions...</div>;

  const totalQuestions = sortedQueArr.length;
  const progress = Math.round(((current + 1) / totalQuestions) * 100);
  const isLastQuestion = current === totalQuestions - 1;

  return (
    <div className="question-container">
      <div className="background-circle" style={{ top: '5%', left: '10%' }} />
      <div className="background-circle" style={{ bottom: '15%', right: '8%' }} />
      <div className="background-circle" style={{ top: '50%', left: '40%' }} />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="mb-4">
              <div className="d-flex justify-content-between mb-1 text-success fw-semibold">
                <span>Question {current + 1}</span>
                <span>{progress}%</span>
              </div>
              <div className="progress progress-bar-custom">
                <div className="progress-bar bg-success" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <div className={`question-card ${animating ? 'fade-out' : 'fade-in'}`}>
              <div className="card-body p-5">
                <h5 className="card-title mb-4">{que?.question || "Question not found"}</h5>
                <form>
                  {['A', 'B', 'C', 'D'].map((option) => (
                    <label key={option} className={`option-label ${selectedOption === option ? 'highlighted' : ''}`}>
                      <input
                        type="radio"
                        name="option"
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => setSelectedOption(option)}
                      />
                      <span className="option-text">{option}. {que?.[option]}</span>
                    </label>
                  ))}
                  
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
                        onClick={handleSave}
                        disabled={answers[current] === selectedOption || !selectedOption}
                      >
                        {answers[current] ? 'Updated ✓' : 'Save Answer'}
                      </button>
                      <button
                        type="button"
                        className={`btn ${isLastQuestion ? 'btn-warning' : 'btn-primary'} btn-quiz`}
                        onClick={isLastQuestion ? handleSubmit : handleNext}
                        disabled={animating}
                      >
                        {isLastQuestion ? 'Submit Final Answers 🚀' : 'Next ➡️'}
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

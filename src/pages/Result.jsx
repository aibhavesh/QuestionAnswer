import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/Question.css';

const Result = () => {
  const [score, setScore] = useState(0);
  const { state } = useLocation();
  const { answers, sortedQueArr, queArr } = state || {};

  useEffect(() => {
    if (
      !Array.isArray(answers) ||
      !Array.isArray(sortedQueArr) ||
      !Array.isArray(queArr) ||
      sortedQueArr.length === 0 ||
      answers.length === 0
    ) {
      setScore(0);
      return;
    }
    let correct = 0;
    answers.forEach((ans, idx) => {
      const qIndex = sortedQueArr[idx];
      const q = queArr[qIndex];
      if (q && ans === q.correctAnswer) correct += 1;
    });
    setScore(correct);
  }, [answers, queArr, sortedQueArr]);

  if (
    !Array.isArray(answers) ||
    !Array.isArray(sortedQueArr) ||
    !Array.isArray(queArr) ||
    sortedQueArr.length === 0 ||
    answers.length === 0
  ) {
    return <div>Loading results...</div>;
  }

  return (
    <div className="result-magic-container">
      <div className="magic-glow one"></div>
      <div className="magic-glow two"></div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="result-heading">✨ Results ✨</div>
        <div className="result-score">
          Score: {score} / {answers.length}
        </div>
        <ul className="result-list">
          {answers.map((ans, idx) => {
            const qIndex = sortedQueArr[idx];
            const q = queArr[qIndex];
            const correct = q && ans === q.correctAnswer;
            return (
              <li
                key={idx}
                className="result-item"
                style={{
                  borderLeft: `6px solid ${correct ? "#2e7d32" : "#d32f2f"}`
                }}
              >
                <div>
                  <strong>Q{idx + 1}:</strong> {q ? q.question : "Question not found"}
                </div>
                <div>
                  Your Answer:{" "}
                  <span className={correct ? "result-correct" : "result-wrong"}>
                    {ans || "No answer"}
                  </span>
                  {!correct && q && (
                    <span>
                      {" "} | Correct: <span className="result-correct">{q.correctAnswer}</span>
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Result;

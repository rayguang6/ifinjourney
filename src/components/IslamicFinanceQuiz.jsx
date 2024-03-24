import React, { useState } from 'react';

// Sample questions
const questions = [
  {
    questionText: 'What is the Islamic term for the prohibition of interest?',
    answerOptions: [
      { answerText: 'Zakat', isCorrect: false },
      { answerText: 'Riba', isCorrect: true },
      { answerText: 'Murabaha', isCorrect: false },
      { answerText: 'Sukuk', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of the following is a key principle of Islamic finance?',
    answerOptions: [
      { answerText: 'Interest-based investments', isCorrect: false },
      { answerText: 'Profit and loss sharing', isCorrect: true },
      { answerText: 'Speculative transactions', isCorrect: false },
      { answerText: 'Fixed income investments', isCorrect: false },
    ],
  },
  {
    questionText: 'What does Shariah-compliant mean in the context of Islamic finance?',
    answerOptions: [
      { answerText: 'Adhering to secular financial regulations', isCorrect: false },
      { answerText: 'Ensuring investments are ethical and socially responsible', isCorrect: true },
      { answerText: 'Guaranteeing fixed returns on investments', isCorrect: false },
      { answerText: 'Focusing solely on charitable giving', isCorrect: false },
    ],
  },
];

const IslamicFinanceQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      {showScore ? (
        <div className='text-xl font-semibold'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='mb-8 text-lg font-semibold'>
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className='mb-4 text-md'>{questions[currentQuestion].questionText}</div>
          <div className='flex flex-col'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
                className='mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700'
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default IslamicFinanceQuiz;

import { useState, useEffect } from 'react';

const Card = ({ question, answer, category, difficulty, cardKey, onCorrectGuess }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [guessStatus, setGuessStatus] = useState(null);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleGuessChange = (e) => {
    setUserGuess(e.target.value);
    setGuessStatus(null);
  };

  const handleSubmitGuess = () => {
    if (!userGuess.trim()) return;

    const normalizeString = (str) => {
      return str.toLowerCase().trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    };

    const normalizedGuess = normalizeString(userGuess);
    const normalizedAnswer = normalizeString(answer);

    const isCorrect = normalizedGuess.includes(normalizedAnswer) || 
                      normalizedAnswer.includes(normalizedGuess);

    setGuessStatus(isCorrect ? 'correct' : 'incorrect');
    
    if (isCorrect) {
      onCorrectGuess();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmitGuess();
    }
  };

  // Reset state when card changes
  useEffect(() => {
    setIsFlipped(false);
    setUserGuess('');
    setGuessStatus(null);
  }, [cardKey]);

  const getCategoryClass = (category) => {
    const categoryClasses = {
      'functions': 'card-functions',
      'variables': 'card-variables', 
      'dom': 'card-dom',
      'async': 'card-async',
      'syntax': 'card-syntax',
      'operators': 'card-operators'
    };
    return categoryClasses[category] || 'card-default';
  };

  const getDifficultyClass = (difficulty) => {
    return `card-${difficulty}`;
  };

  return (
    <div className="card-container">
      <div 
        className={`card ${getCategoryClass(category)} ${getDifficultyClass(difficulty)} ${isFlipped ? 'flipped' : ''} ${guessStatus ? `guess-${guessStatus}` : ''}`}
        onClick={flipCard}
      >
        <div className="card-content">
          <div className="card-tags">
            <span className="category-tag">{category}</span>
            <span className={`difficulty-tag difficulty-${difficulty}`}>{difficulty}</span>
          </div>

          <div className="card-text">
            {isFlipped ? answer : question}
          </div>
          <div className="card-indicator">
            {isFlipped ? 'Answer' : 'Question'} • Click to flip
          </div>
        </div>
      </div>

      {/* Guess Input Section */}
      <div className="guess-section">
        <input
          type="text"
          className={`guess-input ${guessStatus ? `guess-${guessStatus}` : ''}`}
          placeholder="Enter your answer..."
          value={userGuess}
          onChange={handleGuessChange}
          onKeyPress={handleKeyPress}
        />
        <button className="submit-button" onClick={handleSubmitGuess}>
          Submit Guess
        </button>
        {guessStatus && (
          <div className={`guess-feedback ${guessStatus}`}>
            {guessStatus === 'correct' ? '✓ Correct!' : '✗ Try again!'}
          </div>
        )}
      </div>
      
      <button className="flip-button" onClick={flipCard}>
        Flip Card
      </button>
    </div>
  );
};

export default Card;
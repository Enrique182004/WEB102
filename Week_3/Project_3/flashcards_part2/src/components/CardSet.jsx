import { useState } from 'react';
import Card from './Card';

const CardSet = () => {
  const cardData = {
    title: "JavaScript Fundamentals",
    description: "Essential JavaScript concepts for web development",
    cards: [
      {
        id: 1,
        question: "What is a closure in JavaScript?",
        answer: "A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned.",
        category: "functions",
        difficulty: "hard"
      },
      {
        id: 2,
        question: "What is the difference between let, const, and var?",
        answer: "var is function-scoped and can be redeclared, let is block-scoped and can be reassigned, const is block-scoped and cannot be reassigned.",
        category: "variables",
        difficulty: "medium"
      },
      {
        id: 3,
        question: "What is event bubbling?",
        answer: "Event bubbling is when an event starts from the target element and bubbles up through its parent elements in the DOM tree.",
        category: "dom",
        difficulty: "medium"
      },
      {
        id: 4,
        question: "What is the purpose of async/await?",
        answer: "Async/await provides a cleaner way to work with promises, making asynchronous code look and behave more like synchronous code.",
        category: "async",
        difficulty: "hard"
      },
      {
        id: 5,
        question: "What is destructuring in JavaScript?",
        answer: "Destructuring is a syntax that allows you to extract values from arrays or properties from objects into distinct variables.",
        category: "syntax",
        difficulty: "easy"
      },
      {
        id: 6,
        question: "What is the difference between == and ===?",
        answer: "== performs type coercion and compares values, while === compares both value and type without coercion (strict equality).",
        category: "operators",
        difficulty: "easy"
      },
      {
        id: 7,
        question: "What is a callback function?",
        answer: "A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.",
        category: "functions",
        difficulty: "medium"
      },
      {
        id: 8,
        question: "What is the DOM?",
        answer: "The Document Object Model (DOM) is a programming interface for HTML documents that represents the structure of a document as a tree of objects.",
        category: "dom",
        difficulty: "easy"
      }
    ]
  };

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cardOrder, setCardOrder] = useState(cardData.cards.map((_, i) => i));
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [masteredCards, setMasteredCards] = useState([]);

  const activeCards = cardOrder
    .map(i => cardData.cards[i])
    .filter(card => !masteredCards.includes(card.id));

  const currentCard = activeCards[currentCardIndex];

  const goToNextCard = () => {
    if (currentCardIndex < activeCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const goToPreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const shuffleCards = () => {
    const shuffled = [...cardOrder];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setCardOrder(shuffled);
    setCurrentCardIndex(0);
  };

  const handleCorrectGuess = () => {
    const newStreak = currentStreak + 1;
    setCurrentStreak(newStreak);
    if (newStreak > longestStreak) {
      setLongestStreak(newStreak);
    }
  };

  const markAsMastered = () => {
    if (currentCard) {
      setMasteredCards([...masteredCards, currentCard.id]);
      if (currentCardIndex >= activeCards.length - 1 && currentCardIndex > 0) {
        setCurrentCardIndex(currentCardIndex - 1);
      }
    }
  };

  if (activeCards.length === 0) {
    return (
      <div className="card-set">
        <div className="card-set-header">
          <h1>🎉 Congratulations!</h1>
          <p>You've mastered all the cards!</p>
          <button 
            className="next-button" 
            onClick={() => setMasteredCards([])}
          >
            Reset Mastered Cards
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card-set">
      <div className="card-set-header">
        <h1>{cardData.title}</h1>
        <p>{cardData.description}</p>
        <div className="card-info">
          <span>Active Cards: {activeCards.length}</span>
          <span>Current: {currentCardIndex + 1} of {activeCards.length}</span>
          <span>Mastered: {masteredCards.length}</span>
        </div>
        <div className="streak-info">
          <span className="streak">Current Streak: {currentStreak} 🔥</span>
          <span className="streak">Longest Streak: {longestStreak} 🏆</span>
        </div>
      </div>

      <Card 
        question={currentCard.question}
        answer={currentCard.answer}
        category={currentCard.category}
        difficulty={currentCard.difficulty}
        cardKey={currentCardIndex}
        onCorrectGuess={handleCorrectGuess}
      />

      <div className="navigation-buttons">
        <button 
          className="nav-button prev-button" 
          onClick={goToPreviousCard}
          disabled={currentCardIndex === 0}
        >
          ← Previous
        </button>
        
        <button 
          className="shuffle-button" 
          onClick={shuffleCards}
        >
          🔀 Shuffle
        </button>

        <button 
          className="master-button" 
          onClick={markAsMastered}
        >
          ✓ Master Card
        </button>
        
        <button 
          className="nav-button next-button" 
          onClick={goToNextCard}
          disabled={currentCardIndex === activeCards.length - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default CardSet;
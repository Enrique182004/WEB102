import { useState } from 'react'
import Card from './Card'

const CardSet = () => {
  // Flashcard data with categories and difficulty
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
  }

  // State variables
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [seenCount, setSeenCount] = useState(1)

  // Get random new card
  const getRandomCard = () => {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * cardData.cards.length)
    } while (newIndex === currentCardIndex)
    
    setCurrentCardIndex(newIndex)
    setSeenCount(prev => prev + 1)
  }

  const currentCard = cardData.cards[currentCardIndex]

  return (
    <div className="card-set">
      {/* Header Section */}
      <div className="card-set-header">
        <h1>{cardData.title}</h1>
        <p>{cardData.description}</p>
        <div className="card-info">
          <span>Total Cards: {cardData.cards.length}</span>
          <span>Current: {currentCardIndex + 1} of {cardData.cards.length}</span>
        </div>
      </div>

      {/* Card Component with category and difficulty */}
      <Card 
        question={currentCard.question}
        answer={currentCard.answer}
        category={currentCard.category}
        difficulty={currentCard.difficulty}
        cardKey={currentCardIndex}
      />

      {/* Next Card Button */}
      <button className="next-button" onClick={getRandomCard}>
        Next Card
      </button>

      {/* Progress Indicator */}
      <div className="progress">
        <div className="progress-text">
          Cards seen: {seenCount}
        </div>
      </div>
    </div>
  )
}

export default CardSet
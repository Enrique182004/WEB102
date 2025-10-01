import { useState, useEffect } from 'react'

const Card = ({ question, answer, category, difficulty, cardKey }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const flipCard = () => {
    setIsFlipped(!isFlipped)
  }

  // Reset flip state when card changes
  useEffect(() => {
    setIsFlipped(false)
  }, [cardKey])

  // Get category colors
  const getCategoryClass = (category) => {
    const categoryClasses = {
      'functions': 'card-functions',
      'variables': 'card-variables', 
      'dom': 'card-dom',
      'async': 'card-async',
      'syntax': 'card-syntax',
      'operators': 'card-operators'
    }
    return categoryClasses[category] || 'card-default'
  }

  // Get difficulty class
  const getDifficultyClass = (difficulty) => {
    return `card-${difficulty}`
  }

  return (
    <div className="card-container">
      <div 
        className={`card ${getCategoryClass(category)} ${getDifficultyClass(difficulty)} ${isFlipped ? 'flipped' : ''}`}
        onClick={flipCard}
      >
        <div className="card-content">
          {/* Category and Difficulty Tags */}
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
      
      <button className="flip-button" onClick={flipCard}>
        Flip Card
      </button>
    </div>
  )
}

export default Card
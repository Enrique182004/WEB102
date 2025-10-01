import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setCount(count - 10);
      setMultiplier(multiplier * 2);
    }
  };

  const buyPartyPack = () => {
    if (count >= 100) {
      setCount(count - 100);
      setMultiplier(multiplier * 5);
    }
  };

  const buyFullFeast = () => {
    if (count >= 1000) {
      setCount(count - 1000);
      setMultiplier(multiplier * 10);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img 
          src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop&crop=center" 
          className="samosa" 
          onClick={updateCount}
          alt="Samosa"
        />
      </div>
      
      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button 
            onClick={buyDoubleStuffed}
            disabled={count < 10}
            style={{ opacity: count < 10 ? 0.5 : 1 }}
          >
            10 samosas
          </button>
        </div>

        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button 
            onClick={buyPartyPack}
            disabled={count < 100}
            style={{ opacity: count < 100 ? 0.5 : 1 }}
          >
            100 samosas
          </button>
        </div>

        <div className="upgrade">
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10x per click</p>
          <button 
            onClick={buyFullFeast}
            disabled={count < 1000}
            style={{ opacity: count < 1000 ? 0.5 : 1 }}
          >
            1000 samosas
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
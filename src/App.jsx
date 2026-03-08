import { useState } from 'react';
import './App.css'

function App() {
  const [cards, setCardCount] = useState(10);
  const [flipped, setFlipCards] = useState(0);

  const updateCardCount = () => setCardCount(cards - flipped);
  
  return(
    <div>
      <h2>The Ultimate Korean Learner</h2>
      <h4>Lets test to see how much korean you know!</h4>
      <h5>Number of Cards: {cards}</h5>
      <div className='Cards'>

      </div>
      <button onClick={updateCardCount}>Next</button>
    </div>
  )
}

export default App

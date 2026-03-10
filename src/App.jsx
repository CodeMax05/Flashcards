import Card from './components/Card'
import { useState } from 'react';
import './App.css'

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const questions = {
    'one': 'How do you say hello?',
    'two': 'How do you say goodbye?',
    'three': 'What does 주황색 mean?'
  }

  const answers = {
    'one': '안녕하세요',
    'two': '안녕히 가세요',
    'three': 'orange'
  }
  const updateFlipped = () => {
    setIsFlipped(!isFlipped);
  }


  return(
    <div>
      <h2>The Ultimate Korean Learner</h2>
      <h4>Lets test to see how much korean you know!</h4>
      <h5>Number of Cards: 10</h5>

      {isFlipped
        ? <Card response = {answers.one} />
        : <Card reponse = {questions.one} />
      }

      <button onClick={updateFlipped}>

      </button>
      
    </div>
  )
}

export default App

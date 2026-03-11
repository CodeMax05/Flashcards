import Card from './components/Card'
import { useState } from 'react';
import './App.css'

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { question: 'How do you say hello?', answer: '안녕하세요' },
    { question: 'How do you say goodbye?', answer: '안녕히 가세요' },
    { question: 'What does 주황색 mean?', answer: 'orange' },
    { question: 'How do you say thank you?', answer: '감사합니다' },
    { question: 'How do you say yes?', answer: '네' },
    { question: 'How do you say no?', answer: '아니요' },
    { question: 'What does 물 mean?', answer: 'water' },
    { question: 'How do you say I love you?', answer: '사랑해요' },
    { question: 'What does 밥 mean?', answer: 'rice / meal' },
    { question: 'How do you say sorry?', answer: '죄송합니다' },
  ];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextCard = () => {
    setCurrentIndex((currentIndex + 1) % cards.length);
    setIsFlipped(false);
  };

  const currentCard = cards[currentIndex];

  return(
    <div>
      <img className='background' src="https://m.media-amazon.com/images/I/81di25RIlhL.jpg" alt="" />
      <h2>The Ultimate Korean Learner</h2>
      <h4>Let's test to see how much Korean you know!</h4>
      <h5>Card {currentIndex + 1} of {cards.length}</h5>

      <Card
        question={currentCard.question}
        answer={currentCard.answer}
        isFlipped={isFlipped}
        onClick={handleFlip}
      />

      <button onClick={handleNextCard}>Next Card</button>
    </div>
  )
}
export default App

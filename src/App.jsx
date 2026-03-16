import gif from './assets/Project2.gif'
import Card from './components/Card'
import { useState } from 'react';
import './App.css'

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState([
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
  ]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNextCard = () => {
    setCurrentIndex((currentIndex + 1) % cards.length);
    setIsFlipped(false);
  };

  const handlePrevCard = () => {
    if ((currentIndex - 1) < 0){
      setCurrentIndex(cards.length - 1);
    }
    else{
    setCurrentIndex((currentIndex - 1) % cards.length);
    }
    setIsFlipped(false);
  }

  const shuffleCards = () => {
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const newCardIndex = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[newCardIndex]] = [shuffled[newCardIndex], shuffled[i]];
    }
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  }

  const currentCard = cards[currentIndex];

  return(
    <div>
      <img className='background' src="https://m.media-amazon.com/images/I/81di25RIlhL.jpg" alt="" />
      <h2>The Ultimate Korean Learner</h2>
      <h4>Let's test to see how much Korean you know!</h4>
      <div className='stats'>
        <h5>Current Streak: {}</h5>
        <h5>Card {currentIndex + 1} of {cards.length}</h5>
        <h5>Latest Streak: {}</h5>
      </div>

      <Card
        question={currentCard.question}
        answer={currentCard.answer}
        isFlipped={isFlipped}
        onClick={handleFlip}
      />

      <button onClick={handlePrevCard}>Prev</button>
      <button onClick={handleNextCard}>Next</button>
      <button onClick={shuffleCards}>Shuffle Cards</button>

      {/* <img src={gif} title='Video Walkthrough' width='' alt='Video Walkthrough' /> */}
    </div>
  )
}
export default App

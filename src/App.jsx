import gif from './assets/Project2.gif'
import Card from './components/Card'
import { useState } from 'react';
import './App.css'

function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [streak, setStreak] = useState(0);
  const [latestStreak, setLatestStreak] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [guessStatus, setGuessStatus] = useState(null);
  
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

  const resetGuess = () => {
    setUserGuess('');
    setGuessStatus(null);
  };

  const handleGuessChange = (e) => {
    setUserGuess(e.target.value);
    if (guessStatus) setGuessStatus(null);
  };

  const handleSubmit = () => {
    if (!userGuess.trim()) return;
    const isCorrect = userGuess.trim().toLowerCase() === currentCard.answer.trim().toLowerCase();
    if (isCorrect) {
      setGuessStatus('correct');
      setStreak(streak + 1);
    } else {
      setGuessStatus('incorrect');
      setLatestStreak(streak);
      setStreak(0);
    }
  };

  const handleNextCard = () => {
    if (currentIndex < cards.length - 1 ){
    setCurrentIndex((currentIndex + 1) % cards.length);
    }
    else{
      return 'red';
    }
    setIsFlipped(false);
    resetGuess();
  };

  const handlePrevCard = () => {
    if ((currentIndex - 1) >= 0){
    setCurrentIndex((currentIndex - 1) % cards.length);
    }
    setIsFlipped(false);
    resetGuess();
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
    resetGuess();
  }

  const currentCard = cards[currentIndex];

  return(
    <div>
      <img className='background' src="https://m.media-amazon.com/images/I/81di25RIlhL.jpg" alt="" />
      <h2>The Ultimate Korean Learner</h2>
      <h4>Let's test to see how much Korean you know!</h4>
      <div className='stats'>
        <h5>Current Streak: {streak}</h5>
        <h5>Card {currentIndex + 1} of {cards.length}</h5>
        <h5>Latest Streak: {latestStreak}</h5>
      </div>

      <Card
        question={currentCard.question}
        answer={currentCard.answer}
        isFlipped={isFlipped}
        onClick={handleFlip}
      />

      <div className="guess-area">
        <input
          type="text"
          className={`guess-input ${guessStatus || ''}`}
          placeholder="Type your answer..."
          value={userGuess}
          onChange={handleGuessChange}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <button className='previous' onClick={handlePrevCard}>Prev</button>
      <button className='next' style={{borderColor:{handleNextCard}}} onClick={handleNextCard}>Next</button>
      <button className='shuffle' onClick={shuffleCards}>Shuffle Cards</button>

      {/* <img src={gif} title='Video Walkthrough' width='' alt='Video Walkthrough' /> */}
    </div>
  )
}
export default App

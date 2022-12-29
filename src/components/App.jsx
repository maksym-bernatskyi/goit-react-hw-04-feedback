import { useState } from 'react';
import TitleSection from './TitleSection';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notifications from './Notifications';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const optionsKeys = { good, neutral, bad };

  const leaveFeedback = (event) => {
    const name = event.target.name;
    
    switch (name) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        alert("No such values!")
    }
};

  const countTotalFeedback = () => {
    const result = good + neutral + bad;
    return result;
};

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good * 100) / total);
};

  return (
      <div className="feedback__container">
        <TitleSection title="Please leave your feedback">
          <FeedbackOptions options={Object.keys(optionsKeys)} leaveFeedback={leaveFeedback} />
        </TitleSection>

          {countTotalFeedback() !== 0 ? (
            <Statistics 
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage}
              />
          ) : (
            <Notifications message="There's no feedback!" />
          )}
      </div>
    );
  }

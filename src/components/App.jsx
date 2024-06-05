import React, { useState } from 'react';

import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

const App = () => {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = event => {
    const feedbackType = event.target.name;
    setFeedbackCounts(prevCounts => ({
      ...prevCounts,
      [feedbackType]: prevCounts[feedbackType] + 1,
    }));
  };

  const totalFeedback = Object.values(feedbackCounts).reduce(
    (total, count) => total + count,
    0
  );
  const positiveFeedbackPercentage =
    totalFeedback > 0
      ? ((feedbackCounts.good / totalFeedback) * 100).toFixed(0)
      : 0;
  const feedbackOptions = Object.keys(feedbackCounts);

  return (
    <div>
      <Section title="Please leave feedback:">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleFeedback}
        />
        {totalFeedback > 0 ? (
          <Statistics
            feedbackCounts={feedbackCounts}
            total={totalFeedback}
            positivePercentage={`${positiveFeedbackPercentage}%`}
          />
        ) : (
          <Notification message="There is no feedback!" />
        )}
      </Section>
    </div>
  );
};

export default App;

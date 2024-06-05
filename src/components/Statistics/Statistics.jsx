import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({ feedbackCounts, total, positivePercentage }) {
  const { good, neutral, bad } = feedbackCounts;

  return (
    <div className={styles.statisticscontainer}>
      <h3 className={styles.sthead}>Statistics</h3>
      <ul className={styles.stlist}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}</li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  feedbackCounts: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;

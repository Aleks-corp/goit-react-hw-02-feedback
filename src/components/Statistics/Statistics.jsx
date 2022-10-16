export const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {good + neutral + bad}</p>
      <p>
        Positive feedback:
        {Math.round((good / (good + neutral + bad)) * 100)}%
      </p>
    </>
  );
};

import { Button } from './FeedbackOptions.styled';
import { feedbackNames } from 'constants';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <Button
        type="button"
        name={feedbackNames.good}
        onClick={e => {
          onLeaveFeedback(e.target.name);
        }}
      >
        Good
      </Button>
      <Button
        type="button"
        name={feedbackNames.neutral}
        onClick={e => {
          onLeaveFeedback(e.target.name);
        }}
      >
        Neutral
      </Button>
      <Button
        type="button"
        name={feedbackNames.bad}
        onClick={e => {
          onLeaveFeedback(e.target.name);
        }}
      >
        Bad
      </Button>
    </>
  );
};

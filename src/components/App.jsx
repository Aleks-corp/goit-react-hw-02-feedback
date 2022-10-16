import { FeedbackWidget } from './FeedbackWidget/FeedbackWidget';
export const App = () => {
  return (
    <div
      style={{
        display: 'block',
        marginLeft: '30px',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <FeedbackWidget />
    </div>
  );
};

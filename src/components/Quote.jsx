import '../style.css';
import { useContext } from 'react';
import { QuoteContext } from '../contexts/QuoteContext.jsx';

const Quote = () => {
  const QuoteContextValue = useContext(QuoteContext);

  const { data } = QuoteContextValue;

  const quotes = data.map(({ content, author }) => {
    return (
      <div key={Math.random()}>
        <p className="quote">{content}</p>
        <p className="author">{author}</p>
      </div>
    );
  });
  return <>{quotes}</>;
};
export default Quote;

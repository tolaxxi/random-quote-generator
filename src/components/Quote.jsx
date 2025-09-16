import '../style.css';
import { useContext } from 'react';
import { QuoteContext } from '../contexts/QuoteContext.jsx';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Quote = () => {
  const QuoteContextValue = useContext(QuoteContext);

  const { data } = QuoteContextValue;

  if (!data || data.length === 0) {
    return <div className="loader"></div>;
  }

  const quotes = data.map(({ content, author }) => {
    return (
      <div className="quote-container" key={Math.random()}>
        <p className="quote">
          <FaQuoteLeft style={{ marginRight: '15px', fontSize: '1.2rem' }} />
          {content}
          <FaQuoteRight style={{ marginLeft: '15px', fontSize: '1.2rem' }} />
        </p>
        <p className="author">-- {author}</p>
      </div>
    );
  });

  return <>{quotes}</>;
};
export default Quote;

import { FaCopy, FaVolumeUp, FaTwitter } from 'react-icons/fa';
import { QuoteContext } from '../contexts/QuoteContext.jsx';
import { useContext } from 'react';

const Buttons = () => {
  const QuoteContextValue = useContext(QuoteContext);
  const { fetchData } = QuoteContextValue;

  return (
    <section className="buttons">
      <div className="action-btns">
        <button>
          <FaVolumeUp />
        </button>
        <button>
          <FaCopy />
        </button>
        <button>
          <FaTwitter />
        </button>
      </div>

      <div className="new-quote">
        <button onClick={fetchData}>New Quote</button>
      </div>
    </section>
  );
};
export default Buttons;

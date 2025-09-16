import { FaCopy, FaVolumeUp, FaTwitter } from 'react-icons/fa';
import { QuoteContext } from '../contexts/QuoteContext.jsx';
import { useContext } from 'react';

const Buttons = () => {
  const QuoteContextValue = useContext(QuoteContext);
  const { fetchData, data } = QuoteContextValue;

  function handleCopy() {
    navigator.clipboard.writeText(data[0].content);
    alert('copied to clipboard');
  }

  function handleSpeak() {
    const synth = window.speechSynthesis;
    if (synth.speaking) {
      synth.cancel();
    }
    let textToSpeak = data[0].content;
    const utterThis = new SpeechSynthesisUtterance(textToSpeak);
    synth.speak(utterThis);
  }

  return (
    <section className="buttons">
      <div className="action-btns">
        <button onClick={handleSpeak}>
          <FaVolumeUp />
        </button>
        <button onClick={handleCopy}>
          <FaCopy />
        </button>
      </div>

      <div className="new-quote">
        <button onClick={fetchData}>New Quote</button>
      </div>
    </section>
  );
};
export default Buttons;

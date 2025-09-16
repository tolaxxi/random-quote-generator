import { useEffect, useState } from 'react';
import { QuoteContext } from './contexts/QuoteContext.jsx';
import Buttons from './components/Buttons.jsx';
import Quote from './components/Quote.jsx';
import axios from 'axios';
import './style.css';

const App = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get('https://api.realinspire.live/v1/quotes/random?max:100 ');

      setData(response.data);
    } catch (err) {
      console.log(err);
      setData();
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <h1>Quote of the day</h1>
      <QuoteContext.Provider value={{ data, fetchData }}>
        <Quote />
        <div>
          <hr />
          <Buttons />
        </div>
      </QuoteContext.Provider>
    </main>
  );
};
export default App;

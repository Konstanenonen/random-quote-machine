import React from 'react';
import quotes from './quotes';

function App() {
  const quotesArray = quotes;
  const [index, setIndex] = React.useState(Math.floor(Math.random() * 99));

  function setRandomIndex() {
    setIndex(Math.floor(Math.random() * 99));
  }

  return (
    <div id="quote-box">
      <h1 id="text"><em>{`"${quotesArray[index].quote}"`}</em></h1>
      <h2 id="author">{`- ${quotesArray[index].author}`}</h2>
      <div id="button-container">
        <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text="${quotesArray[index].quote}" ${quotesArray[index].author}`}>Tweet</a>
        <button onClick={setRandomIndex} id="new-quote" type="button">New Quote</button>
      </div>
    </div>
  );
}

export default App;

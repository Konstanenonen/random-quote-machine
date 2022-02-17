import React from 'react';

function App() {
  return (
    <div id="quote-box">
      <h1 id="text">Hei Maailma!</h1>
      <h2 id="author">Author</h2>
      <div id="button-container">
        <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a>
        <button id="new-quote" type="button">New Quote</button>
      </div>
    </div>
  );
}

export default App;

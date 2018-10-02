import React, { Component } from 'react';
import Tickers from '../Ticker/Tickers';
import PriceChecker from '../PriceChecker/PriceChecker';
import '../App/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Your Cryptocurrency Haven</h2>
        </div>
        <Tickers />
        <PriceChecker />
      </div>
    );
  }
}

export default App;

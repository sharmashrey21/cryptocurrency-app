import React, { Component } from 'react';
import Tickers from '../Ticker/Tickers';
import '../App/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Cryptocurrency Rules!</h2>
        </div>
        <Tickers />
      </div>
    );
  }
}

export default App;

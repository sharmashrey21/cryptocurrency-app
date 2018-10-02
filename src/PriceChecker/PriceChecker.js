import React, { Component } from 'react';
import axios from 'axios';

import '../PriceChecker/PriceChecker.css';

class PriceChecker extends Component {
  state = {
    value: '',
    data: [
      {
        id: 'bitcoin',
        price_usd: '1',
        last_updated: '0'
      }
    ]
  };

  fetchData() {
    axios
      .get('https://api.bitcoincharts.com/v1/trades.csv?symbol=bitstampUSD')
      .then(response => {
        console.log('Response: ', response);
        var cryptoData = ['bitcoin'];
        var date = this.state.value;
        var result = response.data.filter(currency => cryptoData.includes(date));
        this.setState({ data: result });
      })
      .catch(err => console.log(err));
  }

  convertDate(value) {
    const d = new Date(value);
    var date = d.getTime();
    this.setState({ value: date });
    return date;
  }

  handleChange = async event => {
    this.convertDate(this.state.value);
    this.fetchData();
    console.log('state: ', this.state);
  };

  render() {
    return (
      <div className="BitcoinPrice">
        <p>Check Price of Bitcoin on a particular day!</p>
        <input type="date" id="bitcoin-date" onChange={this.handleChange} /> <br />
        <label htmlFor="bitcoin-date">{this.state.value}</label>
      </div>
    );
  }
}

export default PriceChecker;

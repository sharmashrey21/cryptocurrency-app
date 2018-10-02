import React, { Component } from 'react';
import './Tickers.css';
import Cryptocurrency from '../Cryptocurrency/Cryptocurrency';
import axios from 'axios';

class Tickers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 'bitcoin',
          name: 'Bitcoin',
          symbol: 'BTC',
          price_usd: '1',
          percent_change_1h: '0',
          percent_change_24h: '0',
          percent_change_7d: '0'
        },
        {
          id: 'ethereum',
          name: 'Ethereum',
          symbol: 'ETH',
          price_usd: '1',
          percent_change_1h: '0',
          percent_change_24h: '0',
          percent_change_7d: '0'
        }
      ]
    };
  }

  componentDidMount() {
    this.fetchData();
    this.interval = setInterval(() => this.fetchData(), 60 * 1000);
  }

  fetchData() {
    axios
      .get('https://api.coinmarketcap.com/v1/ticker/')
      .then(response => {
        var cryptoData = ['bitcoin', 'ethereum'];
        var result = response.data.filter(currency => cryptoData.includes(currency.id));
        this.setState({ data: result });
      })
      .catch(err => console.log(err));
  }

  render() {
    var tickers = this.state.data.map(currency => <Cryptocurrency data={currency} key={currency.id} />);
    return (
      <div className="tickers-container">
        <ul className="tickers">{tickers}</ul>
      </div>
    );
  }
}

export default Tickers;

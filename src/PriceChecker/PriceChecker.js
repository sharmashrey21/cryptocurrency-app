import React, { Component } from 'react';
import axios from 'axios';

import '../PriceChecker/PriceChecker.css';

class PriceChecker extends Component {
  state = {
    price_usd: '',
    date: '',
  };

  fetchData() {
    var string = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=' + this.state.date + '&end=' + this.state.date;
    console.log(string);
    axios
      .get(string)
      .then(response => {
        var result = response.data.bpi;
        this.setState({price_usd: result[Object.keys(result)[0]]})
        console.log(this.state.price_usd);
      })
      .catch(err => console.log(err))
      this.setState({price_usd: 'There is no data available for this date!'});
  }

  handleChange = async event => {
    var dateSelected = event.target.value;
    if(dateSelected.length > 0) {
      await this.setState({ date: dateSelected });
      this.fetchData();
    }
    else {
      this.setState({price_usd: ''});
    }
  };

  render() {
    return (
      <div className="BitcoinPrice">
        <p>Check Price of Bitcoin on a particular day!</p>
        <input type="date" id="bitcoin-date" onChange={this.handleChange} /> <br />
        <label htmlFor="bitcoin-date">{this.state.price_usd}</label>
      </div>
    );
  }
}

export default PriceChecker;

import React, { Component } from 'react';
import axios from 'axios';

import '../PriceChecker/PriceChecker.css';

class PriceChecker extends Component {
  state = {
    price_usd: '',
    date: '',
    datePlusOne: ''
  };

  fetchData() {
    axios
      .get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05')
      .then(response => {
        console.log('Response: ', response);
        var result = response.data.bpi;
        console.log('Result: ', result);
        console.log('state: ', this.state);
      })
      .catch(err => console.log(err));
  }

  // convertDate(value) {
  //   console.log('value: ', value);
  //   const d = new Date(value);
  //   var date = d.getTime();
  //   this.setState({ value: date });
  //   console.log('state: ', this.state);
  //   console.log('date: ', date);
  //   return date;
  // }

  handleChange = async event => {
    var dateSelected = event.target.value;
    console.log('dateSelected: ', dateSelected);
    this.setState({ date: dateSelected });
    var numberDate = dateSelected.length - 2;
    var dateTomorrow = Number.parseInt(dateSelected.substring(numberDate, dateSelected.length));
    dateTomorrow++;
    console.log('dateTomorrow: ', dateTomorrow);
    // this.setState({ datePlusOne: tomorrowString });
    await this.fetchData();
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

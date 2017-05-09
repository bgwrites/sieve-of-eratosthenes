import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var math = require('mathjs');
import { Chart } from 'react-google-charts';

class App extends Component {
  constructor() {
    super();
    this._nums = 10000;
    this._primeCheck = [true] * this._nums;
    this._primes = [];
    this._summed = [];
    this._data = [];
    this.state = {
      options: {
        title: 'Sieve of Eratosthenes',
        hAxis: { title: 'Primes', minValue: 1, maxValue: this._nums },
        vAxis: { title: ' Cumlative Sum of Prime Numbers', minValue: 1},
        legend: 'none',
      },
      data: [
        ['Primes', 'Summed'],
      ],
    };    
  }

  getPrimes() {
    var init = [1]
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= this._nums; ++i){
      if (i % 2 === 0){
        false
      }
      else if (!sieve[i]) {
          primes.push(i);
          for (j = i << 1; j <= this._nums; j += i) {
            sieve[j] = true;}
          }
        }
    this._primes = init.concat(primes)
  }

  sumPrimes() {
    var i;
    var total = 0;
    var range1 = math.range(1, this._primes.length + 1);
    for (i in range1["_data"]){
      total += this._primes[i]
      this._summed.push(total)
    }
  }

  getBlob() {
    var i;
    var range2 = math.range(0, this._primes.length);
    var data = [];
    for (i in range2["_data"]){
      this.state.data.push([this._primes[i], this._summed[i]])
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {this.getPrimes()}
          {this.sumPrimes()}
          {this.getBlob()}
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Prime Numbers</h2>
        </div>
      <div className={'my-pretty-chart-container'}>
      <Chart
        chartType="LineChart"
        data={this.state.data}
        options={this.state.options}
        graph_id="LineChart"
        width="100%"
        height="800px"
        legend_toggle
      />
      </div>
      </div>
    );
  }
}

export default App;

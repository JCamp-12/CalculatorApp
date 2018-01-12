import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    displayValue: '0'
  }

  clearDisplay() {
    this.setState({
      displayValue: '0'
    })
  }

  inputDigit(digit){
    const { displayValue } = this.state
  

  this.setState({
    displayValue: displayValue === '0' ? String(digit) : displayValue + digit
  })
  }

  render() {
    const { displayValue } = this.state

    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title"></h1>
        </header>
        <div className="App-intro">
          <div>
            <div className="calc">
              <div>
              <div>
                  
              </div>
                <div>
                {displayValue}
                </div>
                <div>
                  <button className="calc-key 0" onClick={() => this.inputDigit(0)}>0</button>
                  <button className="calc-key .">. </button>
                  <button className="calc-key 1" onClick={() => this.inputDigit(1)}>1 </button>
                  <button className="calc-key +">+</button>
                </div>
                <div>
                  <button className="calc-key 2" onClick={() => this.inputDigit(2)}>2 </button>
                  <button className="calc-key 3" onClick={() => this.inputDigit(3)}>3 </button>
                  <button className="calc-key 4" onClick={() => this.inputDigit(4)}>4 </button>
                  <button className="calc-key -">-</button>
                </div>
                <div>
                  <button className="calc-key 5" onClick={() => this.inputDigit(5)}>5 </button>
                  <button className="calc-key 6" onClick={() => this.inputDigit(6)}>6 </button>
                  <button className="calc-key 7" onClick={() => this.inputDigit(7)}>7 </button>
                  <button className="calc-key *">*</button>
                </div>
                <div>
                  <button className="calc-key 8" onClick={() => this.inputDigit(8)}>8 </button>
                  <button className="calc-key 9" onClick={() => this.inputDigit(9)}>9 </button>
                  <button className="calc-key /">/</button>
                  <button className="calc-key %">%</button>
                </div>
                <div>
                <button className="calc-key pos/neg">+/- </button>
                <button className="calc-key ^">^</button>
                <button className="calc-key ac" onClick={() => this.clearDisplay()}>ac</button>
                  <button className="calc-key =">=</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    userText: '',
    count: 0,
  }

  onChangeTextValue = event => {
    this.setState({
      userText: event.target.value,
      count: event.target.value.length,
    })
  }

  render() {
    const {userText, count} = this.state

    console.log(userText)
    console.log(count)

    return (
      <div className="home">
        <div className="text-container">
          <h1 className="heading">
            Calculate the <br /> Letters you <br /> enter
          </h1>

          <label htmlFor="phrase" className="parag">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter the phrase"
            className="input"
            id="phrase"
            onChange={this.onChangeTextValue}
          />
          <p className="paragraph">No.of Letters: {count}</p>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator

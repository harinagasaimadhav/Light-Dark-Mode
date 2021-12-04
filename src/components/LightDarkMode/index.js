// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  changeStatusDark = () => {
    this.setState({isDark: false})
  }

  changeStatusLight = () => {
    this.setState({isDark: true})
  }

  render() {
    const {isDark} = this.state
    return (
      <div className="outer-container">
        {isDark && (
          <div className="dark-container inner-container">
            <h1 className="dark-heading heading">Click To Change Mode</h1>
            <button
              onClick={this.changeStatusDark}
              className="button"
              type="button"
            >
              Light Mode
            </button>
          </div>
        )}
        {!isDark && (
          <div className="light-container inner-container">
            <h1 className="light-heading heading">Click To Change Mode</h1>
            <button
              onClick={this.changeStatusLight}
              className="dark-button button"
              type="button"
            >
              Dark Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode

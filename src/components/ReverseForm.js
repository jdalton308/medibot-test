
import React, { Component } from 'react';



export default class ReverseForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      reverseInput: '',
      reverseResponse: null
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onReverseSubmit = this.onReverseSubmit.bind(this);
  }

//------

  onInputChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

//------

  onReverseSubmit(e) {
    e.preventDefault();

    fetch('/api/reverse', {
      method: 'POST',
      body: this.state.reverseInput,
      headers: {
        'Content-Type': 'text/plain',
      },
    })
      .then((res) => res.text())
      .catch(error => console.error('Error:', error))
      .then((res) => {
        this.setState({reverseResponse: res});
      });
  }

//------

  render() {
    const {
      reverseInput,
      reverseResponse,
    } = this.state;

    return (
      <form
        onSubmit={this.onReverseSubmit}
        className="form-reverse"
      >
        <label htmlFor="reverseInput">
          <span className="label-real">
            Text to reverse
          </span>
          <input
            type="text"
            id="reverseInput"
            name="reverseInput"
            onChange={this.onInputChange}
            value={reverseInput}
          />
        </label>

        <button type="submit">
          Reverse
        </button>

        <div className="reverse-response">
          { reverseResponse ?
              reverseResponse
              :
              <span className="no-resposne-yet">Submit a string to have it reversed</span>
          }
        </div>
      </form>

    )
  }
}

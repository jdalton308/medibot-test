
import React, { Component } from 'react';
import ServerOutput from './ServerOutput';
import { onInputChange } from '../util';



export default class ReverseForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      reverseInput: '',
      reverseResponse: null
    };

    this.onInputChange = onInputChange.bind(this);
    this.onReverseSubmit = this.onReverseSubmit.bind(this);
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
        <div className="form-content">
          <h2 className="form-title">
            Reverse a String
          </h2>
          <label className="form-group" htmlFor="reverseInput">
            <span className="label-real">
              Text to Reverse
            </span>
            <input
              type="text"
              id="reverseInput"
              name="reverseInput"
              onChange={this.onInputChange}
              value={reverseInput}
              placeholder="e.g. Racecar"
            />
          </label>

          <button type="submit">
            Reverse
          </button>
        </div>

        <ServerOutput
          placeholder="Submit a string to have it reversed."
          output={reverseResponse}
        />

      </form>

    )
  }
}

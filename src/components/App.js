
import React, { Component } from 'react';



export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      reverseInput: '',
      reverseResponse: null,

      proxyInput: '',
      proxyRequestType: 'get',
      proxyResponse: null
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

//------

  onProxySubmit(e) {

  }

//------

  onReverseSubmit(e) {

  }

//------

  onInputChange(e) {
    this.setState([e.target.name]: e.target.value);
  }

//------

  render() {
    const {
      reverseInput,
      reverseResponse,
      proxyInput,
      proxyRequestType,
      proxyResponse,
    } = this.state;

    return (
      <div>
        <h1>Crazy APIs</h1>

{/* Reverse Form */}
        <form
          action={onReverseSubmit()}
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
              onChange={onInputChange(e)}
              value={reverseInput}
            />
          </label>

          <button
            type="submit"
          >
            Reverse
          </button>

          <div className="reverse-response">
            { reverseResponse ?
                {reverseResponse}
                :
                <span className="no-resposne-yet">Submit a string to reverse it</span>
            }
          </div>
        </form>

{/* Proxy Form */}
        <form 
          action={onProxySubmit()}
          className="form-proxy"
        >
          <label htmlFor="reverseInput">
            <span className="label-real">
              API to Ping
            </span>
            <input
              type="text"
              id="proxyInput"
              name="proxyInput"
              onChange={onInputChange(e)}
              value={proxyInput}
            />
          </label>
        </form>

      </div>
    )
  }
}

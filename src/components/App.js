
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
    this.onReverseSubmit = this.onReverseSubmit.bind(this);
    this.onProxySubmit = this.onProxySubmit.bind(this);
  }

//------

  onInputChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

//------

  onReverseSubmit(e) {
    e.preventDefault();
    console.log('reverse submit: ', e);
    console.log('reversing: ', this.state.reverseInput);

    fetch('/api/reverse', {
      method: 'POST',
      body: this.state.reverseInput,
      headers: {
        'Content-Type': 'text/plain',
      },
    }).then((res) => res.text())
    .then((res) => {
      console.log('res: ', res);
      this.setState({reverseResponse: res});
    })
  }

//------

  onProxySubmit(e) {
    e.preventDefault();
    console.log('proxy submit: ', e);
    console.log('fetching: ', this.state.proxyInput);
    console.log('...as type: ', this.state.proxyRequestType);
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
        </form>

        <div className="reverse-response">
          { reverseResponse ?
              reverseResponse
              :
              <span className="no-resposne-yet">Submit a string to reverse it</span>
          }
        </div>

{/* Proxy Form */}
        <form 
          onSubmit={this.onProxySubmit}
          className="form-proxy"
        >
          <label htmlFor="proxyInput">
            <span className="label-real">
              API to Ping
            </span>
            <input
              type="text"
              id="proxyInput"
              name="proxyInput"
              onChange={this.onInputChange}
              value={proxyInput}
            />
          </label>
          <label htmlFor="proxyRequestType">
            <span className="label-real">
              Request Type
            </span>
            <select
              id="proxyRequestType"
              name="proxyRequestType"
              onChange={this.onInputChange}
              value={proxyRequestType}
            >
              <option value="get">GET</option>
              <option value="post">POST</option>
            </select>
          </label>

          <button type="submit">
            Send Request
          </button>
        </form>

        <div className="proxy-response">
          { proxyResponse ?
              proxyResponse
              :
              <span className="no-resposne-yet">Type a url to make a request to. Try...</span>
          }
        </div>

      </div>
    )
  }
}

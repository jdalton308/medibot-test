
import React, { Component } from 'react';
import ServerOutput from './ServerOutput';
import { onInputChange } from '../util';



export default class ProxyForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      proxyInput: '',
      proxyRequestType: 'get',
      proxyError: null,
      proxyResponse: null
    };

    this.onInputChange = onInputChange.bind(this);
    this.onProxySubmit = this.onProxySubmit.bind(this);
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

  onProxySubmit(e) {
    e.preventDefault();

    const {
      proxyInput,
      proxyRequestType
    } = this.state;

    fetch('/api/proxy', {
      method: 'POST',
      body: JSON.stringify({
        url: proxyInput,
        method: proxyRequestType
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.text())
      .catch(error => {
        this.setState({proxyError: error});
      })
      .then((res) => {
        this.setState({proxyResponse: res});
      });
  }

//------

  render() {
    const {
      proxyInput,
      proxyRequestType,
      proxyResponse,
    } = this.state;

    return (
      <form 
        onSubmit={this.onProxySubmit}
        className="form-proxy"
      >
        <div className="form-content">
          <h2 className="form-title">
            Ping an API
          </h2>
          <label className="form-group" htmlFor="proxyInput">
            <span className="label-real">
              Full URL to Ping
            </span>
            <input
              type="text"
              id="proxyInput"
              name="proxyInput"
              onChange={this.onInputChange}
              value={proxyInput}
              placeholder="e.g. https://www.google.com"
            />
          </label>
          <label className="form-group" htmlFor="proxyRequestType">
            <span className="label-real">
              Request Type
            </span>
            <div className="select-wrapper">
              <select
                id="proxyRequestType"
                name="proxyRequestType"
                onChange={this.onInputChange}
                value={proxyRequestType}
              >
                <option value="get">GET</option>
                <option value="post">POST</option>
              </select>
              <span className="select-arrow"></span>
            </div>
          </label>

          <button type="submit">
            Send Request
          </button>
        </div>

        <ServerOutput
          placeholder="Submit a URL above to make a request."
          output={proxyResponse}
        />

      </form>
    )
  }
}

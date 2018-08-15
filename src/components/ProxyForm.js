
import React, { Component } from 'react';



export default class ProxyForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      proxyInput: '',
      proxyRequestType: 'get',
      proxyError: null,
      proxyResponse: null
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onProxySubmit = this.onProxySubmit.bind(this);
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


        <div className="proxy-response">
          { proxyResponse ?
              proxyResponse
              :
              <span className="no-resposne-yet">Type a url to make a request to. Try...</span>
          }
        </div>
      </form>
    )
  }
}

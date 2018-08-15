
import React from 'react';



const ServerOutput = ({placeholder, output}) => {
  return (
    <div className="response">
      <h3 className="response-title">
        Server Response:
      </h3>
      { output ?
          output
          :
          <span className="no-response-yet">{placeholder}</span>
      }
    </div>
  )
};



export default ServerOutput;
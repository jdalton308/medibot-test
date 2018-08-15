
import React from 'react';
import ReverseForm from './ReverseForm';
import ProxyForm from './ProxyForm';



const App = (props) => {
  return (
    <div className="app">

      <h1>API Testing</h1>

      <div className="form-row">
        <ReverseForm />
        <ProxyForm />
      </div>

    </div>
  )
};



export default App;
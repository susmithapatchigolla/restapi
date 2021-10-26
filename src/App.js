import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';
import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App() {
  function getData() { 
    const apiName = 'apid15d4e13';
    const path = '/items';
    
    console.log("Hel")
    return API.get(apiName, path);
    console.log("Hell0")
  }
  
  (async function () {
    const response = await getData();
    console.log(response)
  })();
//  const abc= () =>{
//   const apiName = 'api28ef1e8c ';
//   const path = '/items'; 

//     const items = API
//     .get(apiName, path)
//     .then(response => {
//       // Add your code here
//       console.log(response);
//     })
//     .catch(error => {
//       console.log(error.response);
//    });
//     console.log(items);}
 

 
  
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React !
        </a>
        {}
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);

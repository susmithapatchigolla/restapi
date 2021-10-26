import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';
import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App() {
  useEffect(()=>{
    const apiName = 'api28ef1e8c ';
const path = '/items'; 

    const items = API
    .get(apiName, path)
    .then(response => {
      // Add your code here
      console.log(response);
    })
    .catch(error => {
      console.log(error.response);
   });
    console.log(items);
  },[])
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
      </header>
    </div>
  );
}

export default withAuthenticator(App);

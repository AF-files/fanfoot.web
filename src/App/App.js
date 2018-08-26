import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fantasy Football</h1>
        </header>
        <div className="container-fluid">
           <div className="row">
               <div className="col-md-3 boxTransfer">
                   <h3>Goalkeepers</h3>
                   <h3>Defenders</h3>
                   <h3>Midfielders</h3>
                   <h3>Forwards</h3>
               </div>
               <div className="col-md-9 boxTeam">
                   <h3>Users Team</h3>
               </div>
           </div>
        </div>
      </div>
    );
  }
}

export default App;

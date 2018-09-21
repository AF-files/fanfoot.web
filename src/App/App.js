import React, { Component } from 'react';
import './App.css';
import TransferList from '../TransferList/list.js';
import FantasyTeam from '../FantasyTeam/team.js';
import {Provider} from 'react-redux';
import store from '../Redux/store.js';

class App extends Component {
    
  render() {
    return (
        <Provider store={store}>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Fantasy Football</h1>
            </header>
            <div className="container-fluid">
               <div className="row">
                   <TransferList />
                   <FantasyTeam />
               </div>
            </div>
          </div>
        </Provider>
    );
  }
}

export default App;

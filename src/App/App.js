import React, { Component } from 'react';
import './App.css';
import List from '../PlayersList/list';
import Team from '../Team/team';
import HttpService from '../Services/http-service.js';

const http = new HttpService();

class App extends Component {
    constructor(props){
        super(props)
        
        this.state = {listedPlayers: []};
        
        this.loadData = this.loadData.bind(this);        
        this.loadData();
    }
    
    loadData = () => {
        var self = this;
        //maybe get players but put them into 4 different states for each position
        http.getPlayers().then(returnedData => {
            var temp = [];
            for(var i = 0;i<returnedData.length; i++){
                temp.push(returnedData[i]);
            }
            self.setState({listedPlayers: temp});
        }, err => {
            console.log("couldn't fetch players");
        });
    }
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fantasy Football</h1>
        </header>
       <div className="container-fluid">
           <div className="row">
                <List listedPlayers={this.state.listedPlayers} />
                 <Team /> 
           </div>
        </div> 
    </div>
    );
  }
}

export default App;

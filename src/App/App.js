import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Player from '../Player/player.js';
import HttpService from '../Services/http-service.js';

const http = new HttpService();

class App extends Component {
    constructor(props){
        super(props)
        
        this.state = {players:[]};
        this.state = {playersPos: []};
        
        this.loadData = this.loadData.bind(this);
        this.playerList = this.playerList.bind(this);
        
        this.loadData();
    }
    
    loadData = () => {
        var self = this;
        //maybe get players but put them into 4 different states for each position
        http.getPlayers().then(returnedData => {
            self.setState({players: returnedData});
        }, err => {
            console.log("couldn't fetch players");
        });
    }
    
    playerList = (pos) => {
        const list = this.state.players.map((player)=>{
            return(
                <div key={player._id}>
                    <Player player={player}/>
                </div>
            )
        });
        return (list);
    }
    
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
                   {this.playerList("GK")}
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

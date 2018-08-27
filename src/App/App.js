import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Player from '../Player/player.js';
import HttpService from '../Services/http-service.js';

const http = new HttpService();

class App extends Component {
    constructor(props){
        super(props)
        
        this.state = {players:[], GKs: [], DEFs: [], MIDs: [], FORs: []};
        
        this.loadData = this.loadData.bind(this);
        this.playerList = this.playerList.bind(this);
        
        this.loadData();
    }
    
    loadData = () => {
        var self = this;
        //maybe get players but put them into 4 different states for each position
        http.getPlayers().then(returnedData => {
            var GKlist = [];
            var DEFlist = [];
            var MIDlist = [];
            var FORlist = [];
            var temp = [];
            for(var i = 0;i<returnedData.length; i++){
                if(returnedData[i].position == "GK"){
                    GKlist.push(returnedData[i]);
                }else if(returnedData[i].position == "DEF"){
                    DEFlist.push(returnedData[i]);
                }else if(returnedData[i].position == "MID"){
                    MIDlist.push(returnedData[i]);
                }else if(returnedData[i].position == "FOR"){
                    FORlist.push(returnedData[i]);
                }else{
                    temp.push(returnedData[i]);
                }
            }
            self.setState({GKs: GKlist});
            self.setState({MIDs: MIDlist});
            self.setState({DEFs: DEFlist});
            self.setState({FORs: FORlist});
            self.setState({players: temp});
        }, err => {
            console.log("couldn't fetch players");
        });
    }
    
    playerList = (curState) => {
        const list = curState.map((player)=>{
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
                   {this.playerList(this.state.GKs)}
                   <h3>Defenders</h3>
                   {this.playerList(this.state.DEFs)}
                   <h3>Midfielders</h3>
                   {this.playerList(this.state.MIDs)}
                   <h3>Forwards</h3>
                   {this.playerList(this.state.FORs)}
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

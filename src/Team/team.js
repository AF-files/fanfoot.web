import React, { Component } from 'react';
import './team.css';
import PlayerTeam from '../PlayerTeam/playerTeam.js';

class Team extends Component {
    constructor(props){
        super(props)
        //this.firstEleven = this.firstEleven.bind(this);
    }

    /*firstEleven = (curState) => {
        const list = this.state.listedPlayers.map((player)=>{
            return(
                <PlayerTeam player={player} key={player._id}/>
            )
        });
        return (list);
    }*/
    
  render() {
    return (
       <div className="col-md-8 boxTeam">
           <h3>Fantasy Team</h3>
           <div className="row">
               <div className="col-md-12 playerLine">
               </div>
           </div>
           <div className="row">
               <div className="col-md-12">
               </div>
           </div>
           <div className="row">
               <div className="col-md-12">
               </div>
           </div>
           <div className="row">
               <div className="col-md-12">
               </div>
           </div>
       </div>
    );
  }
}

export default Team;

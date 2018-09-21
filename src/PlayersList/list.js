import React, { Component } from 'react';
import './list.css';
import Player from '../Player/player.js';

class List extends Component {
    constructor(props){
        super(props)
        this.playerList = this.playerList.bind(this);
    }
    
    playerList = (position) => {
        const list = this.props.listedPlayers.map((player)=>{
            if(player.position == position){
                return(
                    <div className="playerItem" key={player._id}>
                        <Player player={player}/>
                    </div>
                )
            }
        });
        return (list);
    }
    
  render() {
    return (
       <div className="col-md-4 boxTransfer">
           <h3>Goalkeepers</h3>
           {this.playerList("GK")}
           <h3>Defenders</h3>
           {this.playerList("DEF")}
           <h3>Midfielders</h3>
           {this.playerList("MID")}
           <h3>Forwards</h3>
           {this.playerList("FOR")}
       </div>
    );
  }
}

export default List;

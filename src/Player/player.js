import React, { Component } from 'react';
import './player.css';

class Player extends Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        return(
            <div className="row">
               <div className="col-sm-3">
                    <button className="btn btn-primary">Add</button>
               </div>
                <div className="col-sm-6 playerName">
                    <h4>{this.props.player.name}</h4>
                </div>
                <div className="col-sm-3 playerName">
                    <h4>£{this.props.player.price}m</h4>
                </div>
            </div>
        )
    }
}

export default Player;
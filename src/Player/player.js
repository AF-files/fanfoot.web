import React, { Component } from 'react';
import './player.css';

class Player extends Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        return(
            <div className="card">
                <div className="card-img-top" alt="Player" src={this.props.player.imgURL}>
                </div>
                <div className="card-body">
                    <h4 className="card-title">{this.props.player.name}</h4>
                </div>  
            </div>
        )
    }
}

export default Player;
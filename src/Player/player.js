import React, { Component } from 'react';
import './player.css';
import {connect} from 'react-redux';
import {removePlayerFromTeam} from '../Redux/actions.js';

class Player extends Component{
    constructor(props){
        super(props);
        this.buttonPressed = this.buttonPressed.bind(this);
    }
    
    buttonPressed = () =>{
        //action being called here
        console.log("add pressed");
        this.props.addPlayerTeam(this.props.player);
    }
    
    /*buttonRPressed = () =>{
        this.props.removePlayerFromTeam(this.props.player);
    }*/
    
    render(){
        return(
            <div className="row">
                <div className="col-sm-3">
                    <a className="btn btn-primary" onClick={()=>this.buttonPressed()}>Add</a>
                </div>
                <div className="col-sm-6 playerName">
                    <h4>{this.props.player.name}</h4>
                </div>
                <div className="col-sm-3 playerName">
                    <h4>£{this.props.player.price}m</h4>
                    <a className="btn btn-danger" onClick={()=>this.buttonRPressed()}>X</a>
                </div>
            </div>
        )
    }
}

export default Player;
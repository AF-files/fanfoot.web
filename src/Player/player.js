import React, { Component } from 'react';
import './player.css';
import {connect} from 'react-redux';
import {addPlayerToTeam} from '../Redux/actions.js';

class Player extends Component{
    constructor(props){
        super(props);
        this.buttonPressed = this.buttonPressed.bind(this);
    }
    
    buttonPressed = () =>{
        this.props.addPlayerToTeam(this.props.player);
    }
    
    render(){
        return(
            <div className="row">
                <div className="col-sm-3">
                    <a href="#" className="btn btn-primary" onClick={()=>this.buttonPressed()}>Add</a>
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

export default connect(null,{addPlayerToTeam})(Player);
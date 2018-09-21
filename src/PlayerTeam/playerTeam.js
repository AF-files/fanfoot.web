import React, { Component } from 'react';
import './playerTeam.css';
import {connect} from 'react-redux';
import {removePlayerFromTeam} from '../Redux/actions.js';

class PlayerTeam extends Component{ 
    constructor(props){
        super(props);
        this.buttonPressed = this.buttonPressed.bind(this);
    }
    
    buttonPressed = () =>{
        this.props.removePlayerFromTeam(this.props.player);
    }
    
    render(){
        return(
            <div className="card playerCard" key={this.props.key}>
              <img className="card-img-top" src={this.props.player.img}/>
              <div className="card-body details">
                  <h5 className="card-title">{this.props.player.name}</h5>
                  <div className="row">
                     <div className="col-sm-3">
                     <h5>{this.props.player.points}</h5>
                      </div> 
                    <div className="col-sm-9">
                     <a className="btn btn-danger" onClick={()=>this.buttonPressed()}>X</a>
                      </div>
                  </div>
              </div>
            </div>
        )
    }
}
export default connect(null,{removePlayerFromTeam})(PlayerTeam);
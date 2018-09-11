import React, { Component } from 'react';
import './playerTeam.css';

class PlayerTeam extends Component{    
    render(){
        return(
            <div className="card playerCard" key={this.props.id}>
              <img className="card-img-top" src={this.props.player.img}/>
              <div className="card-body details">
                  <h5 className="card-title">{this.props.player.name}</h5>
                  <div className="row">
                     <div className="col-sm-3">
                     <h5>{this.props.player.points}</h5>
                      </div> 
                    <div className="col-sm-9">
                     <button className="btn btn-danger">X</button>
                      </div>
                  </div>
              </div>
            </div>
        )
    }
}
export default PlayerTeam;
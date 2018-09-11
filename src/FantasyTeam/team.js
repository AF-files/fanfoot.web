import React, { Component } from 'react';
import './team.css';
import PlayerTeam from '../PlayerTeam/playerTeam.js';
import {connect} from 'react-redux';
import {fetchPlayers} from '../Redux/actions.js';

class FantasyTeam extends Component{
    
    constructor(props){
        super(props);
        //this.playerList = this.playerList.bind(this);
    }
    
    /*playerList = (pos) => {
        const list = this.props.fantasyTeam.map((player)=>{
            if(player.position == pos){
                return(
                //want to make a list maybe put key into player(key is to make each player item individual)
                <PlayerTeam player={player} key={player._id} id ={player._id}/>
            )}  
        });
        return (list);
    }*/
    
    render(){
        return(
            <div className="col-md-8 boxTeam">
               <h3>Fantasy Team</h3>
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
               <div className="row">
                   <div className="col-md-12">
                   </div>
               </div>
           </div>
        )
    }
}
//this receives the return from the reducer and adds it to props
const mapStateToProps = state =>({
    fantasyTeam: state.playersInList.playersTeam
})

export default connect(mapStateToProps, {fetchPlayers})(FantasyTeam);
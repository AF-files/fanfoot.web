import React, { Component } from 'react';
import './team.css';
import PlayerTeam from '../PlayerTeam/playerTeam.js';
import {connect} from 'react-redux';
import {removePlayerFromTeam} from '../Redux/actions.js';

class FantasyTeam extends Component{
    
    constructor(props){
        super(props);
        this.playerList = this.playerList.bind(this);
    }
    
    //is only called after first click then stops
    //also whens its called technically the state is undefined as there isn't any thing in it
    playerList = () => {
        console.log("map players")
        const list = this.props.fantasyTeam.map((player)=>{
            //return(
                //want to make a list maybe put key into player(key is to make each player item individual)
                //<PlayerTeam player={player} key={player._id}/>
                console.log("item");
            //)
        });
        console.log(list);
        return (list);     
    }
    
    render(){
        return(
            <div className="col-md-8 boxTeam">
               <h3>Fantasy Team</h3>
               <div className="row">
                   <div className="col-md-12" onClick={()=>this.playerList()}>
                       
                       
                   </div>
                   
               </div>
           </div>
        )
    }
}
//this receives the return from the reducer and adds it to props
const mapStateToProps = state =>{
    return{
        fantasyTeam: state.playersInList.playersTeam
    }
}

export default connect(mapStateToProps, {removePlayerFromTeam})(FantasyTeam);
import React, { Component } from 'react';
import './list.css';
import Player from '../Player/player.js';
import {connect} from 'react-redux';
import {addPlayerToTeam, fetchPlayers} from '../Redux/actions';

class TransferList extends Component{
    
    constructor(props){
        super(props);
        this.playerList = this.playerList.bind(this);
    }
    
    componentWillMount(){
        console.log("fetching")
        this.props.fetchPlayers();
    }
    
    playerList = (pos) => {
        const list = this.props.transferList.map((player)=>{
            if(player.position == pos){
                return(
                //(key is to make each player item individual)
                <div className="playerItem" key={player._id}>
                    <Player player={player} addPlayerTeam={this.props.addPlayerTeam}/>
                </div>
            )}  
        });
        return (list);
    }
    
    render(){
        return(
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
        )
    }
}
//this receives the return from the reducer and adds it to props
const mapStateToProps = state =>({
    transferList: state.playersInList.PlayersTransfer
})
const mapDispatchToProps = dispatch =>({
    addPlayerTeam(player){
        dispatch(addPlayerToTeam(player))
    },
    fetchPlayers(){
        dispatch(fetchPlayers())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TransferList);
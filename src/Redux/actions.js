import {ADD_TO_TEAM, REMOVE_FROM_TEAM, BRING_IN_PLAYERS} from "./constants.js";
import HttpService from '../Services/http-service.js';

const http = new HttpService();
//this is used so players can be added or removed then send it to reducer
const fantasyTeamList =[];

export const addPlayerToTeam = (player) => dispatch =>{
    //maybe add player to a database then fetch them
    console.log("action");
    fantasyTeamList.push(player);
    dispatch({
        type: ADD_TO_TEAM,
        payload: fantasyTeamList
    });
}

export const fetchPlayers = () => dispatch =>{
    http.getPlayers().then(players => 
    dispatch({
        type: BRING_IN_PLAYERS,
        payload: players
    })
    );
};

export const removePlayerFromTeam = (player) => dispatch =>{
    console.log("called");
    for(var i = 0;i<fantasyTeamList.length;i++){
        //console.log(fantasyTeamList[{i}]._id);
        if(fantasyTeamList[i]._id === player._id){
            fantasyTeamList.splice(i,1);
            break;
        }
    }
    dispatch({
        type: REMOVE_FROM_TEAM,
        payload: fantasyTeamList
    });
}
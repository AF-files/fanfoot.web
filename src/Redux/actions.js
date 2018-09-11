import {ADD_TO_TEAM, REMOVE_FROM_TEAM, BRING_IN_PLAYERS} from "./constants.js";
import HttpService from '../Services/http-service.js';

const http = new HttpService();
export const addPlayerToTeam = (player) => dispatch =>{
    console.log("hello");
    dispatch({
        type: ADD_TO_TEAM,
        payload: player
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
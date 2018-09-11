import {ADD_TO_TEAM, REMOVE_FROM_TEAM, BRING_IN_PLAYERS} from "./constants.js";

const initialState={
    //this represents the players added to team
    playersTeam:[],
    //think i put the updated list on transfer side with player removed
    PlayersTransfer:[]    
}

export default function(state = initialState, action){
    switch(action.type){
        case BRING_IN_PLAYERS:
            return{
                //return current state(... = spread operator)
                ...state,
                PlayersTransfer: action.payload
            }
        case ADD_TO_TEAM:
            return{
                ...state,
                playersTeam: action.payload
            }
        default:
            return state;
    }
}
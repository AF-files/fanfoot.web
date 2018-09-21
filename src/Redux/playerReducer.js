import {ADD_TO_TEAM, REMOVE_FROM_TEAM, BRING_IN_PLAYERS} from "./constants.js";

const initialState={
    //this represents the players added to team
    playersTeam:[],
    //think i put the updated list on transfer side with player removed
    PlayersTransfer:[]    
}

export default function(state = initialState, action){
    console.log(state, action.type);
    if(typeof state === "undefined"){
        return initialState;
    }
    switch(action.type){
        case BRING_IN_PLAYERS:
            return{
                //return current state(... = spread operator)
                ...state,
                PlayersTransfer: action.payload
            }
        case ADD_TO_TEAM:
            console.log("reducer");
            return {
                //return current state(... = spread operator)
                ...state,
                playersTeam: action.payload
            }/*Object.assign({}, state, {
                ...state,
                playersTeam: action.payload
            });*/
        case REMOVE_FROM_TEAM:
            return{
                ...state,
                PlayersTransfer: action.payload
            }
        default:
            return state;
    }
    console.log(state, action.type);
}
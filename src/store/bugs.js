import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import produce from 'immer';



//Action creates
export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");
//Reducer
let lastId =0;

export default createReducer([], {
    //key: value
    //actions: functions (event -=> event handler)
    [bugAdded.type]: (bugs,action) =>{
        bugs.push({
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        });
    },
    [bugResolved.type]: (bugs, action)=>{
        const index = bugs.findIndex(bug => bug.id === action.payload.id);
        bugs[index].resolved = true;
    }
});

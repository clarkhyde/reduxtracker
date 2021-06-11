import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import produce from 'immer';

let lastId =0;

const slice = createSlice({
    name: "bugs",
    initialState: [],
    reducers:{
        //actions => action handlers
        bugAssignedToUser: (bugs, action)=> {
            const { bugId, userId} = action.payload;
            const index = bugs.findIndex(bug => bug.id === bugId);
            bugs[index].userId = userId;
        },

        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            });
        },
        bugResolved: (bugs, action ) =>{
            const index = bugs.findIndex(bug => bug.id === action.payload.id);
            bugs[index].resolved = true;
        }
    }
});

export const {bugAdded, bugResolved, bugAssignedToUser} = slice.actions;
export default slice.reducer;


//Selector
//Memoization
//f(x) => y { input: 1, output: 2 }
export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    state => state.entities.projects,
    (bugs, projects) => bugs.filter(bug => !bug.resolved)
);

export const getBugsByUser = userId => createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter (bug => bug.userId === userId)
)
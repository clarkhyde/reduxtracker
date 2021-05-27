// import { compose, pipe } from 'lodash/fp';
// import { produce } from 'immer';
import store from './store';
import * as actions from './actions';


store.dispatch(actions.bugAdded("Bug 1"));

store.dispatch(actions.bugResolved(1));

console.log(store.getState());


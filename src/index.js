import configureStore from './store/configureStore.js';
import * as actions from './store/bugs.js';

const store = configureStore();
store.subscribe(()=>{
    console.log("Store changed");
})
store.dispatch(actions.bugAdded({ description: "Bug 1"}));
store.dispatch(actions.bugAdded({ description: "Bug 2"}));
store.dispatch(actions.bugAdded({ description: "Bug 3"}));
store.dispatch(actions.bugResolved({ id: 1 }));
console.log(store.getState());


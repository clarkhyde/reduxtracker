import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './bugs';

const store = createStore(reducer,
    devToolsEnhancer({trace: true }));

export default function configureStore(){
    const store = createStore(reducer,
        devToolsEnhancer({trace: true }));
        return store;
};
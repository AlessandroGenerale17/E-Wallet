import { combineReducers } from 'redux';
import assetsReducer from './assets/reducer';

const reducer = combineReducers({
    assets: assetsReducer
});

export default reducer;

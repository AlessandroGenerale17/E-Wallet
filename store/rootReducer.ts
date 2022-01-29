import { combineReducers } from 'redux';
import assetsReducer from './assets/reducer';
import addAssetFlowReducer from './addAssetFlow/reducer';

const reducer = combineReducers({
    assets: assetsReducer,
    addAssetFlow: addAssetFlowReducer
});

export default reducer;

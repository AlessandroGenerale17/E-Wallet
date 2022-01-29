import { InitialState, AddAssetAction } from './types';

const initialState: InitialState = {
    inputFieldSuggestions: []
};

const reducer = (state = initialState, action: AddAssetAction) => {
    switch (action.type) {
        case 'SAVE_INPUT_FIELD_SUGGESTIONS':
            return {
                ...state,
                inputFieldSuggestions: action.payload
            };
        default:
            return state;
    }
};

export default reducer;

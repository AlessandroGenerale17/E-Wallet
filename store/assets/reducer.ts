import { AssetsActions, State } from './types';

const initialState: State = {
    assets: [1, 2, 3]
};

const reducer = (state = initialState, action: AssetsActions) => {
    switch (action.type) {
        case 'DUMMY_ACTION':
            return state;
        default:
            return state;
    }
};

export default reducer;

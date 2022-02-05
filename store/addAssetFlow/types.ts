import { Asset } from '../../types/Asset';

export type InitialState = {
    inputFieldSuggestions: Asset[];
    recentSearches: string[];
};

type SaveFetchedSuggestions = {
    type: 'SAVE_INPUT_FIELD_SUGGESTIONS';
    payload: Asset[];
};

type ClearSuggestions = {
    type: 'CLEAR_SUGGESTIONS';
};

export type AddAssetAction = SaveFetchedSuggestions | ClearSuggestions;

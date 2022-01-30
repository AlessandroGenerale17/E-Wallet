import { Asset } from '../../types/Asset';

export type InitialState = {
    inputFieldSuggestions: Asset[];
    recentSearches: string[];
};

type SaveFetchedSuggestions = {
    type: 'SAVE_INPUT_FIELD_SUGGESTIONS';
    payload: Asset[];
};

export type AddAssetAction = SaveFetchedSuggestions;

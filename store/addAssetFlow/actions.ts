import { Asset } from '../../types/Asset';
import { AddAssetAction } from './types';

export const SaveFetchedSuggestions = (
    suggestions: Asset[]
): AddAssetAction => ({
    type: 'SAVE_INPUT_FIELD_SUGGESTIONS',
    payload: suggestions
});

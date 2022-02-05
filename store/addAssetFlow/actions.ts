import { AppDispatch, RootState } from '..';
import { Asset } from '../../types/Asset';
import { AddAssetAction } from './types';
import axios from 'axios';
import { API_KEY } from '../../constants';

export const saveFetchedSuggestions = (
    suggestions: Asset[]
): AddAssetAction => ({
    type: 'SAVE_INPUT_FIELD_SUGGESTIONS',
    payload: suggestions
});

export const clearSuggestions = () => ({
    type: 'CLEAR_SUGGESTIONS'
});

export const fetchSuggestions =
    (keyboardInput: string) =>
    async (dispatch: AppDispatch, getState: () => RootState) => {
        // let response: Awaited<Asset[]>;
        let response;
        try {
            response = await axios.get(
                `${API_KEY}/stock/suggestions/${keyboardInput}`
            );
        } catch (err) {
            // fire error
            if (err instanceof Error) console.log('fire error ', err);
            return;
        }
        const suggestions = response.data;
        if (!suggestions.length) {
            return;
        }
        dispatch(saveFetchedSuggestions(suggestions));
    };

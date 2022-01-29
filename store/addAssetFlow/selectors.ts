import { RootState } from '..';
import { Asset } from '../../types/Asset';

export const selectInputFieldSuggestions = (reduxState: RootState): Asset[] =>
    reduxState.addAssetFlow.inputFieldSuggestions;

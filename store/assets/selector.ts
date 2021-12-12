import { RootState } from '..';
import { State } from './types';

export const selectDummyState = (reduxState: RootState): State => {
    return reduxState.assets;
};

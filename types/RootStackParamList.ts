import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined;
    AssetDetails: undefined;
    AddAsset: undefined;
};

export type ScreenNavigationProp<T extends keyof RootStackParamList> =
    StackNavigationProp<RootStackParamList, T>;

export type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
    RootStackParamList,
    T
>;

import React from 'react';
import { Keyboard, StyleProp, ViewStyle } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface IProps {
    viewStyle: StyleProp<ViewStyle>;
}

const HideKeyboard: React.FC<IProps> = ({ children, viewStyle }) => {
    return (
        <TouchableWithoutFeedback style={viewStyle} onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );
};

export default HideKeyboard;

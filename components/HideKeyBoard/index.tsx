import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

/* FIXME add styles */
const HideKeyboard: React.FC = ({ children }) => {
    return <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>;
};

export default HideKeyboard;

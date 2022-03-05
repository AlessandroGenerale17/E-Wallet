import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from 'react-native-reanimated';

type Props = {
    slide: number;
};

const SliderIndicator: React.FC<Props> = ({ slide }) => {
    const offset = useSharedValue(0);
    const filledInStyle = useAnimatedStyle(() => {
        return { transform: [{ translateX: withSpring(offset.value * 255) }] };
    });

    return (
        <Animated.View style={[styles.container, filledInStyle]}>
            <View
                style={[
                    styles.circle,
                    slide === 0 ? styles.circleActive : styles.circleInactive
                ]}></View>
            <View
                style={[
                    styles.circle,
                    slide === 1 ? styles.circleActive : styles.circleInactive
                ]}></View>
            <View
                style={[
                    styles.circle,
                    slide === 2 ? styles.circleActive : styles.circleInactive
                ]}></View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '30%',
        height: '5%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10,
        top: 700,
        left: 130,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 20,
        padding: '5%'
    },
    circle: {
        width: '20%',
        height: '60%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white'
    },
    circleActive: {
        backgroundColor: 'white'
    },
    circleInactive: {
        backgroundColor: 'black'
    }
});

export default SliderIndicator;

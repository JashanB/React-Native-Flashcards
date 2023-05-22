import React from 'react';
import type { PropsWithChildren } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
} from 'react-native';


const GameScreen = ({ route }) => {
    const { difficulty } = route.params;

    return (
        <View >
            {/* Content of the second screen */}
            <Text>Difficulty: {difficulty}</Text>
        </View>
    );
};

export default GameScreen;

import React, { useState, useEffect } from 'react';
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
    const paramsObj = route.params
    const difficulty = paramsObj['difficulty'];
    const game = paramsObj['game'];

    console.log(paramsObj)
    console.log(difficulty, game)
    // const { difficulty } = route.params;
    /*
    based on route inputted, want to create add or subtract game
    subtract - top number greater than bottom 
    add - any work, use 2 digits, implement hard vs easy after



    need input text below question to put numbers 


    need to implement check answer function to ocmpare input to actual
*/

    return (
        <View >
            {/* Content of the second screen */}
            <Text>Difficulty: {difficulty}</Text>
        </View>
    );
};

export default GameScreen;

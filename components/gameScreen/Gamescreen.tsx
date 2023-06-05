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
    const [answered, setAnswered] = useState(false);
    const [correct, setCorrect] = useState(true);
    const [next, setNext] = useState(false);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [answer, setAnswer] = useState(0);

    // console.log(paramsObj)
    // console.log(difficulty, game)
    let thirdVar = 0;

    useEffect(() => {
        if (game === 'addition') {
            setNum1(state => (Math.floor(Math.random() * 90) + 10));
            setNum2(state => (Math.floor(Math.random() * 90) + 10));
            
        } else if (game === 'subtraction') {
            setNum1(state => (Math.floor(Math.random() * 90) + 10));
            setNum2(state => (Math.floor(Math.random() * 90) + 10));
            if (num2 > num1) {
                thirdVar = num1 
                setNum1(state => (num2));
                setNum2(state => (thirdVar));
            }
        }
    }, [answered])
    /*
    based on route inputted, want to create add or subtract game
    subtract - top number greater than bottom 
    add - any work, use 2 digits, implement hard vs easy after



    need input text below question to put numbers 


    need to implement check answer function to ocmpare input to actual
    
    need to add score tracker and next question button 
*/

    return (
        <View >
            {/* Content of the second screen */}
            <Text>Game Mode: {game}</Text>
            <Text>Difficulty: {difficulty}</Text>
            <Text>Question: {difficulty}</Text>
        </View>
    );
};

export default GameScreen;

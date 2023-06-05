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
    Button,
    TextInput
} from 'react-native';


const GameScreen = ({ route }) => {
    const paramsObj = route.params
    const difficulty = paramsObj['difficulty'];
    const game = paramsObj['game'];
    const [next, setNext] = useState(false);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [correct, setCorrect] = useState(false);

    // console.log(paramsObj)
    // console.log(difficulty, game)
    let thirdVar = 0;
    
    const checkCorrect = (input, gameMode) => {
        setAnswered(state => true);
        if (gameMode === 'addition') {
            input === (num1 + num2) ? setCorrect(state => true) : setCorrect(state => false);

        } else if (gameMode === 'subtraction') {
            input === (num1 - num2) ? setCorrect(state => true) : setCorrect(state => false);
        }
    }

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
            {game === 'addition' ? <Text>Question: {num1} + {num2} = </Text> : <Text>Question: {num1} - {num2} = </Text>}
            <TextInput keyboardType="number-pad"  placeholder="Type here!"></TextInput>
            {game === 'addition' ? <Button title="Submit" onPress={() => checkCorrect((num1 + num2), 'addition')} /> : <Button title="Submit" onPress={() => checkCorrect((num1 - num2), 'subtraction')} />}
            {correct ? <Text>Correct?: yes</Text> : <Text>Correct?: no</Text>}
            {/* {
            if (game === 'addition') {
                return <Text>Question: {num1} + {num2} = {num1 + num2}</Text>
            } else { 
                return <Text>Question: {num1} - {num2} = {num1 - num2}</Text>
            }
        } */}

            <Text></Text>
        </View>
    );
};

export default GameScreen;

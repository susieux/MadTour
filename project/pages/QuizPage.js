import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Slider from 'react-native-slider';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import styleInfo from '../styleInfo.js';

const quizStack = createStackNavigator();

const width = Dimensions.get('window');

export default function QuizPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>
                The Quiz
            </Text>
            <ScrollView
                style={styles.container}
                horizontal={true}
                //these values need to be changed and tweaked
                snapToInterval={width - 60}
                snapToAlignment={"center"} 
                contentInset={{
                    top:0,
                    left:30,
                    bottom:0,
                    right:30,
                }}
            >
                {qIntensity()}
                {qDistance()}
                {qDoorness()}
                {qTransport()}
                {qTimeFrame()}
            </ScrollView>
        </View>
    );
}

{// contains qt code functions
/**
 * Used to generalize questions that can have the input of Sliders
 * 
 * @param {String} question
 * The "title" question being asked of the user
 *  
 * @param {Number} start
 * The left-most number of the slider 
 * 
 * @param {Number} end 
 * The right-most number of the slider
 * 
 * @param {Number} interval 
 * The distance between each "notch" in the slider using the same units as start and end
 */
function qtSlider(question = "Default Question", left = 0, right = 10, start = 5, interval = 1, lText = "0", rText = "10") {
    return (
        <View>
            <Text>
                {question}
            </Text>
            <Slider
                minimumValue={left}
                maximumValue={right}
                value={start}
                step={interval}
            >
            </Slider>
            <Text>
                {lText}
                Should be on the left
            </Text>
            <Text>
                {rText}
                should be on the right
            </Text>
        </View>
    );
}

/**
 * Used to generalize questions that can have the input of Radio Buttons
 * 
 * @param {String} question 
 * The "title" question being asked of the user
 * 
 * @param {String[]} ans 
 * Each option the user can select
 */
function qtRadio(question, ans) {

}
}// contains qt code functions

{//contains q code functions
//slider
/**
 * Call to qtSlider with the necessry info in the params to ask the question.
 * Question: "How active do you wish to be on this trip?"
 */
function qIntensity() {
    let q = "How active do you wish to be on this trip";
    let l = 1;
    let r = 10;
    let s = 5;
    let i = 1;
    let lText = "Relaxed";
    let rText = "Busy";
    qtSlider(q,l,r,s,i,lText,rText);
}

//slider
function qDistance() {

}

//ie indoor or outdoor
//radio button
function qDoorness() {

}

//radio button
function qTransport() {

}

//date picker
function qTimeFrame() {

}
}//contains q code functions

const styles = StyleSheet.create(styleInfo);

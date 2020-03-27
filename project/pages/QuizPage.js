import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from 'react-native-slider';
import { ScrollView } from 'react-native-gesture-handler';

import styleInfo from '../styleInfo.js';

export default function QuizPage() {
    return (
        <View style={styles.container}>
            <View>
                <Text>
                    The Quiz
                </Text>
            </View>
            {qtSlider()}
        </View>
    );
}

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
function qtSlider(question="Default Question", start=0, end=10, interval=1, startText="0", endText="10") {
    //the formatting of the
    return (
        <View>
            <Text>
                {question}
            </Text>
            <Slider 
                minimumValue={start}
                maximumValue={end}
                step={interval}
            >
                Some text in the slider
            </Slider>
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

//slider
function qIntensity() {

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

const styles = StyleSheet.create(styleInfo);

import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styleInfo from '../styleInfo.js';

export default function QuizPage({navigation}) {
  return (
    <ScrollView>
      <View style={styles.subText}>
            <Text>
                The Quiz
            </Text>
        </View>
      <TouchableOpacity style={styles.button} onPress={() =>navigation.push("Tabs")}>
            <Text style={styles.buttonText}>
                Sumbit Quiz
            </Text>
        </TouchableOpacity>
    </ScrollView>
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
function qtSlider(question, start, end, interval, startText, endText){

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
function qtRadio(question, ans){

}

//slider
function qIntensity(){

}

//slider
function qDistance(){

}

//ie indoor or outdoor
//radio button
function qDoorness(){

}

//radio button
function qTransport(){

}

//date picker
function qTimeFrame(){

}

const styles = StyleSheet.create(styleInfo);

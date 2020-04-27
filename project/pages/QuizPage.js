import * as React from 'react';
import {useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Slider from 'react-native-slider';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import CalendarPicker from 'react-native-calendar-picker';
import TestCalendars from './testCalendars'


import styleInfo from '../styleInfo.js';
import testCalendars from './testCalendars';

const width = Dimensions.get('window');

export default function QuizPage({navigation}) {
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.contentContainer}
                horizontal={true}
                //TODO
                //these values need to be changed and tweaked
                //these actually dont work at all
                //still need to install and implement react-native-snap-carousel
                // ==============================snapToInterval={width - 60} TODO: This is causing errors===============================================
                snapToAlignment={"center"}
                contentInset={{
                    top: 0,
                    left: 20,
                    bottom: 0,
                    right: 20,
                }}
            >
                {qIntensity()}
                {qDistance()}
                {qDoorness()}
                {qTransport()}
                {qTimeFrame()}
            </ScrollView>            
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>navigation.push("Tabs")}
                >
                    <Text style={styles.buttonText}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
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
function qtSlider(question = "Default Question", left = 0, right = 10, start = 5, interval = 1, lText = "0", rText = "10") {
    const [isSlideValue, setSlideValue] =React.useState(start);
    return (
        <View style={styles.quizContainer}>
            <View style={styles.subContainer}>
                    <Text style={styles.questionText}>
                        {question}
                    </Text>
                <View style={styles.sliderContainer}>
                    <Slider
                        style={styles.slider}
                        minimumValue={left}
                        maximumValue={right}
                        thumbTintColor='#b6131d'
                        value={start}
                        step={interval}
                        onValueChange={(value) => setSlideValue(value)}                    
                    >                    
                    </Slider>
                    <View style={styles.sliderEndText}>
                    <Text>
                        {lText}                                       
                    </Text>
                    <Text>
                        {rText}                    
                    </Text>
                    </View>
                </View>
                <Text style={styles.headText}>
                    {"Slider value: " + isSlideValue}                    
                </Text>
                
            </View>
        </View>
    );
}

/**
 * Used to generalize questions that can have the input of Radio Buttons
 * 
 * @param {String} question 
 * The "title" question being asked of the user
 * 
 * @param {[Object]} buttons 
 * The array of props for the buttons
 * 
 */
function qtRadio(question = "Default Question", buttons = [{ label: "d1", value: 0 }, { label: "d2", value: 1 }]) {
    return (
        <View style={styles.quizContainer}>
            <View style={styles.subContainer}>
                <Text style={styles.questionText}>
                    {question}
                </Text>
                <View style={styles.sliderContainer}>
                <RadioForm
                    radio_props={buttons}
                    initial={0}
                    //TODO fix this! Gives errors 
                    //"TypeError: Cannot read property 'setState' of undefined"
                    //happens upon pressing the radio button
                    // onPress={(value) => {this.setState({value:value})}}
                    onPress={(value) =>{}}
                    //TODO styling
                    //can change color of buttons and the like
                    buttonColor={'#757575'}
                    selectedButtonColor={'#b6131d'}
                    labelStyle={{fontSize:20,color:'#212121'}}
                />
                </View>
            </View>
        </View>
    );
}

//slider
/**
 * Call to qtSlider with the necessry info in the params to ask the question.
 * Question: "How active do you wish to be on this trip?"
 */
function qIntensity() {
    let q = "How active do you wish to be on this trip";
    let l = 0;
    let r = 2;
    let s = 1;
    let i = 1;
    let lText = "Relaxed";
    let rText = "Busy";
    return qtSlider(q, l, r, s, i, lText, rText);
}

//slider
function qDistance() {
    let q = "How far are you willing to travel from the place you are staying.";
    //these values need to be changed
    let l = 0;
    let r = 16;
    let s = 8;
    let i = 4;
    // Changed
    let lText = "< 4 miles";
    let rText = "> 16 miles";
    return qtSlider(q, l, r, s, i, lText, rText);
}

//ie indoor or outdoor
//radio button
function qDoorness() {
    let question = "Do you prefer indoor or outdoor activities?";
    let props = [
        {label: "Indoor", value: 0},
        {label: "Outdoor", value: 0},
        {label: "No Preference", value: 1}
    ]
    return qtRadio(question, props);
}

//radio button
function qTransport() {
    let question = "Which form of transport will you use mainly?";
    let props = [
        {label: "Car", value: 0},
        {label: "Bus", value: 0},
        {label: "Walk", value: 0},
        {label: "Variety", value: 1},
    ]
    return qtRadio(question, props);
}

//date picker
function qTimeFrame() {
    //should implement the calendar picker. 
    //use testCalendarPicker as a reference.
    
    return <TestCalendars/>;
}

const styles = StyleSheet.create(styleInfo);

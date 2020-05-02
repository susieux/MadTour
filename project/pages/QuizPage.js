import * as React from 'react';
import { useState, useEffect } from 'react';
import { CheckBox } from 'react-native-elements'
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import Slider from 'react-native-slider';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Calendar } from 'react-native-calendars';
import TestCalendars from './testCalendars'
import { useNavigation } from '@react-navigation/native';
import styleInfo from '../styleInfo.js';

const width = Dimensions.get('window');

export default function QuizPage({navigation}) {
    //Attraction attributes
    const [aArt, setaArt] = useState(false);
    const [aBars, setaBars] = useState(false);
    const [aBrew, setaBrew] = useState(false);
    const [aGalleries, setaGalleries] = useState(false);
    const [aGuidedTour, setaGuidedTour] = useState(false);
    const [aHealth, setaHealth] = useState(false);
    const [aLocal, setaLocal] = useState(false);
    const [aPerform, setaPerform] = useState(false);
    const [aSpecial, setaSpecial] = useState(false);
    const [aSports, setaSports] = useState(false);
    //Event attributes
    const [eAnnual, seteAnnual] = useState(false);
    const [eArt, seteArt] = useState(false);
    const [eEducation, seteEducation] = useState(false);
    const [eEntertainment, seteEntertainment] = useState(false);
    const [eFairs, seteFairs] = useState(false);
    const [eFood, seteFood] = useState(false);
    const [eFree, seteFree] = useState(false);
    const [eGallery, seteGallery] = useState(false);
    const [eGeneral, seteGeneral] = useState(false);
    const [eHoliday, seteHoliday] = useState(false);
    const [eKids, seteKids] = useState(false);
    const [eLocal, seteLocal] = useState(false);
    const [eMusic, seteMusic] = useState(false);
    const [eNature, seteNature] = useState(false);
    const [eShopping, seteShopping] = useState(false);
    const [eSports, seteSports] = useState(false);
    const [eTheater, seteTheater] = useState(false);
    const [eTours, seteTours] = useState(false);
    const [eTrivia, seteTrivia] = useState(false);
    const [eVirtual, seteVirtual] = useState(false);
    //Date picker
    const [startDate, setStartDate] = useState(new Date());
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

                {qTransport()}
                <View style={styles.quizContainer}>
                    <View style={styles.subContainer}>
                        <Text style={styles.questionText}>
                            Choose the type of attraction you like
                </Text>
                        <Text style={styles.subText}>
                            Scroll to see all the options
                            </Text>
                        <ScrollView>
                            <CheckBox
                                title='Arts & Crafts'
                                checked={aArt}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    setaArt(!aArt);
                                }}
                            />
                            <CheckBox
                                title='Bars & Nightlife"'
                                checked={aBars}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    setaBars(!aBars);
                                }}
                            />
                            <CheckBox
                                title='Breweries, Wineries & Distilleries'
                                checked={aBrew}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    setaBrew(!aBrew);

                                }}
                            />
                            <CheckBox
                                title='Galleries & Museum'
                                checked={aGalleries}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    setaGalleries(!aGalleries);

                                }}
                            />
                            <CheckBox
                                title='Guided Tours'
                                checked={aGuidedTour}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    setaGuidedTour(!aGuidedTour);

                                }}
                            />
                            <CheckBox
                                title='Health & Welness'
                                checked={aHealth}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    setaHealth(!aHealth);

                                }}
                            />
                            <CheckBox
                                title='Local'
                                checked={aLocal}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    setaLocal(!aLocal);

                                }}
                            />
                            <CheckBox
                                title='Performing Arts'
                                checked={aPerform}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    setaPerform(!aPerform);

                                }}
                            />
                            <CheckBox
                                title='Special Events'
                                checked={aSpecial}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    setaSpecial(!aSpecial);

                                }}
                            />
                            <CheckBox
                                title='Sports & Recreation'
                                checked={aSports}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    setaSports(!aSports);

                                }}
                            />
                        </ScrollView>
                    </View>
                </View>

                <View style={styles.quizContainer}>
                    <View style={styles.subContainer}>
                        <Text style={styles.questionText}>
                            Choose the type of event you like
                </Text>
                        <Text style={styles.subText}>
                            Scroll to see all the options
                            </Text>
                        <ScrollView >
                            <CheckBox
                                title='Annual Events'
                                checked={eAnnual}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    seteAnnual(!eAnnual);

                                }}
                            />
                            <CheckBox
                                title='Arts & Culture"'
                                checked={eArt}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    seteArt(!eArt);

                                }}
                            />
                            <CheckBox
                                title='Education & Lectures'
                                checked={eEducation}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    seteEducation(!eEducation);

                                }}
                            />
                            <CheckBox
                                title='Entertainment & Nightlife'
                                checked={eEntertainment}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    seteEntertainment(!eEntertainment);

                                }}
                            />
                            <CheckBox
                                title='Fairs & Festivals'
                                checked={eFairs}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    seteFairs(!eFairs);

                                }}
                            />
                            <CheckBox
                                title='Food & Drink'
                                checked={eFood}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    seteFood(!eFood);

                                }}
                            />
                            <CheckBox
                                title='Free Event'
                                checked={eFree}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    seteFree(!eFree);

                                }}
                            />
                            <CheckBox
                                title='Gallery & Exhibitions'
                                checked={eGallery}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    seteGallery(!eGallery);

                                }}
                            />
                            <CheckBox
                                title='General & Community Events'
                                checked={eGeneral}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    seteGeneral(!eGeneral);

                                }}
                            />
                            <CheckBox
                                title='Holiday/Seasonal'
                                checked={eHoliday}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    seteHoliday(!eHoliday);

                                }}
                            />
                            <CheckBox
                                title='Kids & Families'
                                checked={eKids}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    seteKids(!eKids);

                                }}
                            />
                            <CheckBox
                                title='Local Libations'
                                checked={eLocal}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    seteLocal(!eLocal);

                                }}
                            />
                            <CheckBox
                                title='Music & Concerts'
                                checked={eMusic}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    seteMusic(!eMusic);

                                }}
                            />
                            <CheckBox
                                title='Nature & Outdoors'
                                checked={eNature}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    seteNature(!eNature);

                                }}
                            />
                            <CheckBox
                                title='Shopping'
                                checked={eShopping}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    seteShopping(!eShopping);

                                }}
                            />
                            <CheckBox
                                title='Sports & Recreation'
                                checked={eSports}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    seteSports(!eSports);

                                }}
                            />
                            <CheckBox
                                title='Theater & Performing Arts'
                                checked={eTheater}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    seteTheater(!eTheater);

                                }}
                            />
                            <CheckBox
                                title='Tours & Walks'
                                checked={eTours}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    seteTours(!eTours);

                                }}
                            />
                            <CheckBox
                                title='Trivia'
                                checked={eTrivia}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    seteTrivia(!eTrivia);

                                }}
                            />
                            <CheckBox
                                title='Virtual Event'
                                checked={eVirtual}
                                uncheckedIcon='circle-o'
                                checkedIcon='dot-circle-o'
                                onPress={() => {

                                    seteVirtual(!eVirtual);

                                }}
                            />
                        </ScrollView>
                    </View>
                </View>
                <View showsVerticalScrollIndicator={false}>
                    <View style={styles.quizContainer}>
                        {/* <View style ={styles.subContainer}> */}
                        <Calendar
                            current={startDate}
                            hideExtraDays
                            onDayPress={(date) => setStartDate(date)}
                            markedDates={{
                                [startDate.dateString]: {
                                    selected: true,
                                    disableTouchEvent: true,
                                    selectedDotColor: 'orange'
                                }
                            }}
                            style={styles.calendar}
                            theme={{
                                monthTextColor: '#7e0000',
                                textMonthFontWeight: 'bold',
                                textMonthFontSize: 18,
                                todayTextColor: '#7e0000',
                                textDayHeaderFontWeight: 'bold',
                                dayTextColor: '#494949',
                                selectedDayBackgroundColor: '#ef5046',
                            }}
                        />
                    </View>
                    {/* </View> */}
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={submit.bind(aArt, aArt, aBars, aBrew, aGalleries, aGuidedTour, aHealth, aLocal, aPerform, aSpecial, aSports,
                        eAnnual, eArt, eEducation, eEntertainment, eFairs, eFood, eGallery, eGeneral, eHoliday, eKids, eLocal, eMusic,
                        eNature, eShopping, eTheater, eTours, eTrivia, eVirtual, startDate,navigation)}
                >
                    <Text style={styles.buttonText}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
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
    const [isSlideValue, setSlideValue] = React.useState(start);
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
//Used to send user's info as JSON to the backend
function submit(aArt, aBars, aBrew, aGalleries, aGuidedTour, aHealth, aLocal, aPerform, aSpecial, aSports,
    eAnnual, eArt, eEducation, eEntertainment, eFairs, eFood, eGallery, eGeneral, eHoliday, eKids, eLocal, eMusic,
    eNature, eShopping, eTheater, eTours, eTrivia, eVirtual, startDate,navigation) {
    //Data storage
    //Send attraction
    var formdataA = new FormData();
    formdataA.append("aArt", aArt);
    formdataA.append("aBars", aBars);
    formdataA.append("aBrew", aBrew);
    formdataA.append("aGalleries", aGalleries);
    formdataA.append("aGuidedTour", aGuidedTour);
    formdataA.append("aHealth", aHealth);
    formdataA.append("aLocal", aLocal);
    formdataA.append("aPerform", aPerform);
    formdataA.append("aSpecial", aSpecial);
    formdataA.append("aSports", aSports);
    formdataA.append("aBars", aBars);

    var requestOptions = {
        method: 'POST',
        body: formdataA,
        redirect: 'follow'
    };

    fetch("http://shifanzhou.com/sendAttraction.php", requestOptions)
        .then(response => response.json())
        .then(result =>navigation.navigate('Tabs',{screen:'Activities',params:{attraction:result}}))
        .catch(error => console.log('error', error));

    //Send events
    var formdataE = new FormData();
    let time = "'" + startDate.dateString + "'";
    formdataE.append("eAnnual", eAnnual);
    formdataE.append("eArt", eArt);
    formdataE.append("eEducation", eEducation);
    formdataE.append("eEntertainment", eEntertainment);
    formdataE.append("eFairs", eFairs);
    formdataE.append("eFood", eFood);
    formdataE.append("eGallery", eGallery);
    formdataE.append("eGeneral", eGeneral);
    formdataE.append("eHoliday", eHoliday);
    formdataE.append("eKids", eKids);
    formdataE.append("eLocal", eLocal);
    formdataE.append("eMusic", eMusic);
    formdataE.append("eNature", eNature);
    formdataE.append("eShopping", eShopping);
    formdataE.append(" eTheater", eTheater);
    formdataE.append("eTours", eTours);
    formdataE.append("eTrivia", eTrivia);
    formdataE.append("eVirtual", eVirtual);
    formdataE.append("time", time);
    var requestOptionsE = {
        method: 'POST',
        body: formdataE,
        redirect: 'follow'
    };

    fetch("http://shifanzhou.com/sendEvent.php", requestOptionsE)
        .then(response => response.json())
        .then(result =>navigation.navigate('Tabs',{screen:'Events',params:{events:result}}))
        .catch(error => console.log(error));
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
                        onPress={(value) => { }}
                        //TODO styling
                        //can change color of buttons and the like
                        buttonColor={'#757575'}
                        selectedButtonColor={'#b6131d'}
                        labelStyle={{ fontSize: 20, color: '#212121' }}
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
        { label: "Indoor", value: 0 },
        { label: "Outdoor", value: 0 },
        { label: "No Preference", value: 1 }
    ]
    return qtRadio(question, props);
}

//radio button
function qTransport() {
    let question = "Which form of transport will you use mainly?";
    let props = [
        { label: "Car", value: 0 },
        { label: "Bus", value: 0 },
        { label: "Walk", value: 0 },
        { label: "Variety", value: 1 },
    ]
    return qtRadio(question, props);
}

//date picker
function qTimeFrame() {
    //should implement the calendar picker. 
    //use testCalendarPicker as a reference.

    return (<View showsVerticalScrollIndicator={false}>
        <View style={styles.quizContainer}>
            {/* <View style ={styles.subContainer}> */}
            <Calendar
                current={startDate}
                hideExtraDays
                onChange={date => setStartDate(date)}
                markedDates={{
                    [this.state.selected]: {
                        selected: true,
                        disableTouchEvent: true,
                        selectedDotColor: 'orange'
                    }
                }}
                style={styles.calendar}
                theme={{
                    monthTextColor: '#7e0000',
                    textMonthFontWeight: 'bold',
                    textMonthFontSize: 18,
                    todayTextColor: '#7e0000',
                    textDayHeaderFontWeight: 'bold',
                    dayTextColor: '#494949',
                    selectedDayBackgroundColor: '#ef5046',
                }}
            />
        </View>
        {/* </View> */}
    </View>);
}

const styles = StyleSheet.create(styleInfo);

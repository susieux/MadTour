import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import logoHead from '../assets/images/Logo-MadTour-w.png';
import logo1 from '../assets/images/TeaCeremony_2A474C47-DA94-4597-880F93834B4BDF83_69fcd7bc-6119-47f9-be9038ee43093548.jpg';

import styleInfo from '../styleInfo.js';

//breaks mobile
//const fs = require('fs');

//data storage
let filters; //import from QuizPage
let event = getEvents(filters);

export default function Events({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.push("SelectPlan")}
            >
                <Text style={styles.buttonText}>
                    Select Plan
                </Text>
            </TouchableOpacity>
        </View>
        {/* <Text style={styles.mainText}>
            Currently at Events
        </Text> */}
        <ScrollView style={styles.contentContainer}
            showsVerticalScrollIndicator={false}
        >
          {listEvents(navigation)}
        </ScrollView>
    </View>
  );
}

//To simulate going through and creating a clickable for each button
function listEvents(navigation) {
    let ret = [];
    for (let i = 0; i < 10; i++) {
        ret[i] = makeEvent(i, navigation);
    }
    return ret;
}

//Each individual clickable with basic event info shown. Info will be where value is display event, time, and location?
function makeEvent(value, navigation) {
    let tags = "";
    for (let i = (Math.floor(Math.random() * 3 + 1)); i > 0; i--) {
        if(i=1){
            tags = 'Arts & Crafts';
        }
        else if(i=2){
            tags = 'Bars & Nightlife';
        }
        else if(i=3){
            tags = 'Breweries, Wineries & Distilleries';
        }
        // if(i=4){
        //     tags = 'Galleries & Museum';
        // }
        // if(i=5){
        //     tags = 'Guided Tours';
        // }
        // if(i=6){
        //     tags = 'Health & Welness';
        // }
        // if(i=7){
        //     tags = 'Local';
        // }
        // if(i=8){
        //     tags = 'Performing Arts';
        // }
        // if(i=9){
        //     tags = 'Special Events';
        // }
        // if(i=10){
        //     tags = 'Sports & Recreation';
        // }
        // tags = tags + "tag " + i + ", ";
    }
    return (
        <TouchableOpacity
            key={value + "act"}
            style={styles.eventContainer}
            onPress={() => navigation.push("Event")}
        >
            <Text style={styles.buttonHeaderEventText}>
                {"Chinese Tea Ceremony"}
            </Text>
            <Text style={styles.buttonEventText}>
                {"Date: April 18, 2020"}
            </Text>
            <Text style={styles.buttonEventText}>
                {"Location: 800 Langdon St."}
            </Text>
            <Text style={styles.buttonEventText}>
                {tags}
            </Text>
            <View style={styles.subContainer, { flex: 0.1, backgroundColor: '#0f0' }}>
            </View>
            <Image
                source={logo1}
                style={styles.logosquare}
            />
        </TouchableOpacity>
    );
}

function getEvents() {
    //retrieve the events from the site and place in the json file
    // backend stuff
    //retrieve data into the events page 

    /*
    * somehow doesnt work? Node should be installed on my pc and should come with javascript>
    *
    const fs = require('fs');
    var jsonString;
    fs.readFile('..../cPanel/event1.json', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        try{
            var eventData = JSON.parse(jsonString).docs.docs;
            eventData.forEach((e) => {
                console.log(e._id);
            });
        }
        catch(err){
            console.log("Error parsing JSON file:",err);
        }
        //console.log('File data:', jsonString);
    })
    */
}

const styles = StyleSheet.create(styleInfo);
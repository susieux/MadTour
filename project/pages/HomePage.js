import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

import styleInfo from '../styleInfo.js';

export default function HomePage() {
  return (
    <View style={styles.container}>
        <View style={styles.contentContainer}>
            <Text style={styles.mainText}>
                MadTour
            </Text>
            <Text style={styles.subText}>
                The tour planner for Madison, Wisconsin
            </Text>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
                New Plan
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
                Saved Plans
            </Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}

HomePage.navigationOptions = {
  header: null,
};

//use to navigate to the QuizPage
function navigateToNewPlan(){

}

//use to navigate to the StoredPlansPage
function navigateToSavedPlan(){

}

const styles = StyleSheet.create(styleInfo);

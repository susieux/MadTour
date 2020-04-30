import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { MonoText } from '../components/StyledText';

import styleInfo from '../styleInfo.js';

export default function HomePage({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.contentContainer}>
            <View style={styles.logoContainer}>
                <Image style={styles.logosquare} source={require('../assets/images/Logo-Square-w.png')}></Image>
                <Image style={styles.logo} source={require('../assets/images/MadTour-w.png')}></Image>
                <Text style={styles.headText}>
                The tour planner for Madison, WI
            </Text>
            </View>
        </View>
        <View style={styles.homeButtonContainer}>
            <TouchableOpacity style={styles.button} onPress={() =>navigation.push("Quiz")}>
                <Text style={styles.buttonText}>
                    New Plan
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() =>navigation.push("SavedPlans")}>
                <Text style={styles.buttonText}>
                    Saved Plans
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() =>navigation.push("Test1")}>
                <Text style={styles.buttonText}>
                    Testing
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

HomePage.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create(styleInfo);

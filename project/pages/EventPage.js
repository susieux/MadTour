import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import styleInfo from '../styleInfo.js';

export default function EventPage({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <TouchableOpacity 
            style={styles.button}
            onPress={()=> alert("Saved to schedule")}
        >
            <Text style={styles.buttonText}>
                Add to Plan
            </Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.eventText}>
          {"Name: Chinese Tea Ceremony"}
        </Text>
        <Text style={styles.eventText}>
          {"Times: April 28, 2020"}
        </Text>
        <Text style={styles.eventText}>
          {"Distance: "}
        </Text>
        <Text style={styles.eventText}>
          {"Address: 800 Langdon St.Madison, WI 53706"}
        </Text>        
    </View>
  );
}

EventPage.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create(styleInfo);

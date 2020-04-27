import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import styleInfo from '../styleInfo.js';

export default function EventPage({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
        <TouchableOpacity 
            style={styles.button}
            onPress={()=> alert("TODO: Save to storage")}
        >
            <Text style={styles.buttonText}>
                Add to Plan
            </Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.eventText}>
          {"Name: "}
        </Text>
        <Text style={styles.eventText}>
          {"Times: "}
        </Text>
        <Text style={styles.eventText}>
          {"Distance: "}
        </Text>
        <Text style={styles.eventText}>
          {"Summary: "}
        </Text>        
    </View>
  );
}

EventPage.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create(styleInfo);

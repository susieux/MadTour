import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import styleInfo from '../styleInfo.js';

export default function PlanPage({navigation}) {
  return (
    <View style={styles.container}>        
        <View style={styles.buttonContainer}>
        <TouchableOpacity 
            style={styles.button}
            onPress={()=> alert("Saved to Saved Schedules")}
        >
            <Text style={styles.buttonText}>
                Save Plan
            </Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.eventText}>
          {"Event 1"}
        </Text>
        <Text style={styles.eventText}>
          {"Name: Betty Lou Cruises"}
        </Text>
        <Text style={styles.eventText}>
          {"Times: "}
        </Text>
        <Text style={styles.eventText}>
          {"Distance: "}
        </Text>
        <Text style={styles.eventText}>
          {""}
        </Text>
        <Text style={styles.eventText}>
          {"Event 2"}
        </Text>
        <Text style={styles.eventText}>
          {"Name: Chinese Tea Ceremony"}
        </Text>
        <Text style={styles.eventText}>
          {"Times: "}
        </Text>
        <Text style={styles.eventText}>
          {"Distance: "}
        </Text>
    </View>
  );
}

PlanPage.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create(styleInfo);

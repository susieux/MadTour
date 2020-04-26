import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styleInfo from '../styleInfo.js';

export default function Activities({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
      <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.push("SelectPlan")}
        >
            <Text style={styles.mainText}>
                Select Plan
            </Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.mainText}>
            Currently at Select Activities
        </Text>
        <ScrollView>
          {example(navigation)}
        </ScrollView>
    </View>
  );
}

//To simulate going through and creating a clickable for each button
function example(navigation){
  let ret = [];
  for(let i = 0; i< 10; i++){
    ret[i] = makeAct(i, navigation);
  }
  return ret;
}

//Each individual clickable with basic event info shown. Info will be where value is display event, time, and location?
function makeAct(value, navigation){
  return (
    <TouchableOpacity 
            key={value + "act"}
            style={styles.button}
            // Will need to change this or make it so that it reacts to the info given to it
            onPress={()=>navigation.push("Event")}
        >
        <Text style={styles.buttonEventText}>
          {"Name: " + value}
        </Text>
        <Text style={styles.buttonEventText}>
          {"Times: "}
        </Text>
        </TouchableOpacity>
  );
}
const styles = StyleSheet.create(styleInfo);
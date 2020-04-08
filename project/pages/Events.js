import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styleInfo from '../styleInfo.js';

export default function Events({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.push("SelectPlan")}
        >
            <Text style={styles.mainText}>
                Select Plan
            </Text>
        </TouchableOpacity>
        <Text style={styles.mainText}>
            Currently at Events
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
    ret[i] = makeEvent(i, navigation);
  }
  return ret;
}

//Each individual clickable with basic event info shown. Info will be where value is display event, time, and location?
function makeEvent(value, navigation){
  return (
    <TouchableOpacity 
      key={value + "act"}
      style={styles.button}
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
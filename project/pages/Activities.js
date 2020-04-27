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
            <Text style={styles.buttonText}>
                Select Plan
            </Text>
      </TouchableOpacity>
        </View>
        {/* <Text style={styles.mainText}>
            Currently at Select Activities
        </Text> */}
        <ScrollView style={styles.contentContainer}>
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
            style={styles.eventContainer}
            onPress={() => navigation.push("Event")}
        >
            <Text style={styles.buttonHeaderEventText}>
                {value + " the coolest activity of the year"}
            </Text>
            <Text style={styles.buttonEventText}>
                {"Date: "}
            </Text>
            <Text style={styles.buttonEventText}>
                {"Time: "}
            </Text>
            
            <View style={styles.subContainer, { flex: 0.1, backgroundColor: '#0f0' }}>
            </View>
            
        </TouchableOpacity>
  );
}
const styles = StyleSheet.create(styleInfo);
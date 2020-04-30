import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import logo1 from '../assets/images/editedDSC_8557_022B3CC5-5E90-48A4-AEDA6B66A3FFC7F4_e7823bab-dcde-41b7-9f50befc97aea1e8.jpg';

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
  let atr = "";
  for(let i = 0; i< 10; i++){
    atr = "Betty Lou Cruises";
    ret[i] = makeAct(i, navigation,atr);
  }
  return ret;
}

//Each individual clickable with basic event info shown. Info will be where value is display event, time, and location?
function makeAct(value, navigation,atr){
  return (
    <TouchableOpacity
            key={value + "act"}
            style={styles.eventContainer}
            onPress={() => navigation.push("Event")}
        >
            <Text style={styles.buttonHeaderEventText}>
                {atr}
            </Text>
            <Text style={styles.buttonEventText}>
                {"Location: Lake Monona & Lake Mendota"}
            </Text>
            <Text style={styles.buttonEventText}>
                {"Phone: (608) 246-3138"}
            </Text>
            <Image
                source={logo1}
                style={styles.logosquare}
            />
            <View style={styles.subContainer, { flex: 0.1, backgroundColor: '#0f0' }}>
            </View>
            
        </TouchableOpacity>
  );
}
const styles = StyleSheet.create(styleInfo);
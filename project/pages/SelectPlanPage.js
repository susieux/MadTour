import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styleInfo from '../styleInfo.js';

export default function SelectPlanPage({navigation}) {
  return (
    <View style={styles.container}>
               
        <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.popToTop()}
        >
            <Text style={styles.mainText}>
                Back to Home
            </Text>
        </TouchableOpacity>

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
  
  //Each individual clickable with schedule view?
  function makeEvent(value, navigation){
    return (
      <TouchableOpacity 
        key={value + "Plan"}
        style={styles.calendarContainer}
        onPress={()=>navigation.push("Plan")}
      >
        <Text style={styles.mainText}>
          {value + " Plan and info"}
        </Text>
      </TouchableOpacity>
    );
  }

SelectPlanPage.navigationOptions = {
  header: null,
};
  

const styles = StyleSheet.create(styleInfo);

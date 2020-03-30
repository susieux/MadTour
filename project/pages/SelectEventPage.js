import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import styleInfo from '../styleInfo.js';

export default function SelectEventPage({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.mainText}>
            Currently at Select Event
        </Text>
        <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.push("Event")}
        >
            <Text style={styles.mainText}>
                Forward to Event
            </Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.push("SelectPlan")}
        >
            <Text style={styles.mainText}>
                Forward to SelectPlan
            </Text>
        </TouchableOpacity>
    </View>
  );
}

SelectEventPage.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create(styleInfo);

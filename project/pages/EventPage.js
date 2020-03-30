import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import styleInfo from '../styleInfo.js';

export default function EventPage({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.mainText}>
            Currently at Event
        </Text>
        <TouchableOpacity 
            style={styles.button}
            onPress={()=> alert("TODO: Save to storage")}
        >
            <Text style={styles.mainText}>
                Add to Plan
            </Text>
        </TouchableOpacity>
    </View>
  );
}

EventPage.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create(styleInfo);

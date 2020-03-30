import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import styleInfo from '../styleInfo.js';

export default function EventPage({navigation}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.goBack()}
        >
            <Text style={styles.mainText}>
                Back to Select Event
            </Text>
        </TouchableOpacity>
        <Text style={styles.mainText}>
            Currently at Event
        </Text>
    </View>
  );
}

EventPage.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create(styleInfo);

import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import styleInfo from '../styleInfo.js';

export default function SavedPlansPage({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
            Currently at Saved Plans
        </Text>
        <View style={styles.buttonContainer}>
        <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.push("Plan")}
        >
            <Text style={styles.buttonText}>
                View Plan
            </Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}

SavedPlansPage.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create(styleInfo);

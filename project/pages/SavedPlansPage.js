import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import styleInfo from '../styleInfo.js';

export default function SavedPlansPage({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.mainText}>
            Currently at Saved Plans
        </Text>
        <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.push("Plan")}
        >
            <Text style={styles.mainText}>
                View Plan
            </Text>
        </TouchableOpacity>
    </View>
  );
}

SavedPlansPage.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create(styleInfo);

import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import styleInfo from '../styleInfo.js';

export default function PlanPage({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.mainText}>
            Currently at Plan
        </Text>
        <TouchableOpacity 
            style={styles.button}
            onPress={()=> alert("TODO: Save to storage")}
        >
            <Text style={styles.mainText}>
                Save Plan
            </Text>
        </TouchableOpacity>
    </View>
  );
}

PlanPage.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create(styleInfo);

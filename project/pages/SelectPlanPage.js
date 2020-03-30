import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import styleInfo from '../styleInfo.js';

export default function SelectPlanPage({navigation}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.goBack()}
        >
            <Text style={styles.mainText}>
                Back to SelectEvent
            </Text>
        </TouchableOpacity>
        <Text style={styles.mainText}>
            Currently at Select Plan
        </Text>
        <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.push("Plan")}
        >
            <Text style={styles.mainText}>
                Forward to Plan
            </Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.push("SavedPlans")}
        >
            <Text style={styles.mainText}>
                Forward to SavedPlan
            </Text>
        </TouchableOpacity>
    </View>
  );
}

SelectPlanPage.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create(styleInfo);

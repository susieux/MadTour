import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import styleInfo from '../styleInfo.js';

export default function PlanPage({navigation}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.goBack()}
        >
            <Text style={styles.mainText}>
                Back to SelectPlan or SavedPlanss
            </Text>
        </TouchableOpacity>
        <Text style={styles.mainText}>
            Currently at Plan
        </Text>
    </View>
  );
}

PlanPage.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create(styleInfo);

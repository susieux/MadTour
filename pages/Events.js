import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styleInfo from '../styleInfo.js';

export default function Events() {
  return (
    <View style={styles.container}>
        <View>
            <Text>
                The Quiz
            </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create(styleInfo);
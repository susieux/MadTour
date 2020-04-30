import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';

import styleInfo from '../styleInfo.js';

export default class TestCalendars extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selected: undefined
    };
  }

  onDayPress = (day) => {
    this.setState({selected: day.dateString});
  }

  render() {
    return (
      <View showsVerticalScrollIndicator={false}>
       <View style ={styles.quizContainer}>
          {/* <View style ={styles.subContainer}> */}
          <Calendar
            current={'2020-04-13'}
            hideExtraDays
            onDayPress={this.onDayPress}
            markedDates={{
              [this.state.selected]: {
                selected: true, 
                disableTouchEvent: true, 
                selectedDotColor: 'orange'
              }
            }}
            style={styles.calendar}
            theme={{
              monthTextColor: '#7e0000',
              textMonthFontWeight:'bold',
              textMonthFontSize:18,
              todayTextColor: '#7e0000',
              textDayHeaderFontWeight:'bold',
              dayTextColor: '#494949',
              selectedDayBackgroundColor: '#ef5046',
            }}
          />
          </View>
        {/* </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create(styleInfo);


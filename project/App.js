import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import all of out different pages
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import SavedPlansPage from './pages/SavedPlansPage';
import SelectEventPage from './pages/SelectEventPage';
import EventPage from './pages/EventPage';
import SelectPlanPage from './pages/SelectPlanPage';
import PlanPage from './pages/PlanPage';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import testCalendars from './pages/testCalendars';

import useLinking from './navigation/useLinking';
import { BorderlessButton } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

// Kept from the installation of the "tabs" template.
// editted for the project

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  //When fully loaded, send to HomePage
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    // returning the format for the page 
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator screenOptions={{headerShown:true},
              {
                headerStyle: {backgroundColor: '#b6131d',},
                headerTintColor: '#fff', 
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }
            }>
            <Stack.Screen name="Main" component={HomePage} />
            <Stack.Screen name="Quiz" component={QuizPage} />
            <Stack.Screen name="Tabs" component={BottomTabNavigator} />
            <Stack.Screen name="SavedPlans" component={SavedPlansPage} />
            <Stack.Screen name="Test1" component={testCalendars} />
            <Stack.Screen name="Event" component={EventPage} />
            {/* <Stack.Screen name="SelectEvent" component={SelectEventPage} /> Not needed because it's what tabs is, but how we discussed*/}
            <Stack.Screen name="Plan" component={PlanPage} />
            <Stack.Screen name="SelectPlan" component={SelectPlanPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});

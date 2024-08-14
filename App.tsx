import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './app_src/screens/Profile';
import List_of_docters from './app_src/screens/List_of_docters';
import Image_view from './app_src/screens/image_view';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List_of_profiles">
        <Stack.Screen name='List_of_profiles' component={List_of_docters}/>
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name = 'image_view' component={Image_view} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


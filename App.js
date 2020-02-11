import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Form from './src/screens/Form';

const Stack = createStackNavigator();

export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ title: '一覧' }}/>
          <Stack.Screen name="Form" component={Form} options={{ title: '登録' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

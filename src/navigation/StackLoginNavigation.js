import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

function NewScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>New Screen</Text>
    </View>
  );
}

function StackLoginNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />

      <Stack.Screen name="NewScreen" component={NewScreen} />
    </Stack.Navigator>
  );
}

export default StackLoginNavigation;

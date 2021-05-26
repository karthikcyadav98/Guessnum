import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import SelectNum from '../Screens/SelectNum';
import GuessNum from '../Screens/GuessNum';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SelectNum"
        options={{
          headerShown: false,
        }}
        component={SelectNum}
      />

      <Stack.Screen
        name="GuessNum"
        options={{
          headerShown: false,
        }}
        component={GuessNum}
      />
    </Stack.Navigator>
  );
};

export default Navigation;

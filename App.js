import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Task App',
            headerStyle: { backgroundColor: '#222f3e' },
            headerTitleStyle: { color: '#ffffff' },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen')}>
                <Text style={{ color: '#ffffff', marginRight: 20, fontSize: 20 }}>Add Task</Text>
              </TouchableOpacity>
            )
          })} />
        <Stack.Screen
          name="TaskFormScreen"
          component={TaskFormScreen}
          options={{
            title: 'Add New Task',
            headerStyle: {
              backgroundColor: '#222f3e'
            },
            headerTitleStyle: { color: '#ffffff' },
            headerTintColor: '#ffffff'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
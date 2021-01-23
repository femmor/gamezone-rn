import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, Text, View, Button, TextInput, StatusBar } from 'react-native';
import tailwind from 'tailwind-rn';
import ListScreen from './src/screens/ListScreen';

export default function App() {
  return (
    <View>
      <SafeAreaView style={tailwind('bg-white')}/>
      <View style={tailwind('bg-gray-100 h-full p-4')}> 
        <ListScreen/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  
});

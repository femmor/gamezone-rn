import React from 'react';
import { StyleSheet, SafeAreaView, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import tailwind from 'tailwind-rn';
import Header from './src/components/Header';
import TodoScreen from './src/screens/Todo';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <SafeAreaView style={tailwind('bg-white')}/>
          <Header/>
          <View style={tailwind('bg-gray-100 p-5 h-full')}> 
              <TodoScreen/>
          </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  
});

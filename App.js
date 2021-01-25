import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import tailwind from 'tailwind-rn';
import Header from './src/components/Header';
import TodoScreen from './src/screens/Todo';

export default function App() {
  return (
    <View>
      <SafeAreaView style={tailwind('bg-white')}/>
        <Header/>
        <View style={tailwind('bg-gray-100 p-5 h-full')}> 
            <TodoScreen/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  
});

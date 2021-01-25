import React, { useState } from 'react'
import {StyleSheet,FlatList, Text, View, TouchableOpacity} from 'react-native';
import tailwind from 'tailwind-rn';

const TouchableCompScreen = () => {

    const [people, setPeople] = useState([
        {id: '1', name: 'Emmanuel'},
        {id: '2', name: 'Mario'},
        {id: '3', name: 'Yoshi'},
        {id: '4', name: 'David'},
        {id: '5', name: 'Reign'},
        {id: '6', name: 'Bower'},
        {id: '7', name: 'Green'},
    ])

    const pressHandler = id => {
        setPeople((prevPeople) => {
            return prevPeople.filter(person => person.id != id)
        })
    }

    return (
        <View>
            <Text style={tailwind('text-3xl p-6 text-center')}>Touchable Components</Text>
            <FlatList
                style={tailwind('h-full')}
                data={people}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        style={tailwind('bg-green-300 mb-2 p-4 rounded-lg')}
                        onPress={() => pressHandler(item.id)}
                        >
                        <Text style={tailwind('text-2xl')}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
            {/* <ScrollView style={tailwind('h-full')}>
            {people.map(person => (
                <View key={person.key} style={tailwind('bg-green-300 mb-2 p-4 rounded-lg')}>
                    <Text style={tailwind('text-2xl')}>{person.name}</Text>
                </View>
            ))}
            </ScrollView> */}
        </View>
    )
}

const styles = StyleSheet.create({
    Item: {
        
    }
})

export default TouchableCompScreen

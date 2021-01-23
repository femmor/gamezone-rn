import React, { useState } from 'react'
import {ScrollView, Text, View} from 'react-native';
import tailwind from 'tailwind-rn';

const ListScreen = () => {

    const [people, setPeople] = useState([
        {key: '1', name: 'Emmanuel'},
        {key: '2', name: 'Mario'},
        {key: '3', name: 'Yoshi'},
        {key: '4', name: 'David'},
        {key: '5', name: 'Reign'},
        {key: '6', name: 'Bower'},
        {key: '7', name: 'Green'},
    ])

    return (
        <View>
            <ScrollView style={tailwind('h-full')}>
            {people.map(person => (
                <View key={person.key} style={tailwind('bg-green-300 mb-2 p-4 rounded-lg')}>
                    <Text style={tailwind('text-2xl')}>{person.name}</Text>
                </View>
            ))}
            </ScrollView>
        </View>
    )
}

export default ListScreen

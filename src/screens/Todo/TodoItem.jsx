import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = ({ item, pressHandler }) => {
    return (
        <View style={tailwind('py-2 px-3 bg-white mb-3 rounded-lg flex flex-row justify-between items-center')}>
            <TouchableOpacity>
                <Text style={tailwind('text-lg capitalize')}>{item.text}</Text>
            </TouchableOpacity>
            <MaterialIcons style={tailwind('p-2')} name="delete-outline" size={24} color="#cf0000" onPress={() => pressHandler(item.id)} />
        </View>
    )
}

export default TodoItem

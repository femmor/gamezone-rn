import React from 'react'
import { View } from 'react-native'
import tailwind from 'tailwind-rn'
import TodoListScreen from './TodoListScreen'

const TodoScreen = () => {
    return (
        <View style={tailwind('')}>
            <TodoListScreen/>
        </View>
    )
}

export default TodoScreen

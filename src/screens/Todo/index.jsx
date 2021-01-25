import React from 'react'
import { View } from 'react-native'
import AddTask from '../../components/AddTask'
import TodoListScreen from './TodoListScreen'

const TodoScreen = () => {
    return (
        <View>
            <AddTask/>
            <TodoListScreen/>
        </View>
    )
}

export default TodoScreen

import React, { useState } from 'react'
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import tailwind from 'tailwind-rn'
import AddTask from '../../components/AddTask'
import TodoItem from './TodoItem'

const TodoListScreen = () => {

    const [todos, setTodos] = useState([])

    const pressHandler = id => {
        // Delete Taskss
        setTodos(deletedTask => (
            deletedTask.filter(task => task.id != id)
        ))
    }

    const submitTask = (text) => {
        setTodos((prevTodos) => 
            [...prevTodos, {text, id: Math.random().toString()}]
        )
        
    }

    return (
        <View style={tailwind('')}>
            <AddTask submitTask={submitTask}/>
            <FlatList
                data={todos}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <TodoItem item={item} pressHandler={pressHandler}/>
                )}
            />
        </View>
    )
}

export default TodoListScreen

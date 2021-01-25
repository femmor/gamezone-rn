import React, { useState } from 'react'
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import tailwind from 'tailwind-rn'
import TodoItem from './TodoItem'

const TodoListScreen = () => {

    const [todos, setTodos] = useState([
        {text: "buy coffee", id: 1},
        {text: "create a mobile app", id: 2},
        {text: "convert it to a web app", id: 3},
    ])

    const pressHandler = id => {
        // Delete Taskss
        setTodos(deletedTask => (
            deletedTask.filter(task => task.id != id)
        ))
    }


    return (
        <View style={tailwind('h-full')}>
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

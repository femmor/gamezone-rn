import React, {useState} from 'react'
import { Alert, TextInput, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { MaterialIcons } from '@expo/vector-icons';

const AddTask = ({ submitTask }) => {

    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val)
    }

    const submitHandler = () => {
        text.length > 3 ? submitTask(text) : Alert.alert("OOPS!", "Task must be over 3 chars long", [
            {text: "Understood", onPress: () => console.log('Alert closed..')}
        ]);
        setText('')
    }

    return (
        <View style={tailwind('my-4')}>
            <View style={tailwind('bg-white rounded-lg flex flex-row justify-between')}>
                <TextInput
                    style={tailwind('p-4 w-3/4')}
                    onChangeText={changeHandler}
                    value={text}
                    placeholder="Add a task..."
                />
                <MaterialIcons style={tailwind('p-4')} name="add" size={24} color="#e28903" onPress={submitHandler}/>
            </View>
        </View>
    )
}

export default AddTask

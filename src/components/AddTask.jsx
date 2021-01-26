import React, {useState} from 'react'
import { Alert, TextInput, View } from 'react-native'
import tailwind from 'tailwind-rn'
import Icon from 'react-native-vector-icons/FontAwesome';

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
            <View style={tailwind('p-4 bg-white rounded-lg flex flex-row justify-between')}>
                <TextInput
                    onChangeText={changeHandler}
                    value={text}
                    placeholder="Add a task..."
                />
                <Icon name="plus" size={20} color="#fcbf25" onPress={submitHandler}/>
            </View>
        </View>
    )
}

export default AddTask

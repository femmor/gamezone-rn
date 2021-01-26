import React from 'react'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-rn'

const SandBox = () => {
    return (
        <View style={tailwind('h-full bg-gray-100 p-4')}>
            <Text>This is a sandbox</Text>
        </View>
    )
}

export default SandBox

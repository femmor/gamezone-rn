import React from 'react'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-rn'

const Header = () => {
    return (
        <View style={tailwind('py-4 bg-yellow-500')}>
            <Text style={tailwind('text-white text-2xl font-bold text-center')}>CrediTask</Text>
        </View>
    )
}

export default Header

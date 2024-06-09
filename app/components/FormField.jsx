import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import {icons} from '../../constants'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base font-medium text-gray-100">{title}</Text>

            <View className="flex-row items-center px-4 w-full h-16 rounded-2xl border-2 border-black-200 bg-black-100 focus:border-secondary">
                <TextInput
                    className="flex-1 text-base font-semibold text-white"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Passowrd' && !showPassword}

                />

                {title ===  'Password' && (
                    <TouchableOpacity onPress={()=> setShowPassword(!showPassword)}>
                        <Image
                        source={!showPassword ? icons.eye : icons.eyeHide}
                        className="w-6 h-6"
                        resizeMode='contain'
                        />
                    </TouchableOpacity>
                )}
            </View>

        </View>
    )
}

export default FormField
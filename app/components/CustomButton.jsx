import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity
            className={`rounded-xl bg-secondary min-h-[62px] justify-center items-center ${containerStyles}  ${isLoading ? 'opacity-50' : ''}`}
            onPress={handlePress}
            activeOpacity={0.7}
            disabled={isLoading}

        >
            <Text className={`text-lg font-semibold text-primary ${textStyles}`}>   
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton
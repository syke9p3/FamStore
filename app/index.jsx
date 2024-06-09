import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Link, Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants'
import CustomButton from './components/CustomButton';

export default function App() {
    return (
        <SafeAreaView className="h-full bg-primary">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="items-center justify-center w-full px-4 min-h-[100vh]">
                    <Image
                        source={images.logo}
                        className="w-[130px] h-[84px]"
                        resizeMode='contain'
                    />
                    <Image
                        source={images.cards}
                        className="max-w-[380px] w-full h-[300px]"
                        resizeMode='contain'
                    />

                    <View className="relative mt-5">
                        <Text className="text-3xl font-bold text-center text-white">
                            Discover Endless Possibilities with{' '}

                            <Text className="relative text-secondary-200">
                                Aora
                            </Text>

                        </Text>
                        {/* <Image
                            source={images.path}
                            className="w-[136px] h-[15px]  -bottom-2 -right-8 absolute"
                            resizeMode='contain'
                        /> */}



                        <Text className="mt-7 text-sm text-center text-gray-100"> Where creativity meeets innovation:
                            Embark on a journey of limitless exploration with Aora

                        </Text>


                    </View>
                    <CustomButton
                        title={"Continue with Email"}
                        handlePress={() => router.push('sign-in')}
                        containerStyles={"w-full mt-7"}
                    />

                    <StatusBar backgroundColor='#161622' style='light' />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

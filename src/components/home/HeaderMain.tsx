import { View, Text, Image } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo'

const HeaderMain = () => {
    return (
        <View className='flex h-12 flex-row bg-yellow-400 items-center justify-between'>
            <View className='w-10/12 h-12 flex-row flex items-center p-4 rounded-br-full rounded-tr-full bg-white'>
                <Image className='w-8 h-8' source={require("../../../assets/house.png")} />
                <View className='flex-1 flex flex-row items-center ml-2 h-10'>
                    <Text className='text-xl font-semibold'>Ev</Text>
                    <Text className='font-light text-sm ml-2'>Clock Towers Hacı İlbey - Balıkesir</Text>
                </View>
                    <Entypo className='ml-auto' name='chevron-right' size={22} color='#5D3EBD' />
            </View>
            <View className='w-2/12'>
                <Text className='text-xs  text-getirColor text-center font-bold'>TVS</Text>
                <Text className='text-xl  text-getirColor text-center font-bold'>15dk</Text>
            </View>

        </View>
    )
}

export default HeaderMain
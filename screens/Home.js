import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, SearchIcon, AdjustmentsIcon } from "react-native-heroicons/outline";


const Home = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView style={style.AndroidSafeArea} className="bg-white pt-5">
      <Text>
        {/* header */}
        <View className='flex-row justify-between pb-3 items-center space-x-2'>
          <Image
            source={require('../assets/avatar.jpg')}
            className='rounded-full h-7 w-7 bg-gray-300 p-4'
          />
          <View className='flex-1'>
            <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
            <Text className='font-bold text-xl'>Current Location
              <ChevronDownIcon size={20} color='00CCBB' />
            </Text>
          </View>

          <UserIcon size={35} color='00CCBB' />
        </View>

        {/* Search bar */}



      </Text>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});

export default Home
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Entypo, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator()
const RootNavigator = () => {

    const CustomTabBarButton = ({children}) => {
        return(
            <TouchableOpacity style={{borderRadius:33,borderWidth:2,marginTop:-12, borderColor:"white", width:56, height:56, backgroundColor:"#5C3EBC", justifyContent:'center', alignItems:'center'}}>
                <Entypo name='list' size={32} color="#FFD00C"/>
            </TouchableOpacity>
        )
    }

    return (
        <Tab.Navigator
            initialRouteName="AnaSayfa"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#5C3EBC",
                tabBarInactiveTintColor: "#959595",
                headerShown: false,
                tabBarStyle: {
                    height: 50,
                },
            }}
        >
            <Tab.Screen
                name='Ana Sayfa'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="search" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="list"
                component={HomeNavigator}
                options={{
                    tabBarButton: (props) => <CustomTabBarButton {...props} />,

                }}
            />
            <Tab.Screen
                name="User"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={24} color={color} />
                    ),
                }}

            />
            <Tab.Screen
                name="Gift"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="gift" size={24} color={color} />),
                }}
            />

        </Tab.Navigator>
    )
}

export default RootNavigator
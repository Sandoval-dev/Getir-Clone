import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native'
import HomeScreen from "../screens/HomeScreen"
import CartScreen from "../screens/CartScreen"
import CategoryFilterScreen from "../screens/CategoryFilterScreen"
import ProductDetailsScreen from "../screens/ProductDetailsScreen"
import { AntDesign } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { Product } from '../models'
import * as actions from '../redux/actions/cartActions'



const Stack = createStackNavigator()

const {width,height}=Dimensions.get('window')
const MyStack = ({navigation,route,cartItems, clearCart}: {cartItems:{product:Product, quantity:number}[], clearCart:() => void}) => {
    var tabHiddenRoutes=["ProductDetails", "CartScreen"]
    const [totalPrice,setTotalPrice]=useState<number>(0)

    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        console.log("Route Name is ", routeName);
        if (tabHiddenRoutes.includes(routeName)) {
            console.log("Kapat ", routeName);
            navigation.setOptions({ tabBarStyle: { display: "none" } });
        } else {
            console.log("Aç ", routeName);
            navigation.setOptions({ tabBarStyle: { display: "true" } });
        }
    }, [navigation, route]);

    const getProductsPrice=() => {

        var total=0;
        cartItems.forEach(cartItem => {
            const price = (total += cartItem.product.fiyat)
            setTotalPrice(price)
        },[cartItems, navigation,route])
    }

    useEffect(()=> {
        getProductsPrice()
    })

    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerStyle: { backgroundColor: "#5C3EBC" },
                    headerTitle: () => (<Image style={{ width: 70, height: 30 }} source={require("../../assets/getirlogo.png")} />)
                }}
            />
             <Stack.Screen
                name="CartScreen"
                component={CartScreen}
                options={{
                    headerTintColor: 'white',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ margin: 10 }}>
                            <AntDesign name="close" size={25} color="white" />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => clearCart()} style={{ paddingRight: 15 }}>
                          <FontAwesome5 name="trash" size={20} color="white" />
                        </TouchableOpacity>
                    ),
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: "#5C3EBC" },
                    headerTitle: () => (<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Sepetim</Text>)
                }}
            />
            <Stack.Screen
                name="CategoryDetails"
                component={CategoryFilterScreen}
                options={{
                    headerTintColor: 'white',
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: "#5C3EBC" },
                    headerRight: () => (<TouchableOpacity onPress={() => navigation.navigate("CartScreen")} style={{width:width*0.22, height:33, flexDirection:'row', alignItems:'center', backgroundColor:'white', marginRight:width*0.03, borderRadius:9}}>
                        <Image source={require("../../assets/cart.png")} style={{width:23, height:23,marginLeft:6}} />
                        <View style={{height:33, width:3, backgroundColor:'white'}}></View>
                        <View style={{flex:1, height:33, backgroundColor:'#F3EFFE', borderTopRightRadius:9, borderBottomRightRadius:9, justifyContent:'center', alignItems:'center'}}>
                         <Text style={{color:"#5C3EBC", fontWeight:'bold', fontSize:13}}> ₺ {totalPrice.toFixed(2)}</Text>
                        </View>
                    </TouchableOpacity>),
                    headerTitle: () => (<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Ürünler</Text>)
                }}
            />
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={{
                    headerTintColor: 'white',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ margin: 10 }}>
                            <AntDesign name="close" size={25} color="white" />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity style={{ paddingRight: 15 }}>
                            <AntDesign name="heart" size={25} color="#32177a" />
                        </TouchableOpacity>
                    ),
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: "#5C3EBC" },
                    headerTitle: () => (<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Ürün Detayı</Text>)
                }}
            />
        </Stack.Navigator>
    )
}

const mapStateToProps = (state) => {
    const {cartItems} = state;
    return {
        cartItems:cartItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        clearCart:() => dispatch(actions.clearCart())
    }
}

function HomeNavigator({navigation,route, cartItems, clearCart}: {clearCart:() => void}){

    return <MyStack navigation={navigation} route={route} cartItems={cartItems}clearCart={clearCart}/>
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigator)
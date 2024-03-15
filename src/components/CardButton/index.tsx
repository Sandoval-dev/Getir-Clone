import React from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import * as actions from "../../redux/actions/cartActions"
import { Product } from '../../models'


const { width, height } = Dimensions.get('window')

type cartButtonType={
    addItemToCart:(a:Product) => void;
    item: Product;
}
const index = ({item,addItemToCart}: cartButtonType) => {
    return (
        <View style={{ backgroundColor: 'white',position:'absolute',bottom:0, height: height * 0.13, justifyContent: 'center', width: '100%' }}>
            <TouchableOpacity onPress={() => addItemToCart(item)}>
                <View style={{ backgroundColor: '#5D3EBD', height: width * 0.15, width: width * 0.95, padding: 15, margin: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Sepete Ekle</Text>
                </View>
            </TouchableOpacity>
        </View >

    )
}

const mapDispatchToProps=(dispatch)=> {

    return{
        addItemToCart:(product:Product) =>
        dispatch(actions.addToCart({quantity:1,product}))
    }
}

export default connect(null,mapDispatchToProps)(index)
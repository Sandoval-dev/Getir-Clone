import React from 'react'
import { Image, Text, View, Dimensions } from 'react-native'
import { Product } from '../../models'
import { connect } from 'react-redux'
import * as actions from "../../redux/actions/cartActions"
import { TouchableOpacity } from 'react-native-gesture-handler'


type CartItemProps = {
    product: Product;
    quantity: number;
    removeFromCart: (product: Product) => void
}

const { width, height } = Dimensions.get('window')
const index = ({ product, quantity, removeFromCart }: CartItemProps) => {
    return (
        <View style={{ width: '100%', backgroundColor: 'white' }}>
            <View style={{ borderBottomWidth: 0.4, width: width * 0.92, marginHorizontal: width * 0.04, borderBottomColor: 'lightgrey', height: height * 0.13, flexDirection: 'row', paddingHorizontal: width * 0.04, backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ borderColor: 'lightgray', borderRadius: 8, borderWidth: 0.45, padding: 4 }}>
                        <Image style={{ height: height * 0.09, width: height * 0.09 }} source={{ uri: product.image }} />
                    </View>
                    <View style={{ marginLeft: 8 }}>
                        <Text style={{ fontSize: 13, fontWeight: '600', maxWidth: width * 0.45 }}>{product.name}</Text>
                        <Text style={{ fontSize: 12, marginTop: 3, color: '#848897', fontWeight: '600' }}>{product.miktar}</Text>
                        <Text style={{ color: '#5D3EBD', fontWeight: 'bold', marginTop: 6, fontSize: 15 }}> ₺{product.fiyat}</Text>
                    </View>
                </View>
                <View style={{ shadowOpacity: 0.4, shadowRadius: 10, shadowColor: 'gray', flexDirection: 'row', width: width * 0.21, borderColor: 'lightgrey', borderWidth: 0.5, height: height * 0.037, borderRadius: 10, justifyContent: 'space-around', alignItems: 'center' }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => removeFromCart(product)}>
                            <Text>-</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#5D3EBD', height: height * 0.037, justifyContent: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>{quantity}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text>+</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (product: Product) =>
            dispatch(actions.removeFromCart(product))
    }
}

export default connect(null, mapDispatchToProps)(index)
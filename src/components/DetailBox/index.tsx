import React from 'react'
import { View, Text } from 'react-native'

type DetailBoxProps = {
    price: number;
    name: string;
    quantity: string;
}
const index = ({ price, name, quantity }: DetailBoxProps) => {
    return (
        <View style={{ width: '100%', backgroundColor: 'white', alignItems:'center' }}>
            <Text style={{fontWeight:'bold', fontSize:20, color:'#5D3EBD', marginTop:12}}>
                ₺{price}
            </Text>
            <Text style={{fontWeight:'600', fontSize:15, marginTop:10}}>
                {name}
            </Text>
            <Text style={{color:'#848897', fontSize:15, fontWeight:'600', marginTop:6, paddingBottom:15}}>
                {quantity}
            </Text>
        </View>
    )
}

export default index
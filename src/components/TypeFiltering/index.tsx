import React, { useState } from 'react'
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('window')

const TypeBox=({setCat,item, active}:{item:string, active:string, setCat:any}) => {
    return ( 
        <TouchableOpacity onPress={() => setCat(item)} style={[{ flexDirection:'row',alignItems:'center',paddingHorizontal:10, marginRight:12, borderRadius:6, height:height*0.045}, item==active ? {backgroundColor:'#5C3EBC'} : {borderColor:'#F0EFF7', borderWidth:1.5, borderRadius:10}]}>
            <Text style={[{fontSize:12, color:'#7849F7', fontWeight:'600'}, item==active ? {color:"white"}: {}]}>{item}</Text>
        </TouchableOpacity>
    )
}
const index = () => {
    const [category,setCategory]=useState<String>("Birlikte İyi Gider")
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            bounces={true}
            horizontal={true}
            style={{ width: '100%', backgroundColor: 'white', height: height * 0.072, flexDirection:'row', paddingVertical:height*0.010, paddingHorizontal:12, borderBottomColor:'lightgrey', borderBottomWidth:1}}>

             {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map((item) => (
                <TypeBox setCat={setCategory} item={item} active={category}/>
             ))}
        </ScrollView>
    )
}

export default index
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


const index = () => {
    const [details, setDetails] = useState<string[]>([
        "Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti",
        "İçindekiler",
        "Besin Değerleri",
        "Kullanım",
        "Ek Bilgiler",
    ])

    const TextComponent = ({detail,index}:{detail:string, index:number}) => {
        return(
            <View style={{paddingVertical:10,flexDirection:'row',alignItems:'center', justifyContent:'space-between', paddingHorizontal:10, borderBottomWidth:index===details.length-1 ? 0: 0.7, borderBottomColor:'lightgray'}}>
                <Text style={{color:index ===0 ? '#4E4E4E' :'#687482', fontSize:index===0 ?12 : 13, fontWeight:index===0 ? '400': '500'}}>{detail}</Text>
            {index!=0 &&  <AntDesign name="down" size={20} color="#687482" />}
            </View>
        )
    }
    return (
        <View style={{backgroundColor:'white', paddingHorizontal:15, paddingVertical:5}}>
        {details.map((item, index) => (
            <TextComponent key={index} index={index} detail={item}/>
        ))}
        </View>
    )
}

export default index
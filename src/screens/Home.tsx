import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
//Navigation

import {NativeStackScreenProps}  from "@react-navigation/native-stack"

import {RootStackParamList} from  '../App'

type HomeProps = NativeStackScreenProps<RootStackParamList,'Home'> 
const Home = ({navigation}:HomeProps)=>{

    return (
        <View  style={styles.container}>
            <Text  style={styles.smallText}>Home Screen
            </Text>
            <Button
            title="Go to Details"
            //onPress={()=> navigation.navigate("Details",{
              //  productId :"86"
            // })}
           // onPress={() => navigation.navigate("Details")}

           onPress={() => navigation.push('Details',{
            productId:"86"
           })} 
         />
        </View>
    )
}





export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:"rgba(42, 230, 107, 0.87)"
    },
    smallText:{
        color:"#000000",
        marginBottom:50,
        fontSize:24
    }
})
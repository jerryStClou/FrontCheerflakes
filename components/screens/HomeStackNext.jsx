import React, {useState} from 'react';
import {View,ImageBackground,Image,StyleSheet,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-web';


const HomeStackNext = ({navigation})=>{
    const [buttonPressed, setButtonPressed] = useState();
 return(
    <ImageBackground 
      style={styles.containerHomeStackNext}
      source={require('../../assets/images/bg-cheerflakes.png')}
    >
        <Image
            source={require('../../assets/imagesSvg/WINEGAP_VisitCard2 1.svg')}
            style={styles.imageHomeStackNextStyle}
        />
        <TouchableOpacity
          style={styles.boutonHomeStackNextStyle}
          onPress={()=>{
            // setButtonPressed("S'inscrire");
            navigation.navigate("Bienvenue")
          }}
        >
            <Text style={styles.textHomeStackNextStyle}>S'inscrire</Text>
        </TouchableOpacity>

        
        <TouchableOpacity
          style={styles.boutonHomeStackNextStyle2}
        >
            <Text style={styles.textHomeStackNextStyle}>Se connecter</Text>
        </TouchableOpacity>
    </ImageBackground>
 )
}
export default HomeStackNext;

const styles = StyleSheet.create({
    containerHomeStackNext:{
        width:"100vw",
        height:"100vh"
    },
    viewHomeStackNextStyle:{
        
    },
    imageHomeStackNextStyle:{
        width:300,
        height:102,
        // backgroundColor:"purple",
        marginTop:39,
        marginLeft:30
    },
    boutonHomeStackNextStyle:{
        width:331,
        height:56,
        marginTop:520,
        marginLeft:30,
        backgroundColor:"#D2C2FF",
        borderRadius:50

    },
    textHomeStackNextStyle:{
        color:"#0019A7",
        fontFamily:"Comfortaa",
        margin:"auto",
        fontSize:"1.5em"
    },
    boutonHomeStackNextStyle2:{
        width:331,
        height:56,
        marginTop:25,
        marginLeft:30,
        backgroundColor:"white",
        borderRadius:50
    }
})
import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,StyleSheet
} from 'react-native';
import Styles from '../../../assets/style/Styles';

const Prenium = ({navigation})=>{
    return(
        <ImageBackground  
        style={styles.containerPrenium}
        source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
        <View  style={styles.lignePreniumStyle}></View>

            <View style={styles.viewPreniumStyle}>
                <Text style={styles.textPreniumStyle}>ABONNEMENT PREMIUM</Text>
            </View>
            <View style={styles.viewPreniumStyle2}>
                <Text style={styles.textPreniumStyle2}>Xavier</Text>
            </View>
            <View style={styles.viewPreniumStyle3}>
                <Text style={styles.textPreniumStyle3}>ID.20230718.48</Text>
            </View>
            <View style={styles.viewPreniumStyle4}>
                <Text style={styles.textPreniumStyle4}>Découvrez nos offres !</Text>
            </View>
            <View style={styles.viewPreniumStyle7}>
                <TouchableOpacity style={styles.touchePreniumStyle}>
                  <Text style={styles.textPreniumStyle5}>26,99€</Text>
                  <Text style={styles.textPreniumStyle6}>1 mois</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={styles.viewPreniumStyle6}>

                    <View style={styles.touchePreniumStyle2}>
                      <Text style={styles.textPreniumStyle7}>24,99€</Text>
                      <Text style={styles.textPreniumStyle8}>6 mois</Text>
                      <Text style={styles.textPreniumStyle8}>Soit -2,00€/mois</Text>
                    </View>

                    <View style={styles.viewPreniumStyle5}>
                      <Text style={styles.textPreniumStyle9}>Économisez</Text>
                      <Text style={styles.textPreniumStyle9}>33%</Text>
                    </View>  
                  </View>
                  
                </TouchableOpacity>
                
            </View>
            <View style={styles.viewPreniumStyle8}>
                    <Text style={styles.textPreniumStyle10}>Sélectionnez une offre pour obtenir votre</Text>
                    <Text style={styles.textPreniumStyle10}>abonnement Prenium</Text>
            </View>
            <View style={styles.viewPreniumStyle9}>
                <Text style={styles.textPreniumStyle11}>Voir lese condition d'abonnement Premium</Text>
            </View>

            <TouchableOpacity  
            onPress={()=>{navigation.navigate("votre compte")}}
            style={styles.continuerPreniumStyle}>
                <Text style={styles.textPreniumStyle7}>Continuer</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}
export default Prenium;

const styles = StyleSheet.create({
    
    containerPrenium:{
        width:"100vw",
        height:"100vh",
        },
        lignePreniumStyle:{
          width:"100%",
          height:"1px",
          backgroundColor:"black",
          top:50
      },
    viewPreniumStyle:{
        marginTop:122,
        marginBottom:35,
        display:"flex",
        alignItems:"center"
    },
    textPreniumStyle:{
        fontSize:24,
        fontFamily:"Comfortaa"
        
    },
    viewPreniumStyle2:{
        marginLeft:46,
        marginBottom:22,
        width:300,
        height:52,
        borderColor:"black",
        borderWidth:"1px",
        borderStyle:"solid",
        borderRadius:50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    textPreniumStyle2:{
        fontSize:18,
        color:"#696969"
    },
    viewPreniumStyle3:{
        marginTop:25,
        marginLeft:67,
        width:257

    },
    textPreniumStyle3:{
        fontSize:18,
        color:"#0019A7",
        margin:"auto"
    },
    viewPreniumStyle4:{
        marginLeft:40,
        marginTop:17,
        width:310,
        display:"flex",
        alignItems:"center"
    },
    viewPreniumStyle7:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:332,
        marginLeft:24,
        marginTop:47
    },
    textPreniumStyle4:{
        fontSize:24,
        fontFamily:"Comfortaa",

    },
    touchePreniumStyle:{
        width:154,
        height:188,
        borderRadius:48,
        borderWidth:"3px",
        borderColor:"black",
        borderStyle:"solid",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    textPreniumStyle5:{
        fontSize:32,
        fontWeight:"bold",
        borderBottomColor:"black",
        borderBottomWidth:2,
        fontFamily:"Gilroy"
        
    },
    textPreniumStyle6:{
        fontSize:16,
        fontWeight:"bold",
        fontFamily:"Gilroy"
    },
    viewPreniumStyle6:{

    },
    touchePreniumStyle2:{
        width:154,
        height:188,
        borderRadius:48,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"black"
    },
    textPreniumStyle7:{
        fontSize:32,
        fontWeight:"bold",
        fontFamily:"Gilroy",
        borderBottomColor:"#D2C2FF",
        borderBottomWidth:"2px",
        color:"#D2C2FF"
    },
    textPreniumStyle8:{
        fontSize:16,
        fontWeight:"bold",
        fontFamily:"Gilroy",
        color:"#D2C2FF"
    },
    viewPreniumStyle5:{
        width:95,
        height:90,
        borderRadius:50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        position:"relative",
        bottom:55,
        left:59

    },
    textPreniumStyle9:{
        color:"#0019A7",
        fontSize:"15px",
        fontFamily:"Gilroy",
        fontWeight:"bold"
    },
    viewPreniumStyle8:{
        marginLeft:30
    },
    textPreniumStyle10:{
        fontSize:12,
        fontFamily:"Comfortaa"
    },
    viewPreniumStyle9:{
        marginLeft:50,
        marginTop:30,
        width:291,
        display:"flex",
        alignItems:"center"
    },
    textPreniumStyle11:{

        fontSize:12,
        textDecorationLine:"underline",
        fontFamily:"Comfortaa"
    },
    continuerPreniumStyle:{
        marginTop:26,
        marginLeft:36,
        width:331,
        height:56,
        borderRadius:50,
        backgroundColor:"white",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    textPreniumStyle7:{
        fontSize:18,
        color:"rgba(0, 25, 167, 0.97)"
    }
})
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,StyleSheet
} from 'react-native';
import Styles from '../../../assets/style/Styles';
// import { BtnNext } from '../../composants/BtnNext';

const CharteEngagement = ({navigation})=>{
    
    return(
        <ImageBackground  
         style={styles.containerCharteEngagement}
         source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
        <View  style={styles.ligneCharteEngagementStyle}></View>
    
           
        <View style={styles.viewObjectifsStyle}>
         <Text style={styles.textObjectifsStyle}>CHARTE</Text>
         <Text style={styles.textObjectifsStyle}>D'ENGAGEMENT</Text>
        </View>
        <View  style={styles.viewObjectifsStyle2}>

            <View style={styles.viewObjectifsStyle3}>
              <Text style={styles.textObjectifsStyle2}>
                Respect mutuel
              </Text>
            </View>
            
            <View style={styles.viewObjectifsStyle4}>
              <Text style={styles.textObjectifsStyle3}>
                C'est la base d'une vraie histoire alors priviligiez les échanges respectueux dès le début.
              </Text>
            </View>

            
            <View style={styles.viewObjectifsStyle3}>
              <Text style={styles.textObjectifsStyle2}>
                Soyez sincère
              </Text>
            </View>
            
            <View style={styles.viewObjectifsStyle4}>
              <Text style={styles.textObjectifsStyle3}>
                Un profil(photos, d'âge,infos) qui Vous
                reflète vraiment sera toujours plus séduisant.
              </Text>
            </View>

            
            <View style={styles.viewObjectifsStyle3}>
              <Text style={styles.textObjectifsStyle2}>
                Restez prudent
              </Text>
            </View>
            
            <View style={styles.viewObjectifsStyle4}>
              <Text style={styles.textObjectifsStyle3}>
                Échanger via les messages, les appels vidéo
                et audio avant de donner vos infos personnelles.
              </Text>
            </View>
        </View>
        
        <TouchableOpacity style={styles.accepteObjectifsStyle}
              onPress={() => {navigation.navigate("felicitaion")}}
            >
         <Text style={styles.textObjectifsStyle5}>J'accepte</Text>
        </TouchableOpacity>

        </ImageBackground>
    )
}



export default CharteEngagement

const styles = StyleSheet.create({
    
    containerCharteEngagement:{
        width:"100vw",
        height:"100vh",
        },
        ligneCharteEngagementStyle:{
          width:"100%",
          height:"1px",
          backgroundColor:"black",
          top:50
      },
        viewObjectifsStyle:{
            marginTop:120,
            marginBottom:42,
            marginLeft:47,
            width:296
        },
        textObjectifsStyle:{
            fontSize:24,
            margin:"auto",
            fontWeight:600,
            fontFamily:"Comfortaa"
        },
        viewObjectifsStyle2:{
            width:290,
            height:477,
            borderRightColor:"black",
            borderRightWidth:"1px",
            marginLeft:45,
        },
        viewObjectifsStyle3:{
            width:284
        },
        textObjectifsStyle2:{
            fontSize:18,
            fontWeight:"bold"
        },
        viewObjectifsStyle4:{
            width:271,
            height:69
        },
        textObjectifsStyle3:{
            fontSize:16
        },
        accepteObjectifsStyle:{
            marginTop:42,
            marginLeft:36,
            width:331,
            height:56,
            borderRadius:50,
            backgroundColor:"#0019A7",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        },
        textObjectifsStyle5:{
            fontSize:18,
            color:"white"
        }
    })
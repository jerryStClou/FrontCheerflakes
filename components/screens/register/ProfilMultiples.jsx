import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Switch,
  TouchableOpacity,StyleSheet, Modal, ScrollView,
  
} from 'react-native';
import Styles from '../../../assets/style/Styles';
// import { BtnNext } from '../../composants/BtnNext';

const ProfilMultiples = ({navigation}) =>{
    const [accepter,setAccepter] = useState(false);
    return(
        <ImageBackground  
        style={styles.containerProfilMultiples}
        source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
        <View  style={styles.ligneProfilMultiplesStyle}></View>

            <View style={styles.viewProfilMultiplesStyle}>
                <Text style={styles.textProfilMultiplesStyle}>PROFIL MULTIPLÉ</Text>
            </View>
            <View style={styles.viewProfilMultiplesStyle2}>
                <Text style={styles.textProfilMultiplesStyle2}>Xavier</Text>
            </View>
            <View style={styles.viewProfilMultiplesStyle3}>
                <Text style={styles.textProfilMultiplesStyle3}>ID.20230718.48</Text>
            </View>
            <View style={styles.viewProfilMultiplesStyle4}>
                <Text style={styles.textProfilMultiplesStyle4}>
                    Grâce au profil multiplié, vous bénéficiez gratuitement d’une visibilité de votre profil auprès de votre communauté d’affinité.
                </Text>
            </View>
            <View style={styles.viewProfilMultiplesStyle5}>
                <Image style={styles.imageProfilMultiplesStyle}
                  source={require("../../../assets/imagesSvg/gopride.svg")}
                />
                <Image style={styles.imageProfilMultiplesStyle}
                  source={require("../../../assets/imagesSvg/WINEGAP_VisitCard2 2.svg")}
                  />
            </View>

            
            <View style={styles.viewProfilMultiplesStyle6}>
                <Image style={styles.imageProfilMultiplesStyle}
                  source={require("../../../assets/imagesSvg/White on Black 1.svg")}
                />
                <Image style={styles.imageProfilMultiplesStyle}
                  source={require("../../../assets/imagesSvg/steekme.svg")}
                  />
            </View>

            <TouchableOpacity 
              onPress={()=>{
                setAccepter(!accepter)
              }}
              style={styles.viewProfilMultiplesStyle7}
            >
            <Image
               source={accepter==false
                ? require('../../../assets/images/radio_unselected.png')
                : require('../../../assets/images/radio_selected.png')

            }
               style={styles.ImageProfilMultiplesStyle2}
            />
            <Text style={styles.textProfilMultiplesStyle5}>J’accepte le multi-profil GRATUIT.</Text>
            </TouchableOpacity>

            <View style={styles.viewProfilMultiplesStyle8}>
                <Text style={styles.textProfilMultiplesStyle6}>Voir les profils dans les paramètres plus tard</Text>
            </View>
            <TouchableOpacity 
            onPress={()=>{navigation.navigate("votre abonnement premium")}}
            style={styles.continuerProfilMultiplesStyle}
            >
                <Text style={styles.textProfilMultiplesStyle7}>Continuer</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}
export default ProfilMultiples;

const styles = StyleSheet.create({
    
    containerProfilMultiples:{
        width:"100vw",
        height:"100vh",
        },
        ligneProfilMultiplesStyle:{
          width:"100%",
          height:"1px",
          backgroundColor:"black",
          top:50
      },
    viewProfilMultiplesStyle:{
        width:390,
        height:34,
        marginTop:122,
        marginBottom:35,
        display:"flex",
        alignItems:"center",
        // backgroundColor:"white"
    },
    textProfilMultiplesStyle:{
        fontSize:24,
        fontWeight:500
    },
    viewProfilMultiplesStyle2:{
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
    textProfilMultiplesStyle2:{
        fontSize:18,
        color:"#696969"
    },
    viewProfilMultiplesStyle3:{
        marginTop:25,
        marginLeft:67,
        width:257
    },
    textProfilMultiplesStyle3:{
        fontSize:18,
        color:"#0019A7",
        margin:"auto"
    },
    viewProfilMultiplesStyle4:{
        width:318,
        height:106,
        marginLeft:38,
        marginTop:14
    },
    textProfilMultiplesStyle4:{
        fontSize:15
    },
    viewProfilMultiplesStyle5:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        width:"265px",
        // backgroundColor:"red",
        marginLeft:63
    },
    imageProfilMultiplesStyle:{
        width:113,
        height:57
    },
    viewProfilMultiplesStyle6:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        width:"265px",
        // backgroundColor:"red",
        marginLeft:63,
        marginTop:39
    },
    
    viewProfilMultiplesStyle7:{
        width:323,
        height:25,
        marginLeft:36,
        marginTop:50,
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    ImageProfilMultiplesStyle2:{
        width:25,
        height:25
    },
    textProfilMultiplesStyle5:{
        fontSize:12,
        marginLeft:7
    },
    viewProfilMultiplesStyle8:{
       width:291,
       height:15,
       marginLeft:50,
       marginTop:31
    },
    textProfilMultiplesStyle6:{
        fontSize:12,
    },
    continuerProfilMultiplesStyle:{
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
    textProfilMultiplesStyle7:{
        fontSize:18,
        color:"rgba(0, 25, 167, 0.97)"
    }
    })
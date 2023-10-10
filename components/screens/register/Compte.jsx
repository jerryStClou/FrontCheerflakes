import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Switch,
  TouchableOpacity,StyleSheet, Modal, ScrollView,FlatList
  
} from 'react-native';
import Styles from '../../../assets/style/Styles';
// import { BtnNext } from '../../composants/BtnNext';

const Compte = ({navigation})=>{
    const data = 
    [
        'au moins une lettre majuscule',
        'au moins une lettre minuscule', 
        'au moins un chiffre', 
        'au moins un caractère spécial (&#@%?!)',
        'au moins huit (8) caractères'
    ];
    const [modalVisible, setModalVisible] = useState(false);
    return(
    <ImageBackground  
    style={styles.containerCompte}
    source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
    >
    <View  style={styles.ligneCompteStyle}></View>

        
        <View style={styles.viewCompteStyle}>
                <Text style={styles.textCompteStyle}>MON COMPTE</Text>
        </View>
        <TouchableOpacity 
        style={styles.viewCompteStyle2}
        onPress={() => {setModalVisible(!modalVisible)}}
        >
            <Text style={styles.textCompteStyle2}>Votre email</Text>
        </TouchableOpacity>
        
        <View style={styles.viewCompteStyle3}>
            <Text style={styles.textCompteStyle3}>Allez dans votre boîte de messagerie pour </Text>
            <Text style={styles.textCompteStyle3}>confirmer votre e-mail.</Text>
        </View>
        
        <View style={styles.viewCompteStyle4}>
            <Text style={styles.textCompteStyle2}>Mot de passe</Text>
        </View>
        
        <View style={styles.viewCompteStyle5}>
            <Text style={styles.textCompteStyle3}>
                Pour garantir la sécurité de votre compte,  votre mot de passe doit contenir :
            </Text>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                  <View>
                    <Text style={styles.textCompteStyle3}>- {item}</Text>
                  </View>
                )}
            />
        </View>
        
        <TouchableOpacity style={styles.viewCompteStyle6}
        onPress={()=>{setModalVisible(!modalVisible)}}
        >
            <Text style={styles.textCompteStyle3}>Choix unique</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.continuerCompteStyle}
              onPress={() => {navigation.navigate("ajouter une photo")}}
        >
            <Text style={styles.textCompteStyle4}>Valider</Text>
        </TouchableOpacity>
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            requestLocationPermission, setModalVisible(!modalVisible);
          }}
        >
            <View style={styles.viewCompteStyle8}>
                <Text style={styles.textCompteStyle6}>Prouver nous que vous n'êtes pas</Text>
                <Text style={styles.textCompteStyle6}>un robot.</Text>
            </View>
            <View style={styles.centeredCompteView}>
               <ScrollView style={styles.ScrollViewCompteStyle}>
                 <View style={styles.viewCompteStyle7}>
                    <Text style={styles.textCompteStyle5}>CAPTCHA</Text>
                 </View>
                 <TouchableOpacity
                   onPress={()=>{setModalVisible(!modalVisible)}}
                 >
                   <Image
                      style={styles.imageCompteStyle}
                      source={require("../../../assets/imagesSvg/Capture d’écran 2023-03-17 à 10.10 1.svg")}
                   />
                 </TouchableOpacity>
               </ScrollView>
               
            </View>
        </Modal>

    </ImageBackground>
    )

}
export default Compte;

const styles = StyleSheet.create({
    
    containerCompte:{
        width:"100vw",
        height:"100vh",
        },
        ligneCompteStyle:{
          width:"100%",
          height:"1px",
          backgroundColor:"black",
          top:50
      },
    viewCompteStyle:{
        marginTop:122,
        marginBottom:81,
        display:"flex",
        alignItems:"center"
    },
    textCompteStyle:{
        fontSize:24,
        fontFamily:"Comfortaa"
        
    },
    viewCompteStyle2:{
        marginLeft:46,
        marginBottom:17,
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
    textCompteStyle2:{
        fontSize:18,
        color:"#696969"
    },
    viewCompteStyle3:{
        marginLeft:50,
        marginBottom:28
    },
    textCompteStyle3:{
        fontSize:12,
        fontFamily:"Comfortaa"
    },
    viewCompteStyle4:{
        marginLeft:46,
        marginBottom:17,
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
    viewCompteStyle5:{
        width:300,
        height:171,
        marginLeft:45
    },
    viewCompteStyle6:{
        marginLeft:55,
        marginTop:103
    },
    continuerCompteStyle:{
        marginTop:51,
        marginLeft:36,
        width:331,
        height:56,
        borderRadius:50,
        backgroundColor:"white",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    textCompteStyle4:{
        fontSize:18,
        color:"rgba(0, 25, 167, 0.97)"
    },
    viewCompteStyle8:{
        width:318,
        height:38,
        marginLeft:36,
        marginBottom:19,
        top:170
    },
    textCompteStyle6:{
        fontSize:15,
        fontFamily:"Comfortaa"
    },
    centeredCompteView:{
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        // backgroundColor:"white",
        width:"100%",
        top:170
    },
    ScrollViewCompteStyle:{
        top:"20",
        width:400
    },
    viewCompteStyle7:{
        marginTop:57,
        marginLeft:47,
        width:296,
        height:48
    },
    textCompteStyle5:{
        color:"#0019A7",
        fontFamily:"Comfortaa",
        fontSize:24
    },
    imageCompteStyle:{
        width:204,
        height:308,
        marginTop:40,
        margin:"auto"
    }
   
    })
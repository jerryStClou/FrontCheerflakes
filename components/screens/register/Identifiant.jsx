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
import { TextInput } from 'react-native-web';
// import { BtnNext } from '../../composants/BtnNext';

const Identifiant = ({navigation})=>{
    const [modalVisible, setModalVisible] = useState(false);   
    const [modalVisible2, setModalVisible2] = useState(false);    
    const [prenom, setPrenom] = useState("");
    const [pseudo, setPseudo] = useState("");


    return(
        <ImageBackground  
         style={styles.containerIdentifiant}
         source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
        <View  style={styles.ligneIdentifiantStyle}></View>

        
        <View style={styles.viewIdentifiantStyle}>
         <Text style={styles.textIdentifiantStyle}>IDENTIFIANT</Text>
        </View>
        <View style={styles.viewIdentifiantStyle2}>
            <Text style={styles.textIdentifiantStyle2}>
                Sur CHEERFLAKES votre vraie prénom est visible de tous les membres
              sauf si vous préférez afficher votre pseudo. Les modérateurs
              passent tous les pseudos en revue.
            </Text>
        </View>
        <View style={styles.viewIdentifiantStyle3}>
            <Text style={styles.textIdentifiantStyle3}>Règle des pseudos</Text>
        </View>
        <View style={styles.viewIdentifiantStyle4}>
            <Text style={styles.textIdentifiantStyle4}>Afficher mon pseudo (par défaut)</Text>
            <Switch
                trackColor={{false: '#BEC8FF', true: '#17ff58'}}
                // thumbColor={isEnabled ? '#BEC8FF' : '#f4f3f4'}
                ios_backgroundColor="#f4f3f4"
                // onValueChange={toggleSwitch}
                // value={isEnabled}
                style={styles.switchIdentifiantStyle}
              />
        </View>
        
        <TouchableOpacity 
        onPress={()=>{setModalVisible(!modalVisible)}}
        style={styles.boutonIdentifiantStyle2}
        >
            <Text style={styles.textIdentifiantStyle5}>Votre prénom</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>{setModalVisible2(!modalVisible2)}}
        style={styles.boutonIdentifiantStyle2}
        >
            <Text style={styles.textIdentifiantStyle5}>Votre pseudo</Text>
        </TouchableOpacity>
        
        <View style={styles.boutonIdentifiantStyle3}>
            <Text style={styles.textIdentifiantStyle6}>ID.20230718.48</Text>
        </View>

            <TouchableOpacity style={styles.continuerIdentifiantStyle}
              onPress={() => {navigation.navigate("votre prénom")}}
            >
                <Text style={styles.textIdentifiantStyle7}>Continuer</Text>
            </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            requestLocationPermission, setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredIdentifiantView}>
          <ScrollView style={styles.ScrollViewIdentifiantStyle}>
            <Image
                style={styles.imageIdentifiantStyle}
                source={require("../../../assets/imagesSvg/avertissement 1.svg")}
            />
            <View style={styles.viewIdentifiantStyle5}>
                <Text style={styles.textIdentifiantStyle8}>Règles concernant le pseudo</Text>
            </View>

            <View style={styles.viewIdentifiantStyle6}>
               <Text style={styles.textIdentifiantStyle9}>
                Pour vérifier que votre pseudo soit bien approuvé :
                </Text>
               <View style={styles.listIdentifiantStyle}>
                <View style={styles.pointIdentifiantStyle}>
                </View>
                <View>
                  <Text style={styles.textIdentifiantStyle9}>n’incluez pas votre nom complet</Text>
                </View>
                </View>

               <View style={styles.listIdentifiantStyle}>
                <View style={styles.pointIdentifiantStyle}>
                </View>
                <View>
                  <Text style={styles.textIdentifiantStyle9}>n’incluez pas vos coordonnées</Text>
                </View>
                </View>
                
               <View style={styles.listIdentifiantStyle}>
                <View style={styles.pointIdentifiantStyle}>
                </View>
                <View>
                  <Text style={styles.textIdentifiantStyle9}>n’incluez aucune remarque</Text>
                </View>
                </View>
                <Text style={styles.textIdentifiantStyle9}> sexuelle explicite ou vulgaire</Text>
            </View>

            <TouchableOpacity 
            onPress={()=>{setModalVisible(false)}}
            style={styles.comprisIdentifiantStyle}
            >
                <Text style={styles.textIdentifiantStyle10}>Compris</Text>
            </TouchableOpacity>
        </ScrollView>
        </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            requestLocationPermission, setModalVisible2(!modalVisible2);
          }}
        >
            <View style={styles.centeredIdentifiantView}>
                <ScrollView>
                    
                <TextInput
                 style={styles.inputIdentifiantStyle}
                 keyboardType="email-address"
                 placeholder="Entrez votre prenom"
                 placeholderTextColor="black"
                 onChangeText={prenom => setPrenom(prenom)}
                 value={prenom}
                 />
                </ScrollView>
            </View>
        </Modal>

        </ImageBackground>
    )
}    


export default Identifiant

const styles = StyleSheet.create({
    
    containerIdentifiant:{
        width:"100vw",
        height:"100vh",
        },
        ligneIdentifiantStyle:{
          width:"100%",
          height:"1px",
          backgroundColor:"black",
          top:50
      },
        viewIdentifiantStyle:{
            marginTop:122,
        },
        textIdentifiantStyle:{
            fontSize:24,
            fontWeight:"bold",
            margin:"auto"
        },
        viewIdentifiantStyle2:{
            marginTop:72,
            marginLeft:26,
            width:339
        },
        textIdentifiantStyle2:{
            fontSize:15
        },
        viewIdentifiantStyle3:{
            marginLeft:36
        },
        textIdentifiantStyle3:{
            textDecorationLine:"underline",
            fontSize:15
        },
        viewIdentifiantStyle4:{
            marginTop:38,
            marginLeft:45,
            marginBottom:25,
            display:"flex",
            flexDirection:"row"
        },
        textIdentifiantStyle4:{
            fontSize:15
        },
        switchIdentifiantStyle:{
            width:33,
            height:20,
            marginLeft:15
        },
        boutonIdentifiantStyle2:{
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
        textIdentifiantStyle5:{
            fontSize:18,
            color:"#696969"
        },
        boutonIdentifiantStyle3:{
            marginTop:45,
            marginLeft:67,
            width:257
        },
        textIdentifiantStyle6:{
            fontSize:18,
            color:"#0019A7",
            margin:"auto"
            
        },
        continuerIdentifiantStyle:{
            marginTop:95,
            marginLeft:36,
            width:331,
            height:56,
            borderRadius:50,
            backgroundColor:"white",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        },
        
    textIdentifiantStyle7:{
        fontSize:18,
        color:"rgba(0, 25, 167, 0.97)"
    },
    centeredIdentifiantView: {
      flex: 1,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      // backgroundColor:"white",
      width:"100%",
      top:211
    },
    ScrollViewIdentifiantStyle:{
      top:"20",
      width:400
    },
  
    imageIdentifiantStyle:{
        width:70,
        height:70,
        marginLeft:160,
        marginTop:21
    },
    viewIdentifiantStyle5:{
        marginLeft:48,
        width:298,
        height:52
    },
    textIdentifiantStyle8:{
        fontSize:20,
        color:"#0019A7",
        fontWeight:"bold"
    },
    viewIdentifiantStyle6:{
        width:321,
        height:224,
        marginLeft:35,
        marginTop:22,
    },
    textIdentifiantStyle9:{
        fontSize:16,
        color:"#0019A7",
    },
    listIdentifiantStyle:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        // backgroundColor:"grey"
    },
    pointIdentifiantStyle:{
        width:4,
        height:4,
        borderRadius:50,
        backgroundColor:"#0019A7",
        marginTop:5,
        marginRight:8
    },
    comprisIdentifiantStyle:{
        marginTop:68,
        marginLeft:121,
        width:148,
        height:56,
        borderRadius:50,
        backgroundColor:"#D2C2FF",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    textIdentifiantStyle10:{
        fontSize:18,
        color:"#0019A7"
    },
    inputIdentifiantStyle:{
        marginLeft:48,
        marginTop:52,
        width:293,
        height:52
    }
    })
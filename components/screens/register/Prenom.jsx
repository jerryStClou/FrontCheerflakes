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

const Prenom = ({navigation}) =>{
    const [modalVisible, setModalVisible] = useState(true); 
    return(
        <ImageBackground  
        style={styles.containerPrenom}
        source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
        <View  style={styles.lignePrenomtStyle}></View>

            <View style={styles.viewPrenomStyle}>
                <Text style={styles.textPrenomStyle}>PRENOM</Text>
            </View>
            
        <View style={styles.boutonPrenomStyle}>
            <Text style={styles.textPrenomStyle2}>Xavier</Text>
        </View>

        
        <View style={styles.boutonPrenomStyle2}>
            <Text style={styles.textPrenomStyle3}>ID.20230718.48</Text>
        </View>
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            requestLocationPermission, setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredPrenomView}>
          <ScrollView style={styles.ScrollViewPrenomStyle}>
            <Image
                style={styles.imagePrenomStyle}
                source={require("../../../assets/imagesSvg/avertissement 1.svg")}
            />
            <View style={styles.viewPrenomStyle2}>
                <Text style={styles.textPrenomStyle4}>Vous vous appeller Xavier ?</Text>
            </View>

            <View style={styles.viewPrenomStyle3}>
               <Text style={styles.textPrenomStyle5}>
               Vérifiez bien votre prénom,  
               </Text>
               <Text style={styles.textPrenomStyle5}>
                 il ne pourra plus être
               </Text>
               <Text style={styles.textPrenomStyle5}>
                  modifié par la suite.
               </Text>
            </View>
           <View style={styles.lesBoutonsPrenomStyle}>
           <TouchableOpacity 
            onPress={()=>{setModalVisible(!modalVisible)}}
            style={styles.modifierPrenomStyle}
            >
                <Text style={styles.textPrenomStyle6}>Modifier</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>{navigation.navigate("votre profil multiple")}}
            style={styles.accepterPrenomStyle}
            >
                <Text style={styles.textPrenomStyle6}>Accepter</Text>
            </TouchableOpacity>
           </View>
            

        </ScrollView>
        </View>
        </Modal>
        </ImageBackground>
    )

}

export default Prenom;


const styles = StyleSheet.create({
    
    containerPrenom:{
        width:"100vw",
        height:"100vh",
        },
        lignePrenomtStyle:{
          width:"100%",
          height:"1px",
          backgroundColor:"black",
          top:50
      },
    viewPrenomStyle:{
        marginTop:122,
    },
    textPrenomStyle:{
        fontSize:24,
        fontWeight:"bold",
        margin:"auto"
    },
    boutonPrenomStyle:{
        marginLeft:46,
        marginBottom:22,
        marginTop:60,
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
    textPrenomStyle2:{
        fontSize:18,
    },
    boutonPrenomStyle2:{
        marginLeft:67,
        width:257
    },
    textPrenomStyle3:{
        fontSize:18,
        color:"#0019A7",
        margin:"auto"
        
    },
    centeredPrenomView:{
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        // backgroundColor:"white",
        width:"100%",
        top:372
    },
    ScrollViewPrenomStyle:{
        top:"20",
        width:400
    },
    imagePrenomStyle:{
        width:70,
        height:70,
        marginLeft:160,
        marginTop:21
    },
    viewPrenomStyle2:{
        marginLeft:48,
        marginTop:52,
        width:293,
        height:52,

    },
    textPrenomStyle4:{
        fontSize:20,
        color:"#0019A7",
        fontWeight:"bold",
    },
    viewPrenomStyle3:{
        width:293,
        height:70,
        marginLeft:48,
        display:"flex",
        alignItems:"center"
    },
    textPrenomStyle5:{
        fontSize:20,
        color:"#0019A7",
    },
    lesBoutonsPrenomStyle:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    modifierPrenomStyle:{
        width:159,
        height:56,
        borderRadius:50,
        borderColor:"#0019A7",
        borderWidth:"1px",
        borderStyle:"solid",
        backgroundColor:"white",
        marginLeft:24,
        marginTop:81,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"

    },
    textPrenomStyle6:{
        fontSize:18,
        color:"#0019A7"
    },
    accepterPrenomStyle:{
        width:148,
        height:56,
        borderRadius:50,
        backgroundColor:"#D2C2FF",
        marginLeft:24,
        marginTop:81,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"

    }
        
    })
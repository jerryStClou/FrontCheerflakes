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


const AjoutPhoto = ({navigation})=>{
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <ImageBackground  
        style={styles.containerAjoutPhoto}
        source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
        <View  style={styles.ligneAjoutPhotoStyle}></View>
    
            
        <View style={styles.viewAjoutPhotoStyle}>
                <Text style={styles.textAjoutPhotoStyle}>AJOUTEZ UNE PHOTO</Text>
        </View>

        <View style={styles.viewAjoutPhotoStyle2}>
                <Text style={styles.textAjoutPhotoStyle2}>Affichez votre lifestyle (6 photos publiques)</Text>
        </View>
        <View style={styles.viewAjoutPhotoStyle3}>
            <View style={styles.viewAjoutPhotoStyle4}/>
            <View style={styles.viewAjoutPhotoStyle5}/>
            <Image
              style={styles.imageAjoutPhotoStyle}
              source={require("../../../assets/imagesSvg/prefere 1.svg")}
            />

        </View>
        <TouchableOpacity style={styles.boutonAjoutPhotoStyle}>
            <View style={styles.viewAjoutPhotoStyle6}>
               <Image
                        source={require('../../../assets/imagesSvg/image 3.svg')}
                        style={styles.imageAjoutPhotoStyle2}
                />
            </View>
            <View style={styles.viewAjoutPhotoStyle7}>
               <Text style={styles.textAjoutPhotoStyle3}>Importer une image</Text>
            </View>
          </TouchableOpacity>

          
        <TouchableOpacity 
        style={styles.boutonAjoutPhotoStyle}
        onPress={() => {setModalVisible(!modalVisible)}}
        >
            <View style={styles.viewAjoutPhotoStyle6}>
               <Image
                        source={require('../../../assets/imagesSvg/image 4.svg')}
                        style={styles.imageAjoutPhotoStyle3}
                />
            </View>
            <View style={styles.viewAjoutPhotoStyle7}>
               <Text style={styles.textAjoutPhotoStyle3}>Prendre une photo</Text>
            </View>
          </TouchableOpacity>


          
        <TouchableOpacity 
        style={styles.boutonAjoutPhotoStyle}
        onPress={() => {setModalVisible(!modalVisible)}}
        >
            <View style={styles.viewAjoutPhotoStyle6}>
               <Image
                        source={require('../../../assets/imagesSvg/image 5.svg')}
                        style={styles.imageAjoutPhotoStyle4}
                />
            </View>
            <View style={styles.viewAjoutPhotoStyle7}>
               <Text style={styles.textAjoutPhotoStyle3}>Meta facebook</Text>
            </View>
            
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.viewAjoutPhotoStyle8}
              onPress={() => {navigation.navigate("empreinte vocal")}}
        >
               <Text style={styles.textAjoutPhotoStyle4}>Enregistrer plus tard </Text>
            </TouchableOpacity>
            
        <TouchableOpacity style={styles.continuerAjoutPhotoStyle}
              onPress={() => {setModalVisible(!modalVisible)}}
        >
            <Text style={styles.textAjoutPhotoStyle5}>Continuer</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            requestLocationPermission, setModalVisible(!modalVisible);
          }}
        >
            <View style={styles.centeredAjoutPhotoView}>
               <ScrollView style={styles.ScrollViewAjoutPhotoStyle}>
                  <Image
                    style={styles.imageAjoutPhotoStyle5}
                    source={require("../../../assets/imagesSvg/avertissement 2.svg")}
                  />
                  <View style={styles.viewAjoutPhotoStyle9}>
                    <Text style={styles.textAjoutPhotoStyle6}>À MONTRER</Text>
                    <Text style={styles.textAjoutPhotoStyle6}>SOUS RESERVE !</Text>

                 </View>
                 <View style={styles.viewAjoutPhotoStyle10}>
                    <Image
                    style={styles.imageAjoutPhotoStyle6}
                    source={require("../../../assets/imagesSvg/Capture d’écran 2023-03-21 à 12.42 2.svg")}
                    />
                    <Image
                    style={styles.imageAjoutPhotoStyle6}
                    source={require("../../../assets/imagesSvg/Capture d’écran 2023-03-21 à 12.42 4.svg")}
                    />
                    <Image
                    style={styles.imageAjoutPhotoStyle6}
                    source={require("../../../assets/imagesSvg/Capture d’écran 2023-03-21 à 12.42 3.svg")}
                    />
                 </View>
                 <View style={styles.viewAjoutPhotoStyle11}>
                   <Text style={styles.textAjoutPhotoStyle7}>
                       Les photos de dénudés ou de visages masqués peu reconnaissables ne sont pas autorisés sur votre profil public. Vous pouvez ajouter ces photos à votre dossier dédié et confidentiel plus tard.
                   </Text>
                 </View>
            <TouchableOpacity style={styles.continuerAjoutPhoto}
            onPress={()=>{setModalVisible(!modalVisible)}}
            >
                <Text style={styles.textAjoutPhoto8}>Continuer</Text>
            </TouchableOpacity>
               </ScrollView>
            </View>
            

        </Modal>

        </ImageBackground>
    )
}
export default AjoutPhoto;

const styles = StyleSheet.create({
    
    containerAjoutPhoto:{
       width:"100vw",
       height:"100vh",
    },
    ligneAjoutPhotoStyle:{
      width:"100%",
      height:"1px",
      backgroundColor:"black",
      top:50
  },
    viewAjoutPhotoStyle:{
     marginTop:122,
     marginBottom:24,
     display:"flex",
     alignItems:"center"
    },
    textAjoutPhotoStyle:{
     fontSize:24,
     fontFamily:"Comfortaa"
            
    },
    viewAjoutPhotoStyle2:{
        marginLeft:13,
        width:365,
        height:39,
        display:"flex",
        alignItems:"center"
    },
    textAjoutPhotoStyle2:{
        fontSize:16,
        fontFamily:"Comfortaa",

    },
    viewAjoutPhotoStyle3:{
        width:189,
        height:189,
        marginLeft:101,
        backgroundColor:"white",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    viewAjoutPhotoStyle4:{
        position:"absolute",
        height:261,
        width:2,
        backgroundColor:"#0019A7",
        transform: [{ rotate: '45deg' }],
    },
    viewAjoutPhotoStyle5:{
        position:"absolute",
        height:261,
        width:2,
        backgroundColor:"#0019A7",
        transform: [{ rotate: '-45deg' }],
    },
    imageAjoutPhotoStyle:{
        width:40,
        height:40
    },
    imageAjoutPhotoStyle2:{
        width:39,
        height:41,
    },
    boutonAjoutPhotoStyle:{
        width:"331px",
        height:"56px",
        backgroundColor:"black",
        borderRadius:50,
        marginTop:"3vh",
        marginLeft:"8vw",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    viewAjoutPhotoStyle6:{

    },
    viewAjoutPhotoStyle7:{
    marginLeft:"12px",
    marginRight:27,
    width:227,
    },
    textAjoutPhotoStyle3:{
    color:"white",
    fontSize:18,
    fontFamily:"Comfortaa"
    },
    imageAjoutPhotoStyle3:{
        width:47,
        height:37
    },
    imageAjoutPhotoStyle4:{
        width:30,
        height:23
    },
    viewAjoutPhotoStyle8:{
        width:290,
        height:18,
        marginLeft:49,
        marginTop:82,
        display:"flex",
        alignItems:"center"
    },
    textAjoutPhotoStyle4:{
        color:"#0019A7",
        fontFamily:"Comfortaa",
        fontSize:16,
        textDecorationLine:"underline"
    },
    continuerAjoutPhotoStyle:{
        marginTop:24,
        marginLeft:36,
        width:331,
        height:56,
        borderRadius:50,
        backgroundColor:"white",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    textAjoutPhotoStyle5:{
        fontSize:18,
        color:"rgba(0, 25, 167, 0.97)"
    },
    centeredAjoutPhotoView:{
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        // backgroundColor:"white",
        width:"100%",
        // height:738,
        top:170
    },
    ScrollViewAjoutPhotoStyle:{
        // top:"20",
        // width:400,
        // height:738,
    },
    imageAjoutPhotoStyle5:{
        width:70,
        height:70,
        margin:"auto",
        marginTop:58
    },
    viewAjoutPhotoStyle9:{
        width:225,
        height:48,
        marginLeft:83,
        marginTop:20
    },
    textAjoutPhotoStyle6:{
        fontSize:24,
        color:"#0019A7",
        fontFamily:"Comfortaa",
        margin:"auto",
    },
    viewAjoutPhotoStyle10:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:370,
        height:150,
        marginLeft:11,
        marginTop:33
    },
    imageAjoutPhotoStyle6:{
        width:112,
        height:150
    },
    viewAjoutPhotoStyle11:{
        width:330,
        height:119,
        marginTop:36,
        margin:"auto"
    },
    textAjoutPhotoStyle7:{
        fontSize:18,
        color:"#0019A7",
        fontFamily:"Comfortaa",
        textAlign:"center"
    },
    continuerAjoutPhoto:{
        width:300,
        height:56,
        marginLeft:46,
        marginTop:20,
        borderRadius:50,
        backgroundColor:"#D2C2FF",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    textAjoutPhoto8:{
        fontSize:18,
        fontFamily:"Comfortaa"
    }
})
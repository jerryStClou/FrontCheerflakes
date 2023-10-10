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



const EmpreinteVocal = ({navigation})=>{
    const [modalVisible, setModalVisible] = useState(false);
    const [soprano, setSoprano] = useState(false);
    const [mezzoSoprano, setMezzoSoprano] = useState(false);
    const [alto, setAlto] = useState(false);
    const [baryton, setBaryton] = useState(false);
    const [tenor, setTenor] = useState(false);
    const [basse, setBasse] = useState(false);






    return(
        <ImageBackground  
        style={styles.containerEmpreinteVocal}
        source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
        <View  style={styles.ligneEmpreinteVocalStyle}></View>
    
            <View style={styles.viewEmpreinteVocalStyle}>
                <Text style={styles.textEmpreinteVocalStyle}>EMPREINTE VOCALE</Text>
            </View>
            
            <View style={styles.viewEmpreinteVocalStyle2}>
                <Text style={styles.textEmpreinteVocalStyle2}>
                Enregistrez un message vocal introductif à l'attention des personnes que vous croisez, et captivez le coeur de votre futur match.
                </Text>
            </View>
            <TouchableOpacity 
              onPress={() => {setModalVisible(true)}}
              style={styles.viewEmpreinteVocalStyle3}
            >
                <View style={styles.viewEmpreinteVocalStyle4}>
                    <Image
                      style={styles.imageEmpreinteVocalStyle}
                      source={require("../../../assets/imagesSvg/micro 1.svg")}
                    />
                </View>
            </TouchableOpacity>

            <View style={styles.viewEmpreinteVocalStyle5}>
               <Text style={styles.textEmpreinteVocalStyle3}>30 secondes</Text>
            </View>

            <View style={styles.viewEmpreinteVocalStyle6}>
                <Text style={styles.textEmpreinteVocalStyle4}>Décrivez votre type de voix</Text>
                <View style={styles.viewEmpreinteVocalStyle7}>
                   <Text style={styles.textEmpreinteVocalStyle5}>?</Text>
                </View>
                
            </View>


           


            <View style={[styles.viewEmpreinteVocalStyle8,{marginTop:41}]}>
               <TouchableOpacity  
               onPress={()=>{
                  setSoprano(!soprano)
               }}
               style={[styles.viewEmpreinteVocalStyle9]}
               >
                  <Image
                     source={soprano == false
                        ?require('../../../assets/images/radio_unselected.png')
                        :require('../../../assets/images/radio_selected.png')
                     }
                     style={styles.ImageEmpreinteVocalStyle2}
                  />
                  <View style={styles.viewTextEmpreinteVocalStyle}>
                    <Text style={styles.textEmpreinteVocalStyle6}>Soprano</Text>
                  </View>
                  
               </TouchableOpacity>

               <TouchableOpacity  
               onPress={()=>{
                  setBaryton(!baryton)
               }}
               style={[styles.viewEmpreinteVocalStyle9,{marginLeft:72}]}>
                  <Image
                     source={ baryton == false
                        ? require('../../../assets/images/radio_unselected.png')
                        : require('../../../assets/images/radio_selected.png')

                     }
                     style={styles.ImageEmpreinteVocalStyle2}
                  />
                  <View style={styles.viewTextEmpreinteVocalStyle}>
                     <Text style={styles.textEmpreinteVocalStyle6}>Baryton</Text>
                  </View>
                  
               </TouchableOpacity>
               
            </View>

            
            <View style={[styles.viewEmpreinteVocalStyle8,{marginTop:20}]}>
               <TouchableOpacity  
                 onPress={()=>{
                  setMezzoSoprano(!mezzoSoprano)
                 }}
                 style={[styles.viewEmpreinteVocalStyle9]}
               >
                  <Image
                     source={ mezzoSoprano == false
                        ? require('../../../assets/images/radio_unselected.png')
                        : require('../../../assets/images/radio_selected.png')
                        
                     }
                     style={styles.ImageEmpreinteVocalStyle2}
                  />
                  <View  style={[styles.viewTextEmpreinteVocalStyle]}>
                  <Text style={[styles.textEmpreinteVocalStyle6]}>
                     Mezzo Soprano
                  </Text>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity  
                 onPress={()=>{
                  setTenor(!tenor)
                 }}
                 style={[styles.viewEmpreinteVocalStyle9,{marginLeft:72}]}
               >
                  <Image
                     source={ tenor == false
                        ? require('../../../assets/images/radio_unselected.png')
                        : require('../../../assets/images/radio_selected.png')
                     }
                     style={styles.ImageEmpreinteVocalStyle2}
                  />
                  <View style={styles.viewTextEmpreinteVocalStyle}>
                     <Text style={styles.textEmpreinteVocalStyle6}>Ténor</Text>
                  </View>
                  
               </TouchableOpacity>
               
            </View>

            
            <View style={[styles.viewEmpreinteVocalStyle8,{marginTop:20}]}>
               <TouchableOpacity  
                 onPress={()=>{
                  setAlto(!alto)
                 }}
                 style={[styles.viewEmpreinteVocalStyle9]}
               >
                  <Image
                     source={alto == false
                        ? require('../../../assets/images/radio_unselected.png')
                        : require('../../../assets/images/radio_selected.png')
                     }
                     style={styles.ImageEmpreinteVocalStyle2}
                  />
                  <View style={styles.viewTextEmpreinteVocalStyle}>
                     <Text style={styles.textEmpreinteVocalStyle6}>Alto</Text>
                  </View>
                  
               </TouchableOpacity>

               <TouchableOpacity  
                 onPress={()=>{
                  setBasse(!basse)
                 }}
                 style={[styles.viewEmpreinteVocalStyle9,{marginLeft:72}]}
               >
                  <Image
                     source={ basse == false
                        ? require('../../../assets/images/radio_unselected.png')
                        : require('../../../assets/images/radio_selected.png')
                     }
                     style={styles.ImageEmpreinteVocalStyle2}
                  />
                  <View style={styles.viewTextEmpreinteVocalStyle}>
                    <Text style={styles.textEmpreinteVocalStyle6}>Basse</Text>
                  </View>
                  
               </TouchableOpacity>
               
            </View>

            <View style={styles.viewEmpreinteVocalStyle10}>
               <Text style={styles.textEmpreinteVocalStyle7}>Choix unique.</Text>
            </View>
            <TouchableOpacity style={styles.viewEmpreinteVocalStyle11}
              onPress={() => {navigation.navigate("charte d'engagement")}}
            >
               <Text style={styles.textEmpreinteVocalStyle8}>Enregistrer plus tard</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.continuerEmpreinteVocalStyle}
            onPress={() => {setModalVisible(true)}}
            >
                <Text style={styles.continuerTextEmpreinteVocalStyle}>Continuer</Text>
            </TouchableOpacity>


            <Modal
               animationType="slide"
               transparent={true}
               visible={modalVisible}
               onRequestClose={() => {
                 requestLocationPermission, setModalVisible(!modalVisible);
               }}
            >
               <View style={styles.centeredEmpreinteVocalView}>
               <ScrollView>
                  <View style={styles.viewEmpreinteVocalStyle12}>
                     <Text style={styles.textEmpreinteVocalStyle9}>VOTRE TYPE DE VOIX</Text>
                  </View>

                  <TouchableOpacity 
                    style={styles.viewEmpreinteVocalStyle13}
                    onPress={()=>{setModalVisible(!modalVisible)}}
                  >
                     <Text style={styles.textEmpreinteVocalStyle10}>?</Text>
                  </TouchableOpacity>

                  <View style={styles.viewEmpreinteVocalStyle14}>
                     <Text style={styles.textEmpreinteVocalStyle11}>
                        <Text style={styles.spanEmpreinteVocalStyle}>Soprano </Text> est la voix la plus aiguë de femme.
                     </Text>
                     <Text style={styles.textEmpreinteVocalStyle11}>
                        <Text style={styles.spanEmpreinteVocalStyle}>Mezzo-soprano </Text> 
                        est la voix médium
                     </Text>
                     
                     <Text style={styles.textEmpreinteVocalStyle11}>
                        <Text style={styles.spanEmpreinteVocalStyle}>Alto (contralto) </Text> 
                        est la voix de femme la plus grave et est très rare. 
                     </Text>

                     <Text style={styles.textEmpreinteVocalStyle11}>
                        Pour les hommes : 
                     </Text>

                     <Text style={styles.textEmpreinteVocalStyle11}>
                        <Text style={styles.spanEmpreinteVocalStyle}>Ténor </Text> 
                        est la voix la plus aiguë. 
                     </Text>
                     
                     <Text style={styles.textEmpreinteVocalStyle11}>
                        <Text style={styles.spanEmpreinteVocalStyle}>Baryton </Text> 
                        est la voix médium.
                     </Text>

                     
                     <Text style={styles.textEmpreinteVocalStyle11}>
                        <Text style={styles.spanEmpreinteVocalStyle}>Basse </Text> 
                        est la voix la plus grave.
                     </Text>

                     

                  </View>
               </ScrollView>
               </View>
        </Modal>
        </ImageBackground>
    )

}
export default EmpreinteVocal;

const styles = StyleSheet.create({
    containerEmpreinteVocal:{
        width:"100vw",
        height:"100vh",
     },
     ligneEmpreinteVocalStyle:{
       width:"100%",
       height:"1px",
       backgroundColor:"black",
       top:50
   },
     viewEmpreinteVocalStyle:{
        marginTop:122
     },
     textEmpreinteVocalStyle:{
        fontSize:24,
        fontFamily:"Comfortaa",
        margin:"auto"
     },
     viewEmpreinteVocalStyle2:{
        width:318,
        height:110,
        marginLeft:36,
        marginTop:39
     },
     textEmpreinteVocalStyle2:{
        fontSize:15,
        fontFamily:"Comfortaa",
     },
     viewEmpreinteVocalStyle3:{
        width:128,
        height:128,
        borderRadius:70,
        borderColor:"#0019A7",
        borderWidth:"1px",
        borderStyle:"solid",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:131
     },
     viewEmpreinteVocalStyle4:{
        backgroundColor:"white",
        borderRadius:70,
        width:113,
        height:113,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
     },
     imageEmpreinteVocalStyle:{
        width:66,
        height:66
     },
     viewEmpreinteVocalStyle5:{
        width:89,
        height:15,
        marginLeft:151,
        marginTop:13
     },
     textEmpreinteVocalStyle3:{
        fontSize:12,
        fontFamily:"Comfortaa",
        margin:"auto"
     },
     viewEmpreinteVocalStyle6:{
        width:272,
        height:25,
        marginLeft:68,
        marginTop:23,
        display:"flex",
        flexDirection:"row",
        // backgroundColor:"white",
        alignItems:"center"
     },
    
     textEmpreinteVocalStyle4:{
        fontSize:15,
        fontFamily:"Comfortaa",
        textDecorationLine:"underline",
        fontWeight:"bold"
     },
     viewEmpreinteVocalStyle7:{
        backgroundColor:"#FF40C1",
        width:25,
        height:25,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:50,
        marginLeft:9
     },
     textEmpreinteVocalStyle5:{
        fontSize:15,
        fontFamily:"Comfortaa",
        fontWeight:"bold",
     },
     viewEmpreinteVocalStyle8:{
      display:"flex",
      flexDirection:"row",
      // justifyContent:"space-between",
      width:280,
      height:25,
      marginLeft:48
     },
     viewEmpreinteVocalStyle9:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      width:105
     },
     ImageEmpreinteVocalStyle2:{
      width:25,
      height:25
     },
     viewTextEmpreinteVocalStyle:{

     },
     viewTextEmpreinteVocalStyle:{
        width:71,
        marginLeft:9
     },
     textEmpreinteVocalStyle6:{
      fontSize:13,
      fontFamily:"Comfortaa",
     },
     viewEmpreinteVocalStyle10:{
      width:291,
      height:15,
      marginLeft:36,
      marginTop:36
     },
     textEmpreinteVocalStyle7:{
      fontSize:12,
      fontFamily:"Comfortaa",
     },
     viewEmpreinteVocalStyle11:{
      width:290,
      height:18,
      marginLeft:50,
      marginTop:16
     },
     textEmpreinteVocalStyle8:{
      textAlign:"center",
      color:"#0019A7",
      fontSize:16,
      fontFamily:"Comfortaa",
      textDecorationLine:"underline"
     },
     continuerEmpreinteVocalStyle:{
      marginTop:28,
      marginLeft:36,
      width:331,
      height:56,
      borderRadius:50,
      backgroundColor:"white",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
   },
   continuerTextEmpreinteVocalStyle:{
      fontSize:18,
      color:"rgba(0, 25, 167, 0.97)"
   },
   centeredEmpreinteVocalView:{
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
   viewEmpreinteVocalStyle12:{
      width:296,
      height:48,
      marginLeft:41,
      marginTop:63
   },
   textEmpreinteVocalStyle9:{
      color:"#0019A7",
      fontSize:24,
      fontFamily:"Comfortaa",
   },
   viewEmpreinteVocalStyle13:{
      marginLeft:150,
      backgroundColor:"#FF40C1",
      width:25,
      height:25,
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      borderRadius:50,
   },
   textEmpreinteVocalStyle10:{
      fontSize:15,
      fontFamily:"Comfortaa",
      fontWeight:"bold"
   },
   viewEmpreinteVocalStyle14:{
      width:300,
      marginTop:48,
      marginLeft:44
   },
   textEmpreinteVocalStyle11:{
      fontSize:18,
      color:"#0019A7",
      fontFamily:"Gilroy",
      marginTop:10
   },
   spanEmpreinteVocalStyle:{
      fontWeight:"bold",
      fontSize:18,
      color:"#0019A7",
      fontFamily:"Gilroy"
   },
   validerEmpreinteVocalStyle:{
    marginTop:48,
    marginLeft:36,
},
textEmpreinteVocalStyle12:{
   fontSize:20,
   textDecorationLine:"underline"
}


})
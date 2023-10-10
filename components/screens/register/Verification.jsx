import { useState } from "react";
import { View,Text,ImageBackground, StyleSheet, Modal, ScrollView, Image, TouchableOpacity} from "react-native-web";

const Verification = ({navigation})=>{
    const [modalVisible, setModalVisible] = useState(true);

    return(
        <ImageBackground  
        style={styles.containerVerification}
        source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
            <View  style={styles.ligneVerificationStyle}></View>

            <TouchableOpacity 
              style={styles.leBoutonVerificationStyle}
              onPress={()=>{setModalVisible(!modalVisible)}}
            >
               <Text style={styles.textLeBoutonVerificationStyle}>Verification</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.lienEngagementVerificationStyle}
              onPress={()=>{navigation.navigate("charte d'engagement")}}
            >
               <Text style={styles.textLeBoutonVerificationStyle}>Charte d'engagement</Text>
            </TouchableOpacity>
            
            <Modal
               animationType="slide"
               transparent={true}
               visible={modalVisible}
               onRequestClose={() => {
                 requestLocationPermission, setModalVisible(!modalVisible);
               }}
            >
                <View style={styles.centeredVerificationView}>
                <ScrollView>
                    <View style={styles.viewVerificationStyle}>
                        <Text style={styles.textVerificationStyle}>VÉRIFICATION</Text>
                    </View>

                    <View style={styles.viewVerificationStyle2}>
                        <ImageBackground
                          source={require("../../../assets/images/Kolia-Verif.png")}
                          style={styles.imageFondVerificationStyle}
                        >
                            <Image
                              source={require("../../../assets/images/ico-protection.png")}
                              style={styles.imageVerificationStyle}

                            />

                        </ImageBackground>
                    </View>
                    <View style={styles.viewVerificationStyle3}>
                        <Text style={styles.textVerificationStyle2}>Prenez cette pose et faites </Text>
                        <Text style={styles.textVerificationStyle3}>un selfie</Text>
                    </View>

                    <View style={styles.viewVerificationStyle4}>
                        <Text style={styles.textVerificationStyle4}>
                        Nous le comparerons avec vos photos de profil pour vérifier votre identité.
                        </Text>
                    </View>
                    <TouchableOpacity 
                       style={styles.boutonVerificationStyle}
                    //    onPress={() => {setModalVisible(!modalVisible)}}
                    >
                        <View style={styles.viewBoutonVerificationStyle}>
                            <Image
                              source={require('../../../assets/imagesSvg/image 4.svg')}
                              style={styles.imageBoutonVerificationStyle}
                            />
                        </View>

                        <View style={styles.viewBoutonVerificationStyle2}>
                           <Text style={styles.textBoutonVerificationStyle}>Prendre une photo</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                       onPress={()=>{
                          navigation.navigate("charte d'engagement")
                       }}
                    style={styles.viewVerificationStyle5}
                    >
                        <Text style={styles.textVerificationStyle5}>
                              Politique de confidentialité
                        </Text>
                        <Image
                          source={require("../../../assets/imagesSvg/flèche3.svg")}
                          style={styles.flecheVerificationStyle}
                        />
                    </TouchableOpacity>

                    <View style={styles.ligneBleuVerificationStyle}></View>

                    <TouchableOpacity 
                      onPress={()=>{setModalVisible(!modalVisible)}}
                      style={styles.viewVerificationStyle6}
                    >
                        <View style={styles.viewVerificationStyle7}>
                            <Text style={styles.textVerificationStyle5}>
                                  Comment CheerFlakes utilise
                            </Text>
                            <Text style={styles.textVerificationStyle5}>vos photos</Text>
                        </View>
                        <Image
                          source={require("../../../assets/imagesSvg/flèche3.svg")}
                          style={styles.flecheVerificationStyle2}
                        />
                        
                    </TouchableOpacity>

                    <View style={styles.ligneBleuVerificationStyle}></View>

                    <View style={styles.viewVerificationStyle6}>
                        <View>
                           <Text style={styles.textVerificationStyle5}>
                                 Retirez votre consentement via
                            </Text>
                           <Text style={styles.textVerificationStyle5}>
                                 notre équipe d’aide
                            </Text>
                        </View>
                        <View style={styles.cercleBleuVerificationStyle}>
                            <Text style={styles.infoTextVerificationStyle}>i</Text>
                        </View>
                        
                    </View>
                </ScrollView>
                </View>
            </Modal>
        </ImageBackground>
        
    
    )

}

export default Verification;

const styles = StyleSheet.create({
    containerVerification:{
        width:"100vw",
        height:"100vh",
     },
     ligneVerificationStyle:{
       width:"100%",
       height:"1px",
       backgroundColor:"black",
       top:50
   },
   leBoutonVerificationStyle:{
    marginTop:122,
   },
   textLeBoutonVerificationStyle:{
    fontSize:24,
    textAlign:"center",
   },
   lienEngagementVerificationStyle:{
    marginTop:30
   },
   centeredVerificationView:{
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    // backgroundColor:"white",
    width:"100%",
    // height:738,
    top:54      
 },
 viewVerificationStyle:{
    width:296,
    height:48,
    marginTop:43,
    marginLeft:30,
    // borderColor:"blue",
    // borderWidth:"2px",
    // borderStyle:"solid"
 },
 textVerificationStyle:{
    fontSize:24,
    color:"#0019A7",
    fontFamily:"Comfortaa",
    textAlign:"center"
 },
 viewVerificationStyle2:{
    width:151,
    height:203,
    borderColor:"#0019A7",
    borderWidth:"1px",
    borderStyle:"solid",
    borderRadius:30,
    marginLeft:100
 },
 imageFondVerificationStyle:{
    width:151,
    height:203,
 },
 imageVerificationStyle:{
    width:30,
    height:30,
    top:10,
    left:10
 },
 viewVerificationStyle3:{
    marginLeft:39,
    marginTop:15,
    width:270,
    // backgroundColor:"pink"
 },
 textVerificationStyle2:{
    fontSize:24,
    fontFamily:"Comfortaa",
    color:"#0019A7",
    fontWeight:"bold"
 },
 textVerificationStyle3:{
    fontSize:24,
    fontFamily:"Comfortaa",
    color:"#0019A7",
    fontWeight:"bold",
    textAlign:"center"
 },
 viewVerificationStyle4:{
    width:250,
    // backgroundColor:"pink",
    marginTop:10,
    marginLeft:39
 },
 textVerificationStyle4:{
    color:"#0019A7",
    fontSize:20,
    fontFamily:"Comfortaa",
    textAlign:"center"
 },
 boutonVerificationStyle:{
     width:"331px",
     height:"56px",
     backgroundColor:"black",
     borderRadius:50,
     marginTop:"3vh",
     marginLeft:5,
     display:"flex",
     flexDirection:"row",
     justifyContent:"center",
     alignItems:"center"
 },
 imageBoutonVerificationStyle:{
     width:47,
     height:37,
     marginLeft:30
 },
 viewBoutonVerificationStyle2:{
 marginLeft:30,
 width:227,
 },
 textBoutonVerificationStyle:{
 color:"white",
 fontSize:20,
 fontFamily:"Comfortaa"
 },
 viewVerificationStyle5:{
    marginTop:49,
    marginLeft:39,
    display:"flex",
    flexDirection:"row"
 },
 textVerificationStyle5:{
    color:"#0019A7",
    fontSize:20,
    fontFamily:"Comfortaa"
 },
 flecheVerificationStyle:{
    width:20,
    height:20,
    marginLeft:30
 },
 ligneBleuVerificationStyle:{
    height:1,
    width:270,
    backgroundColor:"#0019A7",
    marginLeft:39,
    marginTop:10
 },
 viewVerificationStyle6:{
    marginTop:20,
    marginLeft:39,
    display:"flex",
    flexDirection:"row"
 },
 flecheVerificationStyle2:{
    width:20,
    height:20,
    marginLeft:10  
 },
 cercleBleuVerificationStyle:{
    width:23,
    height:23,
    backgroundColor:"#0019A7",
    borderRadius:50,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:30
 },
 infoTextVerificationStyle:{
    fontSize:18,
    color:"white",
    fontWeight:"bold"
 }
})
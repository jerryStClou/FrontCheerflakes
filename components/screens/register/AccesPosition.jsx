import { useState } from "react";
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, Modal, ScrollView} from "react-native-web";

const AccesPosition = ({navigation}) =>{
     const [modalVisible, setModalVisible] = useState(false);
      return(
        <ImageBackground  
         style={styles.containerAccesPosition}
         source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
            <View  style={styles.ligneAccesPositionStyle}></View>

            <View style={styles.viewAccesPositionStyle}>
              <Text style={styles.textAccesPositionStyle}>AUTORISEZ L'ACCÈS À VOTRE POSITION</Text>
            </View>

            <TouchableOpacity 
              style={styles.viewAccesPositionStyle2}
              onPress={()=>{setModalVisible(!modalVisible)}}
            >
              <Image
                style={styles.imageAccesPositionStyle}
                source={require('../../../assets/imagesSvg/route 1.svg')}  
              />
            </TouchableOpacity>

            <View style={styles.viewAccesPositionStyle3}>
                <Text style={styles.textAccesPositionStyle2}>
                    Pour retrouver les personnes que vous 
                    croisez, nous avons besoins de savoir où vous êtes.
                </Text>
            </View>
            <View style={styles.viewAccesPositionStyle4}>
                <Text style={styles.textAccesPositionStyle3}>
                    Choissisez{' '}
                    <Text  style={styles.spanAccesPositionStyle}>"Lorsque vous utiliser l'application"</Text> 
                </Text>
                <Text style={styles.textAccesPositionStyle3}>pour ne rater aucun rencontre.</Text>
            </View>
            <TouchableOpacity
               style={styles.boutonAccesPositionStyle}
               onPress={() => {
                navigation.navigate("votre genre");
               }}
            >
                <Text style={styles.textAccesPositionStyle4}>C'est parti</Text>
            </TouchableOpacity>


            <Modal
             animationType="slide"
             transparent={true}
             visible={modalVisible}
             onRequestClose={() => {
             requestLocationPermission, setModalVisible(!modalVisible);
             }}
            >
            <View style={styles.viewAccesPositionStyle6}>        
             <ScrollView style={styles.scrollViewAccesPositionStyle2}>
                <Image
                  style={styles.imageAccesPositionStyle2}
                  source={require('../../../assets/imagesSvg/localisateur 1.svg')}
                />
                <View style={styles.viewAccesPositionStyle5}>
                    <Text style={styles.textAccesPositionStyle5}>
                        Autoriser CHEERFLAKES à accéder à la position de cet appareil:
                    </Text>
                </View>

                <TouchableOpacity
                   onPress={()=>{setModalVisible(!modalVisible)}}
                >
                    <Image
                       style={styles.imageAccesPositionStyle3}
                       source={require('../../../assets/imagesSvg/Capture d’écran 2023-03-20 à 14.27 1.svg')}
                    />
                </TouchableOpacity>
                
             </ScrollView>
            </View>
            </Modal>
            </ImageBackground>
      )
}

export default AccesPosition;

const styles = StyleSheet.create({
    containerAccesPosition:{
    width:"100vw",
    height:"100vh",
    },
      ligneAccesPositionStyle:{
        width:"100%",
        height:"1px",
        backgroundColor:"black",
        top:50
    },
    viewAccesPositionStyle:{
        width:296,
        height:144,
        marginTop:117,
        marginLeft:33
    },
    textAccesPositionStyle:{
        fontSize:24,
    },
    viewAccesPositionStyle2:{
        width:113,
        height:113,
        marginLeft:138,
        backgroundColor:"white",
        borderRadius:50
    },
    imageAccesPositionStyle:{
        width:80,
        height:80,
        margin:"auto"
    },
    viewAccesPositionStyle3:{
        width:291,
        marginLeft:38,
        marginTop:89
    },
    textAccesPositionStyle2:{
         fontSize:13
    },
    viewAccesPositionStyle4:{
        width:291,
        marginTop:116,
        marginLeft:38
    },
    textAccesPositionStyle3:{
        fontSize:"12px",
    },
    spanAccesPositionStyle:{
        fontWeight:"bold",
        fontSize:"12px",
    },

    boutonAccesPositionStyle:{
    backgroundColor:"black",
    width:"300px",
    height:"51px",
    marginLeft:"30px",
    marginTop:"30px",
    borderRadius:50
    },
    textAccesPositionStyle4:{
        margin:"auto",
        color:"white",
        fontSize:18
    },
    viewAccesPositionStyle6:{
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width:"100%",
        top:155
    },
    scrollViewAccesPositionStyle2:{
        top:"20",
        width:400
    },
    imageAccesPositionStyle2:{
        width:30,
        height:30,
        marginLeft:180,
        marginTop:35
    },
    viewAccesPositionStyle5:{
        width:317,
        marginLeft:37
    },
    textAccesPositionStyle5:{
        fontSize:13
    },
    imageAccesPositionStyle3:{
         width:283,
         height:292,
         marginLeft:39
    },
    bouronAccesPositionStyle3:{
        marginLeft:10,
        marginTop:10
    },
    textAccesPositionStyle6:{
        textDecorationLine:"underline",
        fontSize:"1em"
    }
  

})
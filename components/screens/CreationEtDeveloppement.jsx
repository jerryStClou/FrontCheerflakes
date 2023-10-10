import { useState } from "react";
import { ImageBackground, StyleSheet, Image,View,Text, TouchableOpacity, Modal, ScrollView} from "react-native"

const CreationEtDeveloppement = ({ navigation })=>{
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);

 return(
  <ImageBackground
        style={styles.containerCreationEtDeveloppement}
        source={require('../../assets/imageBackground/BackgroundCheerFlakes.png')}
  >
  <Image
    style={styles.logoCreationEtDeveloppementStyle}
    source={require('../../assets/imagesSvg/Rectangle 94.svg')}
  />
  <View style={styles.viewCreationEtDeveloppementStyle}>
    <Text style={styles.textCreationEtDeveloppementStyle}>CRÉATION ET</Text>
    <Text style={styles.textCreationEtDeveloppementStyle}>DÉVELOPPEMENT.</Text>
  </View>
  <View style={styles.viewCreationEtDeveloppementStyle2}>
    <TouchableOpacity style={styles.boutonCreationEtDeveloppementStyle}
     onPress={() => {
      setModalVisible(true);
      // setButtonPressed(true);
    }}
    >
        <Image style={styles.flecheCreationEtDeveloppementStyle}
           source={require('../../assets/imagesSvg/flèche.svg')}
        />
    </TouchableOpacity>

    <TouchableOpacity
    style={styles.passerCreationEtDeveloppementStyle}
    onPress={() =>
      navigation.navigate("love coach")
    }
    >
      <Text style={styles.textCreationEtDeveloppementStyle2}>Passer</Text>
    </TouchableOpacity>
  </View>


  <Modal 
          
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            requestLocationPermission, setModalVisible(!modalVisible);
          }}
  >
    <View style={styles.modalCreationEtDeveloppementStyle}>
      <ScrollView>
         <View style={[styles.viewCreationEtDeveloppementStyle3]}>
           <Text style={[styles.textCreationEtDeveloppementStyle3]}>CONSENTEMENT</Text>
         </View>


         <View style={[styles.viewCreationEtDeveloppementStyle4]}>
          <Text style={[styles.textCreationEtDeveloppementStyle4]}>
          Nous respectons la vie privée de nos utilisateurs. Vos données,
                vos choix.{'\n'}MyBodyDate utilise des cookies et des
                informations non sensibles pour assurer le bon fonctionnement de
                son application, mesurer l&apos;audience et les contenus
                consultés ou personnaliser les contenus affichés.{'\n'}Pour en
                savoir plus sur les cookies, les données utilisées et leur
                traitement vous pouvez consulter{' '}
                <Text style={[styles.textCreationEtDeveloppementStyle5]}>
                  notre politique en matière de cookies
                </Text>
                 et nos engagements en matière 
                <Text style={[styles.textCreationEtDeveloppementStyle5]}>
                  de sécurité et de Confidentialité de données
                  personnelles.
                </Text>  
                {'\n'}
          </Text>
         </View>

         <View style={[styles.viewCreationEtDeveloppementStyle5]}>
          <Text style={[styles.textCreationEtDeveloppementStyle6]}>
          Notre site n&apos;accepte que des profils vérifiés au delà de 7
                jours.{'\n'}Sinon votre compte sera suspendu.
          </Text>
          <Text style={[styles.textCreationEtDeveloppementStyle7]}>
                Nous sommes conforme RGPD, règlement générale à la
                règlementation de la protection des données
          </Text>
         </View>
         <View style={[styles.viewCreationEtDeveloppementStyle6]}>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('Love Coach', {
              //   userConsent: 'Refuser',
              //   routeName: routeChoice,
              // });
              setButtonPressed('Refuser');
              setModalVisible(false);}}
            style={buttonPressed  === 'Refuser'? styles.refuserCreationEtDeveloppementStyle1 : styles.refuserCreationEtDeveloppementStyle2}
          >
            <Text style={styles.textCreationEtDeveloppementStyle8}>Refuser</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('Love Coach', {
              //   userConsent: 'Refuser',
              //   routeName: routeChoice,
              // });
              setButtonPressed('Accepter');
              setModalVisible(false);}}
            style={buttonPressed  === 'Accepter'? styles.refuserCreationEtDeveloppementStyle1 : styles.refuserCreationEtDeveloppementStyle2}
          >
            <Text style={styles.textCreationEtDeveloppementStyle8}>Accepter</Text>
          </TouchableOpacity>
         </View>
      </ScrollView>
    </View>
 

  </Modal>
  </ImageBackground>
 )
}

export default CreationEtDeveloppement;

const styles = StyleSheet.create({
  containerCreationEtDeveloppement:{
    width:"100vw",
    height:"100vh"
},
logoCreationEtDeveloppementStyle:{
    width:143,
    height:71,
    marginTop:16,
    marginLeft:24
},
viewCreationEtDeveloppementStyle:{
  width:296,
  height:144,
  marginLeft:24,
  marginTop:90
},
textCreationEtDeveloppementStyle:{
  fontFamily:"Comfortaa",
  fontSize:"24px",
},
viewCreationEtDeveloppementStyle2:{
display:"flex",
flexDirection:"row",
alignItems:"center",
marginTop:"300px",
marginLeft:"130px",
},
boutonCreationEtDeveloppementStyle:{
  width:55,
  height:55,
  backgroundColor:"black",
  borderRadius:50,
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
},

flecheCreationEtDeveloppementStyle:{
  width:"12.1px",
  height:"24.54px",
},
passerCreationEtDeveloppementStyle:{
  width:79,
  height:25,
  marginLeft:40,
},
textCreationEtDeveloppementStyle2:{
  fontSize:16,
  fontFamily:"Comfortaa",
  textDecorationLine:"underline"
},
modalCreationEtDeveloppementStyle:{
  flex: 1,
  borderTopLeftRadius: 40,
  borderTopRightRadius: 40,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  width:"100%",
  top:155
},
viewCreationEtDeveloppementStyle3:{
      width:296,
      height:48,
      marginLeft:47,
      marginBottom:"10px",
      marginTop:63
},
textCreationEtDeveloppementStyle3:{
  color: 'black',
  fontSize: 26,
  fontFamily: 'Comfortaa-Bold',
},
viewCreationEtDeveloppementStyle4:{
  width:317,
  height:259,
  marginLeft:36
},
textCreationEtDeveloppementStyle4:{
  // width: '80%',
  color: '#0F0BAE',
  fontSize: 16,
  textAlign: 'left',
  fontFamily: 'Comfortaa-Bold',
  alignSelf: 'center',
},
textCreationEtDeveloppementStyle5:{
  color: '#0F0BAE',
  width: '80%',
  fontSize: 16,
  textAlign: 'left',
  textDecorationLine: 'underline',
},
viewCreationEtDeveloppementStyle5:{
  marginLeft:36,
  marginTop:"0px",
  width:318,
  height:160,
},
textCreationEtDeveloppementStyle6:{
  color: '#000', 
  fontSize: 15, 
  fontFamily: 'Comfortaa-Bold', 
},
textCreationEtDeveloppementStyle7:{
  color:"blue",
  fontSize:15
},
viewCreationEtDeveloppementStyle6:{
  display:"flex",
flexDirection:"row"
},
refuserCreationEtDeveloppementStyle1:{
  borderColor:"#D2C2FF",
  borderWidth:"2px",
  borderStyle:"solid",
  backgroundColor:"#D2C2FF",
  borderRadius:50,
  width:159,
  height:56,
  marginLeft:24,
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
},
refuserCreationEtDeveloppementStyle2:{
  borderColor:"#D2C2FF",
  borderWidth:"2px",
  borderStyle:"solid",
  borderRadius:50,
  width:159,
  height:56,
  marginLeft:24,
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
},
textCreationEtDeveloppementStyle8:{
  fontSize:18,
  color:"#0019A7"
}
})
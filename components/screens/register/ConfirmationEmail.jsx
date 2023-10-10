import { Image, TouchableOpacity } from "react-native";
import { View, Text, ImageBackground,StyleSheet } from "react-native";

const ConfirmationEmail = ({navigation}) =>{
    return(
        <ImageBackground  
         style={styles.container}
         source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
            <View  style={styles.ligneSignInMailStyle}></View>
          <View style={styles.mailConfirme}>
            <Text style={styles.textStyle}>CONFRIMATION{'\n'}E-MAIL</Text>
          </View>
          <View style={styles.ViewImage}>
            <Image
                source={require('../../../assets/imagesSvg/avion-en-papier 1.svg')}  
                style={styles.ImageStyle}
            />
          </View>
          <View style={styles.ViewStyle}>
            <Text style={styles.textStyle2}>Si vous n&apos;avez pas reçu d&apos;email, consultez vos</Text>
            <Text>spams ou rééssayez.</Text>
          </View>
          
          <TouchableOpacity style={styles.autreMail}>
            <View style={styles.ViewImage2}>
               <Image
                        source={require('../../../assets/imagesSvg/image 2.svg')}
                        style={styles.ImageStyle2}
                />
            </View>
            <View style={styles.ViewStyle2}>
               <Text style={styles.TextStyle3}>Utiliser un autre email</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.ViewStyle3}>
            <Text style={styles.TextStyle4}>Utiliser un autre moyen de connection</Text>
          </View>

          <TouchableOpacity 
          style={styles.continuerStyle}
          onPress={() =>
            navigation.navigate("ville")
          }
          >
            <Text style={styles.TextStyle5}>Continuer</Text>
          </TouchableOpacity>

        </ImageBackground>
    )
}

export default ConfirmationEmail;

const styles = StyleSheet.create({
  container: {
    width:"100vw",
    height:"100vh",
  },
  ligneSignInMailStyle:{
    width:"100%",
    height:"1px",
    backgroundColor:"black",
    top:50
},
mailConfirme:{
  // backgroundColor:"red",
  width:296,
  height:144,
  marginTop:117,
  marginLeft:33
},

textStyle:{
  fontSize:24
},
ViewImage:{
  width:113,
  height:113,
  backgroundColor:"white",
  marginLeft:"30vw",
  borderRadius:50,
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
},
ImageStyle:{
  width:80,
  height:80
},
ViewStyle:{
  marginLeft:"8vw",
  marginTop:"5vh"
},
textStyle2:{
    fontSize:13
},
  autreMail:{
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
  // ViewImage2:{
  //   backgroundColor:"white",
  //   width:"15vw",
  //   height:"7vh"
  // },
  ImageStyle2:{
    width:40,
    height:40
  },
  ViewStyle2:{
    marginLeft:"12px",
    marginRight:27,
    width:227,
  },
  TextStyle3:{
    color:"white",
    fontSize:17
  },
  ViewStyle3:{
    marginLeft:39,
    marginTop:28
  },
  TextStyle4:{
    fontSize:"13px"
  },
  
  continuerStyle:{
    marginTop:46,
    marginLeft:36,
    width:331,
    height:56,
    borderRadius:50,
    backgroundColor:"white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  TextStyle5:{
    fontSize:18,
    color:"rgba(0, 25, 167, 0.97)"
  }
})
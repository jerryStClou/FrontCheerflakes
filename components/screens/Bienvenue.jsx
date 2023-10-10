import { ImageBackground, StyleSheet, Image,View,Text} from "react-native"
import { TouchableOpacity } from "react-native-web";

const Bienvenue = ({ navigation })=>{
    return(
        <ImageBackground 
        style={styles.containerBienvenue}
        source={require('../../assets/imageBackground/BackgroundCheerFlakes.png')}
      >
        <Image
          style={styles.logoBienvenueStyle}
          source={require('../../assets/imagesSvg/Rectangle 94.svg')}
        />
       <View style={styles.viewBienvenueStyle}>
         <Text style={styles.textBienvenueStyle}>BIENVENUE</Text>
         <Text style={styles.textBienvenueStyle}>DECOUVREZ NOUS.</Text>
       </View>
       <View style={styles.videoBienvenueStyle}>
         {/* <video style={styles.videoBienvenueStyle}>
            <source src="https://video.wixstatic.com/video/8e4c05_5791dadfe85b41e792e18d6fcac7717a/480p/mp4/file.mp4"/>
         </video> */}
       </View>
       <TouchableOpacity
         style={styles.passerBienvenueStyle}
         onPress={() =>
            navigation.navigate("Creationetdeveloppement")
          }
       >
           <Text style={styles.textBienvenueStyle2}>Passer</Text>
       </TouchableOpacity>
        
    </ImageBackground>
    )
}

export default Bienvenue;

const styles = StyleSheet.create({
    containerBienvenue:{
        width:"100vw",
        height:"100vh"
    },
    logoBienvenueStyle:{
        width:143,
        height:71,
        marginTop:16,
        marginLeft:24
    },
    viewBienvenueStyle:{
        width:296,
        height:144,
        marginTop:90,
        marginLeft:24
    },
    textBienvenueStyle:{
     fontSize:24,
     fontFamily:"Comfortaa"
    },
    videoBienvenueStyle:{
        width:344,
        height:208,
        marginLeft:23,
        backgroundColor:"white"
    },
    passerBienvenueStyle:{
        width:79,
        height:25,
        marginTop:187,
        marginLeft:255,
    },
    textBienvenueStyle2:{
        fontSize:16,
        fontFamily:"Comfortaa",
        textDecorationLine:"underline"
    }
   
   
})
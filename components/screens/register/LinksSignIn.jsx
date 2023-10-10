import { useState } from "react";
import { ImageBackground, StyleSheet, Image,View,Text} from "react-native"
import { TouchableOpacity } from "react-native-web";

const LinksSignIn = ({ navigation })=>{
    return(
        <ImageBackground 
        style={styles.containerLinksSignIn}
        source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}
      >
      <Image
        style={styles.logoLinksSignInStyle}
        source={require('../../../assets/imagesSvg/Rectangle 94.svg')}
      />
      <View style={styles.viewLinksSignInStyle}>
             <Text style={[styles.textLinksSignInStyle]}>
               UN COUP DE COEUR
             </Text>
             <Text style={[styles.textLinksSignInStyle]}>
               PROVOQUER LE
             </Text>
             <Text style={[styles.textLinksSignInStyle2]}>
               DESTIN, LANCEZ-VOUS!
             </Text>
      </View>
      <TouchableOpacity
        style={[styles.boutonLinksSignInStyle,{marginTop:79}]}
        onPress={() =>
            navigation.navigate("S'inscrire par mail")
          }
      >
        <Image
           source={require('../../../assets/imagesSvg/arroba 2.png')}
           style={[styles.imageLinksSignInStyle]}
        />
        <View style={[styles.viewLinksSignInStyle2]}>
           <Text style={[styles.textLinksSignInStyle3]}>s'inscrire par mail</Text>
        </View>
      </TouchableOpacity>

      
      <TouchableOpacity
          style={[styles.boutonLinksSignInStyle,{marginTop:13}]}
        >
            
        <Image
           source={require('../../../assets/imagesSvg/telephone 1.png')}
           style={[styles.imageLinksSignInStyle]}
        />
        <View style={[styles.viewLinksSignInStyle2]}>
           <Text style={[styles.textLinksSignInStyle3]}>S'inscrire avec son n</Text>
        </View>
        
        </TouchableOpacity>
        
        <View style={[styles.viewLinksSignInStyle3]}>
                <Text style={[styles.textLinksSignInStyle4]}>Vous avez deja un compte?</Text>
        </View>

        <TouchableOpacity
          style={[styles.connectionLinksSignInStyle]}
        >
            <Text style={[styles.textLinksSignInStyle5]}>Se connecter</Text>
        </TouchableOpacity>
        <View style={[styles.viewLinksSignInStyle4]}></View>

        <TouchableOpacity style={[styles.compteLinksSignInStyle]}>
        <Text style={[styles.textLinksSignStyle6]}>Récupérer mon compte</Text>
        </TouchableOpacity>
      </ImageBackground>
    )
}
export default LinksSignIn;

const styles = StyleSheet.create({
    containerLinksSignIn:{
        width:"100vw",
        height:"100vh"
    },
    logoLinksSignInStyle:{
        width:143,
        height:71,
        marginTop:16,
        marginLeft:24
    },
    viewLinksSignInStyle:{
        width:305,
        height:144,
        marginTop:95,
        marginLeft:33
    },
    textLinksSignInStyle:{
        color: 'black',
        fontSize: 24,
        fontFamily: 'Comfortaa',
        fontWeight:"bold"
    },
    textLinksSignInStyle2:{
        fontSize: 24,
        fontFamily: 'Comfortaa',
    },
    boutonLinksSignInStyle:{
        backgroundColor:"black",
        width:331,
        height:56,
        borderRadius:50,
        marginLeft:33,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
      },
      imageLinksSignInStyle:{
        width:28,
        height:28
    },
    viewLinksSignInStyle2:{
        // backgroundColor:"pink",
        marginLeft:"17px",
        width:255
    },
    textLinksSignInStyle3:{
        color:"white",
        fontSize:20
    },
    viewLinksSignInStyle3:{
        // backgroundColor:"red",
        marginTop:"20px"
    },
    textLinksSignInStyle4:{
        margin:"auto",
        fontSize:"17px"
    },
    connectionLinksSignInStyle:{},
    textLinksSignInStyle5:{
        margin:"auto",
        fontSize:"17px",
        textDecorationLine:"underline",
    },
    viewLinksSignInStyle4:{
        // backgroundColor:"pink"
        borderTopColor:"black",
        borderTopWidth:"2px",
        width:298,
        marginLeft:49,
        marginTop:15,
        marginBottom:15
    },
    compteLinksSignInStyle:{},
    textLinksSignStyle6:{
        margin:"auto",
        textDecorationLine:"underline",
        color:"#0019A7",
        fontSize:"17px"
    }
})

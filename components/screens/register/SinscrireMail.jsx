import * as React from 'react';
import { TouchableOpacity } from "react-native";
import { View,ImageBackground,Image,StyleSheet,Text, TextInput } from "react-native";

const SignInMail = ({route, navigation})=>{
    
    const [userEmail, setEmail] = React.useState();
    const [buttonPressed, setButtonPressed] = React.useState();
    return(
        <ImageBackground
           style={styles.containerHomeStackNext}
           source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}
        >
            <View  style={styles.ligneSignInMailStyle}></View>
            <View style={styles.viewSignInMailStyle}>
                <Text style={styles.textSignInMailStyle}>S'INSCRIRE</Text>
            </View>
            <TextInput
              style={styles.emailSignInMailStyle}
              keyboardType="email-address"
              placeholder="Entrez votre Email"
              placeholderTextColor="black"
              onChangeText={userEmail => setEmail(userEmail)}
              value={userEmail}
            />
            <View style={styles.viewSignInMailStyle2}>
                <Text>
                 Un lien pour vous connecter à votre ancien compte, va vous être envoyé par e-mail.

                </Text>
            </View>
            <TouchableOpacity
             style={styles.continuerSignInMailStyle}
             onPress={() =>
                navigation.navigate("Confirmation email")
              }
            >
                <Text style={styles.textSignInMailStyle3}>Continuer</Text>
            </TouchableOpacity>
            
        </ImageBackground>
    )

}
export default SignInMail;

const styles = StyleSheet.create({
    containerHomeStackNext:{
        width:"100vw",
        height:"100vh"
    },
    ligneSignInMailStyle:{
        width:"100%",
        height:"1px",
        backgroundColor:"black",
        top:50
    },
    viewSignInMailStyle:{
        width:296,
        height:144,
        marginTop:117,
        marginLeft:33
    },
    textSignInMailStyle:{
        fontSize:24,
        fontFamily:"Comfortaa"
    },
    emailSignInMailStyle:{
        width:300,
        height:51,
        borderRadius:50,
        borderColor:"black",
        borderWidth:"1px",
        borderStyle:"solid",
        marginLeft:33,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    textSignInMailStyle2:{
        fontSize:18,
        fontFamily:"Comfortaa",
        color:"#696969",
        margin:"auto"
    },
    viewSignInMailStyle2:{
        width:291,
        height:142,
        marginLeft:38,
        marginTop:17
    },
    continuerSignInMailStyle:{
        width:331,
        height:56,
        marginTop:206,
        marginLeft:30,
        backgroundColor:"white",
        borderRadius:50,

    },
    textSignInMailStyle3:{
        color:"#0019A7",
        fontFamily:"Comfortaa",
        margin:"auto",
        fontSize:"18px"
    }

})
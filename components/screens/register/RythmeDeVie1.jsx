import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,StyleSheet
} from 'react-native';
import Styles from '../../../assets/style/Styles';
// import { BtnNext } from '../../composants/BtnNext';

const RythmeDeVie1 = ({navigation})=>{
    const [matinal, setmatinal] = useState(false);
    const [coucheTard, setcoucheTard] = useState(false);

    return(
        <ImageBackground  
         style={styles.containerRythmeDeVie1}
         source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
        <View  style={styles.ligneRythmeDeVie1sStyle}></View>

        <View style={styles.viewRythmeDeVie1Style}>
         <Text style={styles.textRythmeDeVie1Style}>VOTRE RYTHME DE VIE ?</Text>
        </View>

        
        <View style={styles.viewRythmeDeVie1Style3}>
         <Text style={styles.textRythmeDeVie1Style6}>Vous êtes plutôt ?</Text>
        </View>
        
        <TouchableOpacity 
        onPress={()=>{
            setmatinal(!matinal)
        }}
        style={matinal==false?styles.boutonRythmeDeVie1Style2:styles.boutonRythmeDeVie1Style2Appuyer}>
            <Text style={matinal==false?styles.textRythmeDeVie1Style2:styles.textRythmeDeVie1Style2Appuyer}>Matinal.e</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=>{
            setcoucheTard(!coucheTard)
        }}
        style={coucheTard==false?styles.boutonRythmeDeVie1Style2:styles.boutonRythmeDeVie1Style2Appuyer}>
            <Text style={coucheTard==false?styles.textRythmeDeVie1Style2:styles.textRythmeDeVie1Style2Appuyer}>Couche tard</Text>
        </TouchableOpacity>

            <View style={styles.viewRythmeDeVie1Style2}>
                <Text style={styles.textRythmeDeVie1Style4}>Choix unique</Text>
            </View>
            <TouchableOpacity 
            onPress={()=>{navigation.navigate("suite de votre rythme de vie")}}
            style={styles.continuerRythmeDeVie1Style}>
                <Text style={styles.textRythmeDeVie1Style5}>Continuer</Text>
            </TouchableOpacity>
        </ImageBackground>
    )

}

export default RythmeDeVie1

const styles = StyleSheet.create({
    
    containerRythmeDeVie1:{
        width:"100vw",
        height:"100vh",
        },
        ligneRythmeDeVie1sStyle:{
          width:"100%",
          height:"1px",
          backgroundColor:"black",
          top:50
      },
    viewRythmeDeVie1Style:{
        marginTop:122,
        // marginBottom:99
    },
    viewRythmeDeVie1Style3:{
        marginTop:45,
        marginBottom:20,
        marginRight:135,
        width:270
    },
    textRythmeDeVie1Style6:{
        fontSize:16,
        margin:"auto"
    },
    textRythmeDeVie1Style:{
        fontSize:24,
        fontWeight:"bold",
        margin:"auto"
    },
    boutonRythmeDeVie1Style:{
        marginLeft:46,
        marginBottom:16.36,
        marginTop:99,
        width:300,
        height:52,
        borderColor:"#0019A7",
        borderWidth:"1px",
        borderStyle:"solid",
        borderRadius:50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    boutonRythmeDeVie1Style2:{
        marginLeft:46,
        marginBottom:16.36,
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
    boutonRythmeDeVie1Style2Appuyer:{
        marginLeft:46,
        marginBottom:16.36,
        width:300,
        height:52,
        borderColor:"#0019A7",
        borderWidth:"3px",
        borderStyle:"solid",
        borderRadius:50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    textRythmeDeVie1Style1:{
        fontSize:16
    },
    textRythmeDeVie1Style2:{
        fontSize:18
    },
    
    textRythmeDeVie1Style2Appuyer:{
        fontSize:18,
        color:"#0019A7"
    },
    textRythmeDeVie1Style3:{
        fontSize:18,
        color:"#0019A7"
    },
    viewRythmeDeVie1Style2:{
        marginLeft:50,
        marginTop:306
    },
    textRythmeDeVie1Style4:{
        fontSize:12
    },
    continuerRythmeDeVie1Style:{
        marginTop:51,
        marginLeft:36,
        width:331,
        height:56,
        borderRadius:50,
        backgroundColor:"white",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    textRythmeDeVie1Style5:{
        fontSize:18,
        color:"rgba(0, 25, 167, 0.97)"
    }
})
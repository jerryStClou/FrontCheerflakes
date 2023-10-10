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

const Affinite = ({navigation})=>{
    
    const [cuisine, setcuisine] = useState(false);
    const [globeTrotteur, setglobeTrotteur] = useState(false);
    const [musee, setmusee] = useState(false);
    const [animaux, setanimaux] = useState(false);
    const [sport, setsport] = useState(false);




    return(
        <ImageBackground  
         style={styles.containerAffinite}
         source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
            <View  style={styles.ligneAffinitesStyle}></View>

        <View style={styles.viewAffiniteStyle}>
         <Text style={styles.textAffiniteStyle}>VOTRE AFFINITÉS ?</Text>
        </View>
        
        <TouchableOpacity 
        onPress={()=>{
            setcuisine(!cuisine)
        }}
        style={cuisine == false ? styles.boutonAffiniteStyle2:styles.boutonAffiniteStyle2Appuyer}
        >
            <Text style={cuisine == false ? styles.textAffiniteStyle1:styles.textAffiniteStyle1Appuyer}>Amatrice de cuisine & gourmet</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=>{
            setglobeTrotteur(!globeTrotteur)
        }}
        style={globeTrotteur == false? styles.boutonAffiniteStyle2:styles.boutonAffiniteStyle2Appuyer}
        >
            <Text style={globeTrotteur == false? styles.textAffiniteStyle2:styles.textAffiniteStyle2Appuyer}>Globe trotter.euse</Text>
        </TouchableOpacity>

 
        <TouchableOpacity 
        onPress={()=>{
            setmusee(!musee)
        }}
        style={musee==false?styles.boutonAffiniteStyle2:styles.boutonAffiniteStyle2Appuyer}
        >
          <Text style={musee==false?styles.textAffiniteStyle2:styles.textAffiniteStyle2Appuyer}>Fan de musée & de culture</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
        onPress={()=>{
            setanimaux(!animaux)
        }}
        style={animaux==false?styles.boutonAffiniteStyle2:styles.boutonAffiniteStyle2Appuyer}
        >
            <Text style={animaux==false?styles.textAffiniteStyle2:styles.textAffiniteStyle2Appuyer}>Amis des animaux</Text>
        </TouchableOpacity>

        
        
        <TouchableOpacity 
        onPress={()=>{
            setsport(!sport)
        }}
        style={sport==false?styles.boutonAffiniteStyle2:styles.boutonAffiniteStyle2Appuyer}
        >
            <Text style={sport==false?styles.textAffiniteStyle2:styles.textAffiniteStyle2Appuyer}>Sportif.ve</Text>
        </TouchableOpacity>


            <View style={styles.viewAffiniteStyle2}>
                <Text style={styles.textAffiniteStyle4}>Choix unique</Text>
            </View>
            <TouchableOpacity onPress={()=>{navigation.navigate("votre rythme de vie")}}
            style={styles.continuerAffiniteStyle}>
                <Text style={styles.textAffiniteStyle5}>Continuer</Text>
            </TouchableOpacity>
        </ImageBackground>
    )

}

export default Affinite

const styles = StyleSheet.create({
    
    containerAffinite:{
        width:"100vw",
        height:"100vh",
        },
        ligneAffinitesStyle:{
          width:"100%",
          height:"1px",
          backgroundColor:"black",
          top:50
      },
    viewAffiniteStyle:{
        marginTop:122,
        marginBottom:99
    },
    textAffiniteStyle:{
        fontSize:24,
        fontWeight:"bold",
        margin:"auto"
    },
    boutonAffiniteStyle:{
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
    boutonAffiniteStyle2:{
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
    
    boutonAffiniteStyle2Appuyer:{
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
    textAffiniteStyle1:{
        fontSize:16
    },
    textAffiniteStyle1Appuyer:{
        fontSize:16,
        color:"#0019A7"
    },
    textAffiniteStyle2:{
        fontSize:18
    },
    textAffiniteStyle2Appuyer:{
        fontSize:18,
        color:"#0019A7"
    },
    textAffiniteStyle3:{
        fontSize:18,
        color:"#0019A7"
    },
    viewAffiniteStyle2:{
        marginLeft:50,
        marginTop:103
    },
    textAffiniteStyle4:{
        fontSize:12
    },
    continuerAffiniteStyle:{
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
    textAffiniteStyle5:{
        fontSize:18,
        color:"rgba(0, 25, 167, 0.97)"
    }
})
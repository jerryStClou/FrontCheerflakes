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


const Recherche1 = ({navigation})=>{
    const [homme,setHomme] = useState(false);
    const [femme,setFemme] = useState(false);
    const [monde,setMonde] = useState(false);

    return(
        <ImageBackground  
         style={styles.containerRecherche1}
         source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
            <View  style={styles.ligneRecherche1Style}></View>
            
        <View style={styles.viewRecherche1Style}>
         <Text style={styles.textRecherche1Style}>VOTRE RECHERCHE ?</Text>
        </View>
        <TouchableOpacity 
        onPress={()=>{
            setHomme(!homme)
        }}
        style={homme == false ? styles.boutonRecherche1Style: styles.boutonRecherche1StyleAppuyer}
        >
            <Text style={homme == false ? styles.textRecherche1Style2 : styles.textRecherche1Style2Appuyer}>Homme</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
        onPress={()=>{
            setFemme(!femme)
        }}
        style={femme == false ? styles.boutonRecherche1Style2: styles.boutonRecherche1Style2Appuyer}
        >
            <Text style={femme == false ? styles.textRecherche1Style2 : styles.textRecherche1Style2Appuyer}>Femme</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=>{
            setMonde(!monde)
        }}
        style={monde == false ? styles.boutonRecherche1Style2: styles.boutonRecherche1Style2Appuyer}
        >
            <Text style={monde == false ? styles.textRecherche1Style2 : styles.textRecherche1Style2Appuyer}>Tout le monde</Text>
        </TouchableOpacity>

        <View style={styles.viewRecherche1Style2}>
            <Text style={styles.textRecherche1Style4}>Choix unique</Text>
        </View>
      <TouchableOpacity 
      style={styles.continuerRecherche1Style}
      onPress={()=>{navigation.navigate("suite de votre recherche")}}
      >
          <Text style={styles.textRecherche1Style5}>Continuer</Text>
      </TouchableOpacity>


        </ImageBackground>
    )
}


export default Recherche1

const styles = StyleSheet.create({
    
    containerRecherche1:{
        width:"100vw",
        height:"100vh",
        },
      ligneRecherche1Style:{
        width:"100%",
        height:"1px",
        backgroundColor:"black",
        top:50
    },
    viewRecherche1Style:{
        marginTop:122,
    },
    textRecherche1Style:{
        fontSize:24,
        fontWeight:"bold",
        margin:"auto"
    },
    boutonRecherche1Style:{
        marginLeft:46,
        marginBottom:16.36,
        marginTop:99,
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
    
    boutonRecherche1StyleAppuyer:{
        marginLeft:46,
        marginBottom:16.36,
        marginTop:99,
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
    boutonRecherche1Style2:{
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
    
    boutonRecherche1Style2Appuyer:{
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
    textRecherche1Style2:{
        fontSize:18
    },
    
    textRecherche1Style2Appuyer:{
        fontSize:18,
        color:"#0019A7"
    },
    textRecherche1Style3:{
        fontSize:18,
        color:"#0019A7"
    },
    viewRecherche1Style2:{
        marginLeft:50,
        marginTop:235
    },
    textRecherche1Style4:{
        fontSize:12
    },
    continuerRecherche1Style:{
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
    textRecherche1Style5:{
        fontSize:18,
        color:"rgba(0, 25, 167, 0.97)"
    }
    })
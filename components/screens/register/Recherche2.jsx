// Recherche2

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

const Recherche2 = ({navigation})=>{

    const [relationSerieux, setRelationSerieux] = useState(false);
    const [longTerme, setLongTerme] = useState(false);
    const [courTerme, setCourTerme] = useState(false);
    const [rienSerieux, setRienSerieux] = useState(false);
    const [jeNeSaisPas, setJeNeSaisPas] = useState(false);





    return(
        <ImageBackground  
         style={styles.containerRecherche2}
         source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
        <View  style={styles.ligneRecherche2Style}></View>

        <View style={styles.viewRecherche2Style}>
         <Text style={styles.textRecherche2Style}>VOTRE RECHERCHE ?</Text>
        </View>
        <TouchableOpacity 
        onPress={()=>{
            setRelationSerieux(!relationSerieux)
        }}
        style={relationSerieux == false ? styles.boutonRecherche2Style: styles.boutonRecherche2StyleAppuyer}
        >
            <Text style={relationSerieux == false ? styles.textRecherche2Style2: styles.textRecherche2Style2Appuyer}>Relation serieuse</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
        onPress={()=>{
            setLongTerme(!longTerme)
        }}
        style={longTerme == false ? styles.boutonRecherche2Style2 : styles.boutonRecherche2Style2Appuyer}
        >
            <Text style={longTerme == false ? styles.textRecherche2Style2 : styles.textRecherche2Style2Appuyer}>Long terme, OK pour court</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=>{
            setCourTerme(!courTerme)
        }}
        style={courTerme == false ? styles.boutonRecherche2Style2: styles.boutonRecherche2Style2Appuyer}
        >
            <Text style={courTerme == false ? styles.textRecherche2Style2: styles.textRecherche2Style2Appuyer}>Court terme, Ok pour long</Text>
        </TouchableOpacity>

        
        <TouchableOpacity 
        onPress={()=>{
            setRienSerieux(!rienSerieux)}}
        style={rienSerieux == false ? styles.boutonRecherche2Style2: styles.boutonRecherche2Style2Appuyer}
        >
            <Text style={rienSerieux == false ? styles.textRecherche2Style2: styles.textRecherche2Style2Appuyer}>Rien de très sérieux</Text>
        </TouchableOpacity>

        
        <TouchableOpacity 
        onPress={()=>{
            setJeNeSaisPas(!jeNeSaisPas)
        }}
        style={jeNeSaisPas == false ? styles.boutonRecherche2Style2: styles.boutonRecherche2Style2Appuyer}
        >
            <Text style={jeNeSaisPas == false ? styles.textRecherche2Style2: styles.textRecherche2Style2Appuyer}>Je ne sais pas trop</Text>
        </TouchableOpacity>


            <View style={styles.viewRecherche2Style2}>
                <Text style={styles.textRecherche2Style4}>Choix unique</Text>
            </View>
            <TouchableOpacity 
            style={styles.continuerRecherche2Style}
            onPress={()=>{
                navigation.navigate("vos objectifs")
            }}
            >
                <Text style={styles.textRecherche2Style5}>Continuer</Text>
            </TouchableOpacity>
        </ImageBackground>
    )

}

export default Recherche2

const styles = StyleSheet.create({
    
    containerRecherche2:{
        width:"100vw",
        height:"100vh",
        },
      ligneRecherche2Style:{
        width:"100%",
        height:"1px",
        backgroundColor:"black",
        top:50
    },
    viewRecherche2Style:{
        marginTop:122,
    },
    textRecherche2Style:{
        fontSize:24,
        fontWeight:"bold",
        margin:"auto"
    },
    boutonRecherche2Style:{
        marginLeft:46,
        marginBottom:16.36,
        marginTop:35,
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
    boutonRecherche2StyleAppuyer:{
        marginLeft:46,
        marginBottom:16.36,
        marginTop:35,
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
    boutonRecherche2Style2:{
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
    
    boutonRecherche2Style2Appuyer:{
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
    textRecherche2Style2:{
        fontSize:18,
    },
    
    textRecherche2Style2Appuyer:{
        fontSize:18,
        color:"#0019A7"
    },
    textRecherche2Style3:{
        fontSize:18,
        color:"#0019A7"
    },
    viewRecherche2Style2:{
        marginLeft:50,
        marginTop:169.4
    },
    textRecherche2Style4:{
        fontSize:12
    },
    continuerRecherche2Style:{
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
    textRecherche2Style5:{
        fontSize:18,
        color:"rgba(0, 25, 167, 0.97)"
    }
})
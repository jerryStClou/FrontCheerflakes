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

const Situation = ({navigation})=>{
    const [celibataire, setCelibataire] = useState(false);
    const [separer, setSeparer] = useState(false);
    const [divorcer, setDivorcer] = useState(false);
    const [veuve, setVeuve] = useState(false);
    const [compliquer, setCompliquer] = useState(false);




    return(
        <ImageBackground  
         style={styles.containerSituation}
         source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
            <View  style={styles.ligneSituationStyle}></View>

            <View style={styles.viewSituationStyle}>
               <Text style={styles.textSituationStyle}>VOTRE SITUATION</Text>
               <Text style={styles.textSituationStyle}>ACTUELLE?</Text>
            </View>

            <TouchableOpacity 
            onPress={()=>{
                setCelibataire(!celibataire)
            }}
            style={celibataire == false? styles.boutonSituationStyle : styles.boutonSituationStyleAppuier}
            >
                <Text style={celibataire == false ? styles.textSituationStyle2 : styles.textSituationStyleAppuiyer }>Célibataire</Text>
            </TouchableOpacity> 
            
            <TouchableOpacity 
             onPress={()=>{
                setSeparer(!separer)
            }}
            style={separer == false ? styles.boutonSituationStyle2 : styles.boutonSituationStyleAppuier2}
            >
                <Text style={separer == false ? styles.textSituationStyle2 : styles.textSituationStyleAppuiyer }>Séparé.e</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
            onPress={()=>{
                setDivorcer(!divorcer)
            }}
            style={divorcer == false ? styles.boutonSituationStyle2 : styles.boutonSituationStyleAppuier2}
            >
                <Text style={divorcer == false ? styles.textSituationStyle2 : styles.textSituationStyleAppuiyer}>Divorcé.e</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>{
                setVeuve(!veuve)
            }}
            style={veuve == false ? styles.boutonSituationStyle2 : styles.boutonSituationStyleAppuier2}
            >
                <Text style={veuve == false ? styles.textSituationStyle2 : styles.textSituationStyleAppuiyer}>Veuf.ve</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
            onPress={()=>{
                setCompliquer(!compliquer)
            }}
            style={compliquer == false ? styles.boutonSituationStyle2: styles.boutonSituationStyleAppuier2}
            >
                <Text style={compliquer == false ? styles.textSituationStyle2 : styles.textSituationStyleAppuiyer}>C'est compliqué</Text>
            </TouchableOpacity>


            <View style={styles.viewSituationStyle2}>
               <Text style={styles.textSituationStyle4}>Choix unique</Text>
            </View>

            <TouchableOpacity 
            style={styles.continuerSituationStyle}
            onPress={()=>{navigation.navigate("votre orientation")}}
            >
               <Text style={styles.textSituationStyle5}>Continuer</Text>
            </TouchableOpacity>

        </ImageBackground>
    )
}


export default Situation;


const styles = StyleSheet.create({
    containerSituation:{
        width:"100vw",
        height:"100vh"
    },
      ligneSituationStyle:{
        width:"100%",
        height:"1px",
        backgroundColor:"black",
        top:50
    },
    viewSituationStyle:{
        marginTop:122,
    },
    textSituationStyle:{
        fontSize:24,
        fontWeight:"bold",
        margin:"auto"
    },
    boutonSituationStyle:{
        marginLeft:46,
        marginBottom:16.36,
        marginTop:50,
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
    boutonSituationStyleAppuier:{
        marginLeft:46,
        marginBottom:16.36,
        marginTop:50,
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
    boutonSituationStyle2:{
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
    boutonSituationStyleAppuier2:{
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
    textSituationStyle2:{
        fontSize:18
    },
    
    textSituationStyleAppuiyer:{
        fontSize:18,
        color:"#0019A7"
    },

    viewSituationStyle2:{
        marginLeft:50,
        marginTop:99
    },
    textSituationStyle4:{
        fontSize:12
    },
    continuerSituationStyle:{
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
    textSituationStyle5:{
        fontSize:18,
        color:"rgba(0, 25, 167, 0.97)"
    }
})
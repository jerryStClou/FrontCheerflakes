import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,StyleSheet
  } from 'react-native';
import React, {useState} from 'react';


const Orientation = ({navigation})=>{
    const [hetero, setHetero] = useState(false);
    const [homo, setHomo]= useState(false);
    const [bisexuel, setBisexuel] = useState(false)

    return(
        <ImageBackground  
         style={styles.containerOrientation}
         source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
            <View  style={styles.ligneOrientationStyle}></View>

        <View style={styles.viewOrientationStyle}>
         <Text style={styles.textOrientationStyle}>VOTRE ORIENTATION ?</Text>
        </View>
        <TouchableOpacity 
        style={hetero == false ? styles.boutonOrientationStyle: styles.boutonOrientationStyleAppuyer}
        onPress={()=>{
            setHetero(!hetero)
        }}
        >
            <Text style={hetero == false ? styles.textOrientationStyle2: styles.textOrientationStyle2Appuyer}>hétérosexuel.le</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
        onPress={()=>{
            setHomo(!homo)
        }}
        style={homo == false ? styles.boutonOrientationStyle2: styles.boutonOrientationStyle2Appuyer}
        >
            <Text style={homo == false ? styles.textOrientationStyle2: styles.textOrientationStyle2Appuyer}>Homosexuel.le</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=>{
            setBisexuel(!bisexuel)
        }}
        style={bisexuel == false ? styles.boutonOrientationStyle2 : styles.boutonOrientationStyle2Appuyer}
        >
            <Text style={bisexuel == false ? styles.textOrientationStyle2 : styles.textOrientationStyle2Appuyer}>Bisexuel.le</Text>
        </TouchableOpacity>

            <View style={styles.viewOrientationStyle2}>
                <Text style={styles.textOrientationStyle4}>Choix unique</Text>
            </View>
            <TouchableOpacity 
            style={styles.continuerOrientationStyle}
            onPress={()=>{
                navigation.navigate("votre recherche")
            }}
            >
                <Text style={styles.textOrientationStyle5}>Continuer</Text>
            </TouchableOpacity>

        </ImageBackground>
    )
}
export default Orientation;

const styles = StyleSheet.create({
    
    containerOrientation:{
        width:"100vw",
        height:"100vh",
        },
      ligneOrientationStyle:{
        width:"100%",
        height:"1px",
        backgroundColor:"black",
        top:50
    },
    viewOrientationStyle:{
        marginTop:122,
    },
    textOrientationStyle:{
        fontSize:24,
        fontWeight:"bold",
        margin:"auto"
    },
    boutonOrientationStyle:{
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
    boutonOrientationStyleAppuyer:{
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
    boutonOrientationStyle2:{
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
    
    boutonOrientationStyle2Appuyer:{
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
    textOrientationStyle2:{
        fontSize:18
    },
    
    textOrientationStyle2Appuyer:{
        fontSize:18,
        color:"#0019A7"
    },
    textOrientationStyle3:{
        fontSize:18,
        color:"#0019A7"
    },
    viewOrientationStyle2:{
        marginLeft:50,
        marginTop:235
    },
    textOrientationStyle4:{
        fontSize:12
    },
    continuerOrientationStyle:{
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
    textOrientationStyle5:{
        fontSize:18,
        color:"rgba(0, 25, 167, 0.97)"
    }
    })

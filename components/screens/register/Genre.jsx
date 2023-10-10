import { useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,StyleSheet
  } from 'react-native';
//   import Styles from '../../../assets/style/Styles';
  // import { BtnNext } from '../../composants/BtnNext';
  
  const Genre = ({navigation})=>{
    const [femme, setFemme] = useState(false);
     const [homme, setHomme] = useState(false);
     const [nonBinaire, setNonBinaire] = useState(false);


      return(
        <ImageBackground
        source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        style={styles.containerGenre}
        >
            <View style={styles.ligneGenre}></View>
            
            <View style={styles.viewGenreStyle}>
             <Text style={styles.textGenreStyle}>VOTRE GENRE</Text>
            </View>

            <TouchableOpacity  
            onPress={()=>{
                setFemme(!femme)
            }}style={femme == false ? styles.boutonGenreStyle:styles.boutonGenreStyleAppuyer}
            >
                <Text style={femme == false ? styles.textGenreStyle2:styles.textGenreStyle2Appuyer}>Femme</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>{
                setHomme(!homme)
            }}
            style={homme == false ? styles.boutonGenreStyle2: styles.boutonGenreStyle2Appuyer}
            >
                <Text style={homme == false ? styles.textGenreStyle2:styles.textGenreStyle2Appuyer}>Homme</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
            onPress={()=>{
                setNonBinaire(!nonBinaire)
            }}
            style={nonBinaire == false? styles.boutonGenreStyle2:styles.boutonGenreStyle2Appuyer}
            >
                <Text style={nonBinaire == false? styles.textGenreStyle2:styles.textGenreStyle2Appuyer}>Non Binaire</Text>
            </TouchableOpacity>
            
            <View style={styles.viewGenreStyle2}>
                <Text style={styles.textGenreStyle4}>Choix unique</Text>
            </View>
            
            <TouchableOpacity 
            style={styles.continuerGenreStyle}
            onPress={() =>
                navigation.navigate("votre date de naissance")
              }
            >
                <Text style={styles.textGenreStyle5}>Continuer</Text>
            </TouchableOpacity>

        </ImageBackground>
      )
  }
  
  export default Genre;
  
  const styles = StyleSheet.create({
    containerGenre:{
        width:"100vw",
        height:"100vh",
    },
    ligneGenre:{
        width:"100%",
        height:"1px",
        backgroundColor:"black",
        top:50
    },
    viewGenreStyle:{
        marginTop:122,
    },
    textGenreStyle:{
        fontSize:24,
        fontWeight:"bold",
        margin:"auto"
    },
    boutonGenreStyle:{
        marginLeft:46,
        marginBottom:16.36,
        marginTop:101,
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
    
    boutonGenreStyleAppuyer:{
        marginLeft:46,
        marginBottom:16.36,
        marginTop:101,
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
    textGenreStyle2:{
        fontSize:18
    },
    
    textGenreStyle2Appuyer:{
        fontSize:18,
        color:"#0019A7"
    },
    boutonGenreStyle2:{
        marginLeft:46,
        marginBottom:16.36,
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
    boutonGenreStyle2Appuyer:{
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
    viewGenreStyle2:{
        marginLeft:50,
        marginTop:233
    },
    textGenreStyle4:{
        fontSize:12
    },
    continuerGenreStyle:{
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
    textGenreStyle5:{
        fontSize:18,
        color:"rgba(0, 25, 167, 0.97)"
    }
  })
import { useState } from "react";
import { ImageBackground, StyleSheet, Image,View,Text} from "react-native"
import { TouchableOpacity } from "react-native-web";

const LoveCoach = ({ navigation })=>{
    const [radio1, setRadio1] = useState(false);
    const [radio2, setRadio2] = useState(true);
    const [buttonPressed, setButtonPressed] = useState();
    
    const checkoutRadio1 = ()=>{
        // setRadio1(!radio1)
        if(radio1 === false && radio2 === false)
        {
            setRadio2(false);
            setRadio1(true);
        }
        if(radio1 === true && radio2 === false)
        {
          setRadio2(false);
          setRadio1(true);
        }
        if(radio1 === false && radio2 === true)
        {
          setRadio2(false);
          setRadio1(true);
        }
      }
  
      
      const checkoutRadio2 = ()=>{
        // setRadio1(!radio2)
        if(radio2 === false && radio1 === false)
        {
            setRadio1(false);
            setRadio2(true);
        }
        if(radio2 === true && radio1 === false)
        {
          setRadio1(false);
          setRadio2(true);
        }
        if(radio2 === false && radio1 === true)
        {
          setRadio1(false);
          setRadio2(true);
        }
      }
  
  
    return(
        <ImageBackground 
        style={styles.containerLoveCoach}
        source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}
      >
        
        <Image
          style={styles.logoLoveCoachStyle}
          source={require('../../../assets/imagesSvg/Rectangle 94.svg')}
        />

        <View style={styles.viewLoveCoachStyle}>
              <Text style={styles.textLoveCoachStyle}>LOVE COACH</Text>
              <Text style={styles.textLoveCoachStyle2}>
                Nous sommes heureux de vous accompagner pour augmenter vos chances
                de matchs. En choisissant le programme gratuit LOVE COACH, nous vous
                proposerons des profils personnalisés de célibataires correspondant
                à vos attentes. Vous recevrez également des invitations aux
                événements près de chez vous et/ou dans la ville de votre choix.
              </Text>
        </View>
        <View style={[styles.RadioLoveCoach]}>
            <TouchableOpacity
            onPress={() => checkoutRadio1()}
            >
                <Image 
                        source={radio1 === true ? require('../../../assets/images/radio_selected.png') :  require('../../../assets/images/radio_unselected.png')}
                        style={styles.radioInputIconLoveCoach}
                />
            </TouchableOpacity>
            <Text style={[styles.textLoveCoachStyle3]}>Non, je peux me débrouiller</Text>
        </View>
        
        <View style={[styles.RadioLoveCoach, {marginTop:28}]}>
            <TouchableOpacity
            onPress={() => checkoutRadio2()}
            >
                <Image 
                        source={radio2 === true ? require('../../../assets/images/radio_selected.png') :  require('../../../assets/images/radio_unselected.png')}
                        style={styles.radioInputIconLoveCoach}
                />
            </TouchableOpacity>
            <Text style={[styles.textLoveCoachStyle3]}>Oui, c'est parfait</Text>
        </View>
        <View style={[styles.viewLoveCoachStyle2,{marginTop:90}]}>
            <Text style={styles.textLoveCoachStyle4}> Création du compte gratuit.</Text>
        </View>
        <View style={[styles.viewLoveCoachStyle2,{marginTop:12}]}>
            <Text style={styles.textLoveCoachStyle4}>Choix unique.</Text>
        </View>

        <TouchableOpacity
          style={styles.continuerLoveCoachStyle}
          onPress={() =>
            navigation.navigate("lien d'inscription")
          }
        >
            <Text style={styles.textContinuerLoveCoachStyle4}>Continuer</Text>
        </TouchableOpacity>
      </ImageBackground>
    )
}
export default LoveCoach;


const styles = StyleSheet.create({
    containerLoveCoach:{
        width:"100vw",
        height:"100vh"
    },
    logoLoveCoachStyle:{
        width:143,
        height:71,
        marginTop:16,
        marginLeft:24
    },
    viewLoveCoachStyle:{
        // flex: 1,
        width:318,
        height:285,
        marginLeft:29,
        marginTop:95
        // backgroundColor:"blue",
    },
    textLoveCoachStyle:{
        fontSize: 24,
        fontFamily: 'Comfortaa-Bold',
    },
    textLoveCoachStyle2:{
        fontSize: 15,
        fontFamily: 'Comfortaa',
    },
    RadioLoveCoach:{
        marginLeft:33,
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    nonRadioLoveCoach:{},
    radioInputIconLoveCoach:{
        width:25,
        height:25
    },
    textLoveCoachStyle3:{
        fontSize:13,
        fontFamily:"Comfortaa",
        marginLeft:7
    },
    viewLoveCoachStyle2:{
        width:291,
        height:15,
        marginLeft:50,
    },
    textLoveCoachStyle4:{
        fontSize:12,
        fontFamily:"Comfortaa"
    },
    continuerLoveCoachStyle:{
        width:331,
        height:56,
        marginLeft:30,
        marginTop:51,
        backgroundColor:"white",
        borderRadius:50
    },
    textContinuerLoveCoachStyle4:{
        color:"#0019A7",
        fontSize:18,
        margin:"auto",
        fontFamily:"Comfortaa"
    }
})
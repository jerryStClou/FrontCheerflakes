import { useState } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
  } from 'react-native';

  const DateDeNaissance = ({navigation}) => {
    const [genZ, setGenZ] = useState(false);
    const [genX, setGenX] = useState(false);
    const [millennials, setMillennials] = useState(false);
    const [boomer, setBoomer] = useState(false);



    return(
        <ImageBackground  
        style={styles.containerDateDeNaissance}
        source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}
        >
        <View style={styles.ligneDateDeNaissance}></View>
       
            
            <View style={styles.viewDateDeNaissanceStyle}>
                <Text style={styles.textDateDeNaissanceStyle}>VOTRE DATE</Text>
                <Text style={styles.textDateDeNaissanceStyle}>DE NAISSANCE ?</Text>
            </View>

           <SafeAreaView>
              <TouchableOpacity style={styles.boutonDateDeNaissanceStyle}>
                    <Text style={styles.textDateDeNaissanceStyle2}>DD/MM/AA</Text>
               </TouchableOpacity>
           </SafeAreaView>
           
           <View style={styles.viewDateDeNaissanceStyle2}>
                <Text style={styles.textDateDeNaissanceStyle3}>Catégorie automatique.</Text>
            </View>



            <View style={styles.viewDateDeNaissanceStyle4}>
                <TouchableOpacity 
                onPress={()=>{
                    setGenZ(!genZ)
                }}
                style={styles.viewRadioDateDeNaissanceStyle}
                >
                    <Image
                        source={genZ == false ? require('../../../assets/images/radio_unselected.png'):require('../../../assets/images/radio_selected.png')}
                        style={styles.ImageRadioDateDeNaissanceStyle}
                    />
                    <View  style={styles.viewDateDeNaissanceStyle3}>
                      <Text style={styles.textDateDeNaissanceStyle4}>Gen z</Text>
                      <Text style={styles.textDateDeNaissanceStyle4}>(18 - 23 ans)</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    setGenX(!genX)
                }}
                style={styles.viewRadioDateDeNaissanceStyle}
                >
                    <Image
                        source={genX == false ? require('../../../assets/images/radio_unselected.png'):require('../../../assets/images/radio_selected.png')}
                        style={styles.ImageRadioDateDeNaissanceStyle}
                    />
                    <View  style={styles.viewDateDeNaissanceStyle3}>
                      <Text style={styles.textDateDeNaissanceStyle4}>Gen x</Text>
                      <Text style={styles.textDateDeNaissanceStyle4}>(38 - 56 ans)</Text>
                    </View>
                </TouchableOpacity>

                
            </View>



            <View style={styles.viewDateDeNaissanceStyle4}>
                <TouchableOpacity 
                onPress={()=>{
                    setMillennials(!millennials)
                }}
                style={styles.viewRadioDateDeNaissanceStyle}
                >
                    <Image
                        source={millennials==false?require('../../../assets/images/radio_unselected.png'):require('../../../assets/images/radio_selected.png')}
                        style={styles.ImageRadioDateDeNaissanceStyle}
                    />
                    <View  style={styles.viewDateDeNaissanceStyle3}>
                      <Text style={styles.textDateDeNaissanceStyle4}>MILLENNIALS</Text>
                      <Text style={styles.textDateDeNaissanceStyle4}>(24 - 37 ans)</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>{
                    setBoomer(!boomer)
                }}
                style={styles.viewRadioDateDeNaissanceStyle}
                >
                    <Image
                        source={boomer == false ? require('../../../assets/images/radio_unselected.png'):require('../../../assets/images/radio_selected.png')}
                        style={styles.ImageRadioDateDeNaissanceStyle}
                    />
                    <View  style={styles.viewDateDeNaissanceStyle3}>
                      <Text style={styles.textDateDeNaissanceStyle4}>BOOMER</Text>
                      <Text style={styles.textDateDeNaissanceStyle4}>(57 - 77 ans)</Text>
                    </View>
                </TouchableOpacity>
            </View>

            
            <View style={styles.viewDateDeNaissanceStyle5}>
                <Text style={styles.textDateDeNaissanceStyle5}>Choix unique</Text>
            </View>

            <TouchableOpacity 
            style={styles.continuerDateDeNaissanceStyle5}
            onPress={() =>
                navigation.navigate("votre taille")
              }
            >
                <Text style={styles.textDateDeNaissanceStyle6}>Continuer</Text>
            </TouchableOpacity>

        </ImageBackground>
    )
  }

  
export default DateDeNaissance;


const styles = StyleSheet.create({
    containerDateDeNaissance:{
        width:"100vw",
        height:"100vh",
    },
    ligneDateDeNaissance:{
        width:"100%",
        height:"1px",
        backgroundColor:"black",
        top:50
    },
    viewDateDeNaissanceStyle:{
        marginTop:122,
        marginBottom:77
    },
    textDateDeNaissanceStyle:{
        fontSize:24,
        margin:"auto",
        fontWeight:"bold"
    },
    boutonDateDeNaissanceStyle:{
        width:300,
        height:106,
        borderColor:"#0019A7",
        borderWidth:"1px",
        borderStyle:"solid",
        borderRadius:50,
        marginLeft:46,
        marginBottom:44,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    textDateDeNaissanceStyle2:{
        fontSize:18
    },
    viewDateDeNaissanceStyle2:{
        marginLeft:70,
    },
    textDateDeNaissanceStyle3:{
        fontSize:12
    },
    
    viewDateDeNaissanceStyle4:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        // justifyContent:"space-around"
    },
    viewRadioDateDeNaissanceStyle:{
        // width:"100%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        marginTop:43
    },
    ImageRadioDateDeNaissanceStyle:{
        width:25,
        height:25,
        marginLeft:55
    },
    viewDateDeNaissanceStyle3:{
        marginLeft:7,
        marginRight:20
    },
    textDateDeNaissanceStyle4:{
        fontSize:13,
        fontFamily:"Comfortaa"
    },
    viewDateDeNaissanceStyle5:{
        marginTop:91,
        marginLeft:50
    },
    textDateDeNaissanceStyle5:{
        fontSize:12
    },
    continuerDateDeNaissanceStyle5:{
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
    textDateDeNaissanceStyle6:{
        fontSize:18,
        color:"rgba(0, 25, 167, 0.97)"
    }
})
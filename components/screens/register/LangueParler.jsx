import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    Modal,
    StyleSheet,
  } from 'react-native';
//   import {BlurView} from '@react-native-community/blur';
  import Styles from '../../../assets/style/Styles';
  import {NativeModules} from 'react-native';
  import { useState } from 'react';
  // import { BtnNext } from '../../composants/BtnNext';
  
  const LangueParler = ({navigation})=>{
    const [selectedValues, setSelectedValues] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedLang] = useState();


    const [francais, setFrancais] = useState(false);
    const [anglais, setAnglais] = useState(false);
    const [espagnole, setEspangonle] = useState(false);
    const [allemand, setAllemand] = useState(false);
    const [neerlandais, setNeerlandais] = useState(false);
    const [italien, setItalien] = useState(false);
    const [portugais, setPortugais] = useState(false);
    const [arabe, setArabe] = useState(false);
    const [polonais, setPolonais] = useState(false);
    const [grec, setGrec] = useState(false);
    const [chinois, setChinois] = useState(false);
    const [japonais, setJaponais] = useState(false);













    // const {I18nManager} = NativeModules;
    // const currentLocale = I18nManager.localeIdentifier;

    
//   if (currentLocale === 'fr_FR') {
//     localeLang = 'Français';
//   } else if (currentLocale === 'es_ES') {
//     localeLang = 'Espagnol';
//   } else if (currentLocale === 'nl_NL') {
//     localeLang = 'Néerlandais';
//   } else if (currentLocale === 'pt_PT') {
//     localeLang = 'Portugais';
//   } else if (currentLocale === 'pl_PL') {
//     localeLang = 'Polonais';
//   } else if (currentLocale === 'zh_CN') {
//     localeLang = 'Chinois';
//   } else if (currentLocale === 'en_US') {
//     localeLang = 'Anglais';
//   } else if (currentLocale === 'de_DE') {
//     localeLang = 'Allemand';
//   } else if (currentLocale === 'it_IT') {
//     localeLang = 'Italien';
//   } else if (currentLocale === 'ar_SA') {
//     localeLang = 'Arabe';
//   } else if (currentLocale === 'el_GR') {
//     localeLang = 'Grec';
//   } else if (currentLocale === 'ja_JP') {
//     localeLang = 'Japonais';
//   }


//   const handleSelection = value => {
//     if (selectedValues.includes(value)) {
//       setSelectedValues(selectedValues.filter(val => val !== value));
//     } else {
//       setSelectedValues([...selectedValues, value]);
//     }

//     if (value == [1]) {
//       inputValue = 'Français';
//     } else if (value == [2]) {
//       inputValue = 'Espagnol';
//     } else if (value == [3]) {
//       inputValue = 'Néerlandais';
//     } else if (value == [4]) {
//       inputValue = 'Portugais';
//     } else if (value == [5]) {
//       inputValue = 'Polonais';
//     } else if (value == [6]) {
//       inputValue = 'Chinois';
//     } else if (value == [7]) {
//       inputValue = 'Anglais';
//     } else if (value == [8]) {
//       inputValue = 'Allemand';
//     } else if (value == [9]) {
//       inputValue = 'Italien';
//     } else if (value == [10]) {
//       inputValue = 'Arabe';
//     } else if (value == [11]) {
//       inputValue = 'Grec';
//     } else if (value == [12]) {
//       inputValue = 'Japonais';
//     }
//     // console.log(selectedValues);
//   };

  
//   const lang =
//     'Natif ICU: ' +
//     currentLocale +
//     '; Langue: ' +
//     localeLang +
//     '; Langues choisi: ' +
//     [selectedValues];
//   console.log(lang);




    return(
        <ImageBackground  
        style={styles.containerLangueParler}
        source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}  
        >
            <View  style={styles.ligneLangueParlerStyle}></View>

        <View style={styles.viewLangueParlerStyle}>
          <Text style={styles.textLangueParlerStyle}>LANGUE PARLÉES ?</Text>
        </View>
        <View style={[styles.viewLangueParlerStyle2,{marginTop:100}]}>
            <TouchableOpacity
              onPress={()=>{
                setFrancais(!francais)
              }}
              style={styles.viewLangueParlerStyle3}
            >
                <Image
                    source={francais==false
                    ? require('../../../assets/images/radio_unselected.png')
                    : require('../../../assets/images/radio_selected.png')}
                    style={styles.ImageRadioLangueParlerStyle}
                />
                <View  style={styles.viewLangueParlerStyle4}>
                  <Text style={styles.textLangueParlerStyle2}>Français</Text>
                </View>
            </TouchableOpacity>

            
            <TouchableOpacity 
            style={[styles.viewLangueParlerStyle3,{marginLeft:20}]}
             onPress={() => setAnglais(!anglais)}
            accessibilityLabel="Anglais"
            >
                <Image
                    source={anglais==false
                    ? require('../../../assets/images/radio_unselected.png')
                    : require('../../../assets/images/radio_selected.png')}
                    style={styles.ImageRadioLangueParlerStyle}
                />
                <View  style={styles.viewLangueParlerStyle4}>
                  <Text style={styles.textLangueParlerStyle2}>Anglais</Text>
                </View>
                
            </TouchableOpacity>
        </View>
        
        <View style={[styles.viewLangueParlerStyle2,{marginTop:20}]}>
            <TouchableOpacity 
            style={styles.viewLangueParlerStyle3}
            onPress={() => setEspangonle(!espagnole)}
            accessibilityLabel="Espagnol"
            >
                <Image
                    source={espagnole==false
                    ? require('../../../assets/images/radio_unselected.png')
                    : require('../../../assets/images/radio_selected.png')}
                    style={styles.ImageRadioLangueParlerStyle}
                />
                <View  style={styles.viewLangueParlerStyle4}>
                  <Text style={styles.textLangueParlerStyle2}>Espagnol</Text>
                  <Text style={styles.textLangueParlerStyle2}>Castillan</Text>
                </View>
                
            </TouchableOpacity>
            
            <TouchableOpacity 
            style={[styles.viewLangueParlerStyle3,{marginLeft:20}]}
            onPress={() => setAllemand(!allemand)}
            accessibilityLabel="Allemand"
            >
                <Image
                    source={allemand==false
                    ? require('../../../assets/images/radio_unselected.png')
                    : require('../../../assets/images/radio_selected.png')}
                    style={styles.ImageRadioLangueParlerStyle}
                />
                <View  style={styles.viewLangueParlerStyle4}>
                  <Text style={styles.textLangueParlerStyle2}>Allemand</Text>
                </View>
                
            </TouchableOpacity>
        </View>

                
        <View style={[styles.viewLangueParlerStyle2,{marginTop:20}]}>
            <TouchableOpacity style={styles.viewLangueParlerStyle3}
            onPress={() => setNeerlandais(!neerlandais)}
            accessibilityLabel="Néerlandais"
            >
                <Image
                    source={neerlandais==false
                    ? require('../../../assets/images/radio_unselected.png')
                    : require('../../../assets/images/radio_selected.png')}
                    style={styles.ImageRadioLangueParlerStyle}
                />
                <View  style={styles.viewLangueParlerStyle4}>
                  <Text style={styles.textLangueParlerStyle2}>Néerlandais</Text>
                </View>
                
            </TouchableOpacity>
            
            <TouchableOpacity 
            style={[styles.viewLangueParlerStyle3,{marginLeft:20}]}
            onPress={() => setItalien(!italien)}
            accessibilityLabel="Italien"
            >
                <Image
                    source={italien==false
                    ? require('../../../assets/images/radio_unselected.png')
                    : require('../../../assets/images/radio_selected.png')}
                    style={styles.ImageRadioLangueParlerStyle}
                />
                <View  style={styles.viewLangueParlerStyle4}>
                  <Text style={styles.textLangueParlerStyle2}>Italien</Text>
                </View>
                
            </TouchableOpacity>
        </View>
                       
        <View style={[styles.viewLangueParlerStyle2,{marginTop:20}]}>
            <TouchableOpacity 
            style={styles.viewLangueParlerStyle3}
            onPress={() => setPortugais(!portugais)}
            accessibilityLabel="Portugais"
            >
                <Image
                    source={portugais==false
                    ? require('../../../assets/images/radio_unselected.png')
                    : require('../../../assets/images/radio_selected.png')}
                    style={styles.ImageRadioLangueParlerStyle}
                />
                <View  style={styles.viewLangueParlerStyle4}>
                  <Text style={styles.textLangueParlerStyle2}>Portugais</Text>
                </View>
                
            </TouchableOpacity>
            
            <TouchableOpacity 
            style={[styles.viewLangueParlerStyle3,{marginLeft:20}]}
            onPress={() => setArabe(!arabe)}
            accessibilityLabel="Arabe"
            >
                <Image
                    source={arabe==false
                    ? require('../../../assets/images/radio_unselected.png')
                    : require('../../../assets/images/radio_selected.png')}
                    style={styles.ImageRadioLangueParlerStyle}
                />
                <View  style={styles.viewLangueParlerStyle4}>
                  <Text style={styles.textLangueParlerStyle2}>Arabe</Text>
                </View>
                
            </TouchableOpacity>
        </View> 

        <View style={[styles.viewLangueParlerStyle2,{marginTop:20}]}>
            <TouchableOpacity 
            style={styles.viewLangueParlerStyle3}
            onPress={() => setPolonais(!polonais)}
             accessibilityLabel="Polonais"
            >
                <Image
                    source={polonais==false
                    ? require('../../../assets/images/radio_unselected.png')
                    : require('../../../assets/images/radio_selected.png')}
                    style={styles.ImageRadioLangueParlerStyle}
                />
                <View  style={styles.viewLangueParlerStyle4}>
                  <Text style={styles.textLangueParlerStyle2}>Polonais</Text>
                </View>
                
            </TouchableOpacity>
            
            <TouchableOpacity 
            style={[styles.viewLangueParlerStyle3,{marginLeft:20}]}
            onPress={() => setGrec(!grec)}
            accessibilityLabel="Grec"
            >
                <Image
                    source={grec==false
                    ? require('../../../assets/images/radio_unselected.png')
                    : require('../../../assets/images/radio_selected.png')}
                    style={styles.ImageRadioLangueParlerStyle}
                />
                <View  style={styles.viewLangueParlerStyle4}>
                  <Text style={styles.textLangueParlerStyle2}>Grec</Text>
                </View>
                
            </TouchableOpacity>
        </View>
        
        <View style={[styles.viewLangueParlerStyle2,{marginTop:20}]}>
            <TouchableOpacity 
            style={styles.viewLangueParlerStyle3} 
            onPress={() => setChinois(!chinois)}
            accessibilityLabel="Chinois"
            >
                <Image
                    source={chinois==false
                    ? require('../../../assets/images/radio_unselected.png')
                    : require('../../../assets/images/radio_selected.png')}
                    style={styles.ImageRadioLangueParlerStyle}
                />
                <View  style={styles.viewLangueParlerStyle4}>
                  <Text style={styles.textLangueParlerStyle2}>Chinois</Text>
                  <Text style={styles.textLangueParlerStyle2}>mandarin</Text>
                </View>
                
            </TouchableOpacity>
            
            <TouchableOpacity 
            style={[styles.viewLangueParlerStyle3,{marginLeft:20}]}
            onPress={() => setJaponais(!japonais)}
            accessibilityLabel="Japonais"
            >
                <Image
                    source={japonais==false
                    ? require('../../../assets/images/radio_unselected.png')
                    : require('../../../assets/images/radio_selected.png')}
                    style={styles.ImageRadioLangueParlerStyle}
                />
                <View  style={styles.viewLangueParlerStyle4}>
                  <Text style={styles.textLangueParlerStyle2}>Japonais</Text>
                </View>
                
            </TouchableOpacity>
        </View>
        
        <View style={styles.viewLangueParlerStyle5}>
            <Text style={styles.textLangueParlerStyle3}>Choix multiples.</Text>
        </View>

        <View style={styles.ligneLangueParlerStyle2}>

        </View>

        <TouchableOpacity
           style={styles.touchLangueParlerStyle}
        //    onPress={() => setModalVisible(false)}
           accessibilityLabel="Afficher Modal"
        >
            <View style={styles.viewLangueParlerStyle7}>
               <Text style={styles.textLangueParlerStyle4}>Français</Text>
                <Image
                  style={styles.imageLangueParlerStyle}
                  source={require('../../../assets/imagesSvg/flèche2.svg')}
                />
            </View>
        </TouchableOpacity>

        <View style={styles.viewLangueParlerStyle6}>
            <Text style={styles.textLangueParlerStyle5}>
            Langue de votre appareil.
            </Text>
        </View>
        
        <TouchableOpacity 
             style={styles.continuerLangueParlerStyle}
             onPress={() =>
               navigation.navigate("votre situation actuel")
             }
             >
                 <Text style={styles.continuerTextLangueParlerStyle}>Continuer</Text>
            </TouchableOpacity>

            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
            >
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  accessibilityLabel="Fermer Modal"
                >
                    <Image key={'blurryImage'} style={styles.absolute} />
                    {/* <BlurView
                      style={styles.absolute}
                      blurType="light"
                      blurAmount={10}
                      reducedTransparencyFallbackColor="white"
                    /> */}
                    <View style={styles.modal}>
                        <TouchableOpacity
                        // onPress={() => {
                        //     setSelectedLang(localeLang);
                        //     setModalVisible(false);
                        //   }}
                        >
                            <Text style={styles.item}>
                                   localeLang
                            </Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>



        </ImageBackground>
    )
  }

  export default LangueParler;

const styles = StyleSheet.create({
    containerLangueParler:{
        width:"100vw",
        height:"100vh",
     },
     ligneLangueParlerStyle:{
        width:"100%",
        height:"1px",
        backgroundColor:"black",
        top:50
    },
     viewLangueParlerStyle:{
         marginTop:122,
 
     },
     textLangueParlerStyle:{
         fontSize:24,
         fontFamily:"Comfortaa",
         textAlign:"center",
         fontWeight:"bold"
     },
    viewLangueParlerStyle2:{
        width:326,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:55
    },
    viewLangueParlerStyle3:{
        width:126,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    ImageRadioLangueParlerStyle:{
        width:25,
        height:25
    },
    viewLangueParlerStyle4:{
        width:92
    },
    textLangueParlerStyle2:{
        fontSize:13,
        fontFamily:"Comfortaa",
        marginLeft:9
    },
    viewLangueParlerStyle5:{
        marginLeft:49,
        marginTop:60
    },
    textLangueParlerStyle3:{
        fontSize:12,
        fontFamily:"Comfortaa",
    },
    ligneLangueParlerStyle2:{
        width:298,
        height:"2px",
        marginTop:17,
        marginLeft:46,
        backgroundColor:"rgba(0, 25, 167, 0.97)"
    },
    touchLangueParlerStyle:{
        width:300,
        height:59,
        marginTop:17,
        marginLeft:45,
        borderColor:"white",
        borderWidth:1,
        borderStyle:"solid",
        borderRadius:50,
    },
    viewLangueParlerStyle7:{
        width:266,
        height:26,
        margin:"auto",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"space-around"
    },
    textLangueParlerStyle4:{
        color:"#737373",
        fontSize:18,
        fontFamily:"Comfortaa",
    },
    imageLangueParlerStyle:{
        width:10,
        height:20,
        marginLeft:30
    },
    viewLangueParlerStyle6:{
        width:230,
        height:21,
        marginLeft:80,
        marginTop:13,
    },
    textLangueParlerStyle5:{
        fontSize:15,
        fontFamily:"Comfortaa"
    },
    continuerLangueParlerStyle:{
       marginTop:30,
       marginLeft:36,
       width:331,
       height:56,
       borderRadius:50,
       backgroundColor:"white",
       display:"flex",
       justifyContent:"center",
       alignItems:"center"
    },
    continuerTextLangueParlerStyle:{
      fontSize:18,
      color:"rgba(0, 25, 167, 0.97)"
    },
    absolute:{
        position: 'absolute',
        top: 510,
        height: 90,
        width: '100%',
        alignSelf: 'center',
        borderRadius: 50,
    },
    modal:{
        backgroundColor: 'transparent',
        borderRadius: 10,
        padding: 10,
        width: '60%',
        alignSelf: 'center',
        marginTop: '50%',
        top: 340,
    },
    item:{
        fontSize: 18,
        padding: 10,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Comfortaa',
        fontSize: 20,
    }
    })
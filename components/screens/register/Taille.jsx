import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList
} from 'react-native';
import Styles from '../../../assets/style/Styles';

const Taille = ({navigation}) =>{

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [taille, setTaille] = useState();
    
  const handlePress = value => {
    setTaille(value);
    setSelectedIndex(value);
  };

  const scrollViewRef = useRef();

  const scrollDown = () => {
    scrollViewRef.current.scrollToOffset({offset: 10000, animated: true});
  };

  const scrollUp = () => {
    scrollViewRef.current.scrollToOffset({offset: 0, animated: true});
  };

    
  const Data = [];
  for (let i = 140; i <= 250; i++) {
    let value = i;
    Data.push({index: i, value: value + ' cm'});
  }


  
  const renderItem = ({item}) => (
    <View
      style={{
        width: 194,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        alignSelf: 'center',
      }}>
      <TouchableOpacity
        style={Styles.btn}
        onPress={() => handlePress(item.value)}
        accessibilityLabel={item.value}>
        <Text
          style={
            selectedIndex === item.value
              ? styles.SelectedText
              : styles.NotSelectedText
          }>
          {item.value}
        </Text>
      </TouchableOpacity>
    </View>
  );

    return(
       
       <ImageBackground  
       style={styles.containerTaille}
       source={require('../../../assets/imageBackground/BackgroundCheerFlakes.png')}
       >
           <View style={styles.ligneTaille}></View>
           <View style={styles.viewTailleStyle}>
            <Text style={styles.textTailleStyle}>VOTRE TAILLE ?</Text>
           </View>
           <View style={styles.viewTailleStyle2}>
            <SafeAreaView style={styles.safeAreaViewTailleStyle}>
            <FlatList
                ref={scrollViewRef}
                style={{height:130,alignSelf:'center'}}
                data={Data}
                initialNumToRender={3}
                refreshing={true}
                progressViewOffset={1}
                renderItem={renderItem}
                keyExtractor={item => item.index.toString()}
              />
            </SafeAreaView>
            <View style={styles.viewTailleStyle3}>
                <TouchableOpacity  
                style={styles.touchTailleStyle}
                onPress={scrollUp}
                accessibilityLabel="Monter"
                >
                    <Image
                      source={require('../../../assets/imagesSvg/Arrow 1.svg')}
                      style={{height: 70, width:10}}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.touchTailleStyle2}
                onPress={scrollDown}
                >
                  <Image
                    source={require('../../../assets/imagesSvg/Arrow 2.svg')}
                    style={{height: 55, width:10}}
                  />
                </TouchableOpacity>

            </View>
           </View>

           
           <View style={styles.choixTailleStyle}>
                <Text style={styles.textChoixTailleStyle}>Choix unique</Text>
            </View>

            
            <TouchableOpacity 
            style={styles.continuerTailleStyle}
            onPress={() =>
                navigation.navigate("vos langues")
              }
            >
                <Text style={styles.textContinuerTailleStyle}>Continuer</Text>
            </TouchableOpacity>


       </ImageBackground>
    )
}
export default Taille ;


const styles = StyleSheet.create({
   containerTaille:{
       width:"100vw",
       height:"100vh",
   },
   ligneTaille:{
       width:"100%",
       height:"1px",
       backgroundColor:"black",
       top:50
   },
   viewTailleStyle:{
    marginTop:122,
   },
   textTailleStyle:{
    fontSize:24,
    textAlign:"center",
    fontWeight:"bold"
   },
   viewTailleStyle2:{
    flexDirection: 'row',
    height:140, 
    width:'80%',
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    marginTop:150
},
safeAreaViewTailleStyle:{
    top: 0, 
    justifyContent:'center',
},
SelectedText:{
    textAlign: 'center',
    alignSelf:'center',
    color: '#0F0BAE',
    fontFamily: 'Comfortaa-Bold',
    fontSize: 20,
    width: 80,
},
NotSelectedText:{
    textAlign: 'center',
    alignSelf:'center',
    color: 'black',
    fontFamily: 'Comfortaa',
    fontSize: 18,
    width: 80,
},
viewTailleStyle3:{
    flexDirection: 'column',
    height:130, 
    top:5, 
    left:20,
    alignItems:'center',
},
touchTailleStyle:{
    top:10,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
},
touchTailleStyle2:{
  width: 20,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'flex-end',
  bottom:10,
},

choixTailleStyle:{
    marginTop:253,
    marginLeft:50
},
textChoixTailleStyle:{
    fontSize:12
},
continuerTailleStyle:{
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
    textContinuerTailleStyle:{
        fontSize:18,
        color:"rgba(0, 25, 167, 0.97)"
    }
    
})
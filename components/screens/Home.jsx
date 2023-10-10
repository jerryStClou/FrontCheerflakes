import { useEffect } from 'react';
import {View,ImageBackground,Image,StyleSheet} from 'react-native';

const Home = ({navigation})=>{
    useEffect(() => {
        const timeout = setTimeout(() => {
          navigation.navigate('Home Next');
        }, 2000);
    
        return () => clearTimeout(timeout);
      }, [navigation]);

  return(
    <ImageBackground
      style={styles.HomeContainer}
      source={require('../../assets/imageBackground/BackgroundCheerFlakes.png')}
    >
        <View style={styles.ViewLogo1}>
            <Image
              style={styles.logo1}
              source={require('../../assets/imagesSvg/Rectangle 94.svg')}
            />
        </View>
    </ImageBackground>
  )
}

export default Home;


const styles = StyleSheet.create({
    HomeContainer: {
    width:"100vw",
    height:"100vh"
  },
  ViewLogo1: {
    width:"100vw",
    height:"100vh",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  logo1: {
    resizeMode: 'contain',
    width: 250,
    height: 100,
    alignSelf: 'center',
  },
});
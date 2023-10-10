import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import Styles from '../../assets/style/Styles';

const Logo = () => {
  return (
    <View style={styles.ViewLogo2}>
      <Image
        style={styles.logo2}
        // source={require('../../assets/images/logo.png')}
        source={require('../../assets/imagesSvg/Rectangle 94.svg')}

      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  ViewLogo2: {
    // flex: 1, 
    width:"30%",
    height:"7%",
    // backgroundColor:"green",
    marginLeft:"10%"
  },
  logo2: {
    resizeMode: 'contain',
    // width: 210,
    // height: 60,
    width:"100%",
    height:"100%",
    // backgroundColor:"blue"
    // marginLeft:"10%"
  },
});
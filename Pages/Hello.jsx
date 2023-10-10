import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function Hello({ navigation }){
    return(
        <View style={styles.containerHello}>
        <TouchableOpacity style={{margin:"auto"}}
        onPress={() => navigation.navigate('Bonjour')}>
            <Text style={styles.textHelloStyle}>Hello</Text>
        </TouchableOpacity>
        
      </View>
    )
}


const styles = StyleSheet.create({
    containerHello: {
        width:"100vw",
        height:"100vh",
        backgroundColor:"#73a2ab"
    },
    textHelloStyle:{
        margin:"auto",
        fontSize:"40px"
    }
  });
  
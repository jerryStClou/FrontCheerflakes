import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function Bonjour({ navigation }){
    return(
        <View style={styles.containerHello}>
        <TouchableOpacity style={{margin:"auto"}}
        onPress={() => navigation.navigate('Hello')}>
            <Text style={styles.textHelloStyle}>Bonjour</Text>
        </TouchableOpacity>
        
      </View>
    )
}


const styles = StyleSheet.create({
    containerHello: {
        width:"100vw",
        height:"100vh",
        backgroundColor:"#f5e87b"
    },
    textHelloStyle:{
        margin:"auto",
        fontSize:"40px"
    }
  });
  
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInMail from './components/screens/register/SinscrireMail';
import Home from './components/screens/Home';
import HomeStackNext from './components/screens/HomeStackNext';
import Bienvenue from './components/screens/Bienvenue';
import CreationEtDeveloppement from './components/screens/CreationEtDeveloppement';

// import Hello from './Pages/Hello';
// import Bonjour from './Pages/Bonjour';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoveCoach from './components/screens/register/LoveCoach';
import LinksSignIn from './components/screens/register/LinksSignIn';
import ConfirmationEmail from './components/screens/register/ConfirmationEmail';
import Ville from './components/screens/register/Ville';
import AccesPosition from './components/screens/register/AccesPosition';
import Genre from './components/screens/register/Genre.jsx';
import DateDeNaissance from './components/screens/register/DateDeNaissance';
import Taille from './components/screens/register/Taille';
import LangueParler from './components/screens/register/LangueParler';
import Situation from './components/screens/register/Situation';
import Orientation from './components/screens/register/Orientation';
import Recherche1 from './components/screens/register/Recherche1';
import Recherche2 from './components/screens/register/Recherche2';
import Objectifs from './components/screens/register/Objectifs';
import Affinite from './components/screens/register/Affinite';
import RythmeDeVie1 from './components/screens/register/RythmeDeVie1';
import RythmeDeVie2 from './components/screens/register/RythmeDeVie2';
import Identifiant from './components/screens/register/Identifiant';
import Prenom from './components/screens/register/Prenom';
import ProfilMultiples from './components/screens/register/ProfilMultiples';
import Prenium from './components/screens/register/Prenium';
import Compte from './components/screens/register/Compte';
import AjoutPhoto from './components/screens/register/AjoutPhoto';
import CharteEngagement from './components/screens/register/CharteEngagement';
import Felicitations from './components/screens/register/Felicitations';
import EmpreinteVocal from './components/screens/register/EmpreinteVocal';
import Verification from './components/screens/register/Verification';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View>
       <NavigationContainer> 
      <Stack.Navigator> 
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Home Next" component={HomeStackNext} options={{ headerShown: false }} />
        <Stack.Screen name="Bienvenue" component={Bienvenue} options={{ headerShown: false }} />
        <Stack.Screen name="Creationetdeveloppement" component={CreationEtDeveloppement} options={{ headerShown: false }} />
        <Stack.Screen name="love coach" component={LoveCoach} options={{ headerShown: false }} />
        <Stack.Screen name="lien d'inscription" component={LinksSignIn} options={{ headerShown: false }} />
        <Stack.Screen name="S'inscrire par mail" component={SignInMail} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Confirmation email" component={ConfirmationEmail} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="ville" component={Ville} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="autorisez l'accès à votre position" component={AccesPosition} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="votre genre" component={Genre} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="votre date de naissance" component={DateDeNaissance} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="votre taille" component={Taille} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="vos langues" component={LangueParler} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="votre situation actuel" component={Situation} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="votre orientation" component={Orientation} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="votre recherche" component={Recherche1} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="suite de votre recherche" component={Recherche2} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="vos objectifs" component={Objectifs} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="vos affiniter" component={Affinite} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="votre rythme de vie" component={RythmeDeVie1} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="suite de votre rythme de vie" component={RythmeDeVie2} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="Votre identifiant" component={Identifiant} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="votre prénom" component={Prenom} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="votre profil multiple" component={ProfilMultiples} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="votre abonnement premium" component={Prenium} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="votre compte" component={Compte} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="ajouter une photo" component={AjoutPhoto} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="empreinte vocal" component={EmpreinteVocal} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="charte d'engagement" component={CharteEngagement} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="felicitaion" component={Felicitations} options={{ headerShown: true, title: 'Retour', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />
        <Stack.Screen name="vérification" component={Verification} options={{ headerShown: true, title: '', headerTransparent: true, headerTintColor: 'black', headerTintStyle: { borderBottomColor: 'black', borderBottomWidth: 2 } }} />

       </Stack.Navigator>
      </NavigationContainer> 
       {/* <Bienvenue/> */}
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

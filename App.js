// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
const App = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail]= useState('');
    const [senha, setSenha]= useState('');

    const onChangeNome = (value)=>{

      if(value.length<=2){
        console.log('Incorreto')
        
      }else{
        console.log('Correto')      }
      setNome(value)
    }
    return (
        <View style={styles.container}>
    <StatusBar hidden/>
    <TextInput 
    placeholder='Seu Nome...' 
    style={styles.textInput} 
    onChangeText={onChangeNome}
    value={nome}
    />
    

    <TextInput placeholder='Seu e-mail...' 
    style={styles.textInput} 
    onChangeText={text=>setEmail (text)}
    />
    <TextInput secureTextEntry={true} 
    placeholder='Sua Senha...' 
    style={styles.textInput}
    onChangeText={text=>setSenha (text)}
    />
        
    </View>
    );
   
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1c1f1d',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 23,
    
    },
    textInput:{
        width:'100%',
        height: 40,
        backgroundColor: 'white',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 10,

    }
})

export default App;
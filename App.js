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
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const App = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail]= useState('');
    const [senha, setSenha]= useState('');
    const [errorNome, setErrorNome] = useState(null);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorSenha, setErrorSenha] = useState(null);
  
    // const onChangeNome = (value)=>{
    //   if(value.length<=2){
    //     console.log('Incorreto')   
    //   }else{
    //     console.log('Correto')      }
    //   setNome(value)
    const cadastro = () =>{
      if(email ===""){
        setErrorEmail("E-mail inválido, tente novamente!")
        // error = true
        alert("Ok")
      salvar()
      }
      
    }
    const salvar= ()=>{
      if(validacao()){
        console.log("Salvouu")
      }
    }
    const validacao= ()=>{
      // let error = false
      
      // return !error
    }
  

    
    return (
        <View style={styles.container}>
    <StatusBar hidden/>
    <TextInput 
    placeholder='Seu Nome...' 
    style={styles.textInput} 
    onChangeText={text=>{setNome (text), setErrorNome(null)}}
    errorMensage={errorNome}
    />
    

    <TextInput placeholder='name@gmail.com' 
    style={styles.textInput} 
    onChangeText={text=>{setEmail (text), setErrorEmail(null)} }
    errorMensage={errorEmail}

    />
    <TextInput secureTextEntry={true} 
    placeholder='Sua Senha...' 
    style={styles.textInput}
    onChangeText={text=>setSenha (text)}
    errorMensage={errorSenha}

    />
          {email === 'true' ? <Text>E-mail inválido, tente novamente!</Text> : <></> }

        <TouchableOpacity style={styles.button} onPress={cadastro}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
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
        marginBottom: 26,

    },
    button:{
      backgroundColor: 'yellow',
      padding: 15,
      marginTop: 20,
      borderRadius: 20,
      justifyContent: 'center',

    }
})

export default App;
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Forms = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail]= useState('');
    const [senha, setSenha]= useState('');
    const [errorNome, setErrorNome] = useState(null);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorSenha, setErrorSenha] = useState(null);
   
    const validacao = () => {
      let isValid = true;
  
      if (nome.trim() === '') {
        setErrorNome('Por favor, preencha o campo Nome.');
        isValid = false;
      } else {
        setErrorNome('');
      }
  
      if (email.trim() === '') {
        setErrorEmail('Por favor, preencha o campo Email.');
        isValid = false;
      } else {
        setErrorEmail('');
      }
  
      if (senha.trim().length < 6) {
        setErrorSenha('A senha deve ter pelo menos 6 caracteres.');
        isValid = false;
      } else {
        setErrorSenha('');
      }
  
      return isValid;
    };
    const navigation = useNavigation();
    const cadastro = () => {
      if (validacao()) {
        console.log('Salvou');
        navigation.navigate('Home'); 
      }
      };
    return (
      <View style={styles.container}>
      <StatusBar hidden />
      <TextInput
        placeholder="Seu Nome..."
        style={[styles.textInput, errorNome && styles.inputError]}
        onChangeText={(text) => {
          setNome(text);
          setErrorNome('');
        }}
        value={nome}
      />
      {errorNome ? <Text style={styles.errorText}>{errorNome}</Text> : null}

      <TextInput
        placeholder="Login@gmail.com"
        style={[styles.textInput, errorEmail && styles.inputError]}
        onChangeText={(text) => {
          setEmail(text);
          setErrorEmail('');
        }}
        value={email}
      />
      {errorEmail ? <Text style={styles.errorText}>{errorEmail}</Text> : null}

      <TextInput
        secureTextEntry={true}
        placeholder="Sua Senha..."
        style={[styles.textInput, errorSenha && styles.inputError]}
        onChangeText={(text) => {
          setSenha(text);
          setErrorSenha('');
        }}
        value={senha}
      />
      {errorSenha ? <Text style={styles.errorText}>{errorSenha}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={cadastro}>
        <Text style={styles.textButton}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}; 
    
    
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
      backgroundColor: '#4533e8',
      marginTop: 20,
      borderRadius: 20,
      justifyContent: 'center',
      paddingVertical: 10, 
      paddingHorizontal: 40,    
  
    },
    textButton:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    errorText: {
      color: 'red',
      marginBottom: 5,
      marginTop:-11,
      borderWidth: 1,
      borderColor: 1
      
    }
})


export default Forms;

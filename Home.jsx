import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://s3.amazonaws.com/ss-usa/companies/MzawMLE0NjUzAgA/uploads/LOGOS/logo-integrado.png'}} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo ao Nosso App</Text>
      <Text style={styles.description}>
        Seu cadastro foi finalizado com sucesso! Agora você posse ter acesso exclusivo as mais diversas coleções.</Text>
      <Text style={styles.description}>Onde deseja navegar?</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Pokemon')}>
        <Text style={styles.buttonText}>Página Pokemon</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Pais')}>
        <Text style={styles.buttonText}>Página Paízes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Jogo')}>
        <Text style={styles.buttonText}>Página Jogos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    backgroundColor: '#c5c3f7',
  },
  logo: {
    // top: -100,
    width:200,
    height: 90,
    resizeMode: 'contain', 
    marginBottom: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4533e8'
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    
  },
  button: {
    backgroundColor: '#4533e8',
    paddingVertical: 15,
    paddingHorizontal: 20,
    paddingLeft: 20,
    marginBottom: 40,
    borderRadius: 10,
    textAlign: 'center',

  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;

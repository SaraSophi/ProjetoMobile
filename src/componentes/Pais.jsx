import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

function Pais() {
  const [countryName, setCountryName] = useState('');
  const [countryData, setCountryData] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    setButtonDisabled(countryName.length === 0);
  }, [countryName]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      const data = await response.json();

      if (data.length > 0) {
        const country = data[0];
        setCountryData({
          officialName: country.name.common,
          region: country.region,
          subregion: country.subregion,
          area: country.area,
          population: country.population,
          capital: country.capital[0],
        });
      } else {
        setCountryData(null);
        Alert.alert('País não encontrado');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const rende = () => {
    if (countryData) {
      return (
        <View style={styles.countryData}>
          <Text style={styles.textItem}>Nome Oficial: {countryData.officialName}</Text>
          <Text style={styles.textItem}>Região: {countryData.region}</Text>
          <Text style={styles.textItem}>Subregião: {countryData.subregion}</Text>
          <Text style={styles.textItem}>Área: {countryData.area} km²</Text>
          <Text style={styles.textItem}>População: {countryData.population}</Text>
          <Text style={styles.textItem}>Capital: {countryData.capital}</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pesquisar País</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do País"
        value={countryName}
        onChangeText={(text) => setCountryName(text)}
      />
      <TouchableOpacity
        style={[styles.button, { opacity: buttonDisabled ? 0.5 : 1 }]}
        disabled={buttonDisabled}
        onPress={fetchData}
      >
        <Text style={styles.buttonText}>Pesquisar</Text>
      </TouchableOpacity>
      {rende()}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c5c3f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4533e8'
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4533e8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  countryData: {
    marginTop: 20,
  },
  textItem: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
export default Pais;
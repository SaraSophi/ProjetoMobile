import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

const Jogo = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('https://www.freetogame.com/api/games')
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const GameItem = ({ game }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.description}>{game.short_description}</Text>
      <Text style={styles.info}>
        <Text style={styles.infoLabel}>Gênero:</Text> {game.genre}
      </Text>
      <Text style={styles.info}>
        <Text style={styles.infoLabel}>Plataforma:</Text> {game.platform}
      </Text>
      <Text style={styles.info}>
        <Text style={styles.infoLabel}>Desenvolvedor:</Text> {game.developer}
      </Text>
    </View>
  );

  return (
     <View style={styles.container}>
        <Text style={styles.headerTitle}>Jogos Gratuitos</Text>
      <FlatList
        data={games}
        keyExtractor={(game) => game.id.toString()}
        renderItem={({ item }) => <GameItem game={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1f1d',
    padding: 15,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  itemContainer: {
    backgroundColor: '#c5c3f7',
    padding: 20,
    marginBottom: 20,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#1c1f1d'

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4533e8'
  },
  description: {
    fontSize: 16,
    textAlign:'center'
  },
  info: {
    marginTop: 5,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
});

export default Jogo;
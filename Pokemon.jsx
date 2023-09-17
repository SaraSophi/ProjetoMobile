import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";

const Pokemon = ({navigation}) => {

   const [pokemon, setPokemon] = useState()

   const PokemonItem = ({ pokemon, navigation }) => {
    return (
        <View style={styles.pokemoncard} >
            <Text style={styles.text}>
            Nome: {pokemon.name}
            </Text>
            <Text style={styles.text}>
            Altura: {pokemon.height}
            </Text >
            <Text style={styles.text}>
            Nível: {pokemon.level_learned_at}
            </Text>
            {pokemon.image && (
                <Image style={{ width: 100, height: 100}} source={{ uri: pokemon.image }}/>
            )}
            {/* <Button title='Ver mais!'
            style={styles.buttonVer}
            onPress={() =>
            navigation.navigate('PokemonItem', {pokemon: pokemon})
            }/> */}
            <Button
                title="Ver mais!"
                style={styles.buttonVer}
                onPress={() =>
                navigation.navigate('Detalhes', {
      pokemon: pokemon,
    })
  }
/>
        </View>
        );
        };

    const fetchPokemon = async () => {
        try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        const pokemonList = data.results;
     
        const detailedPokemonList = await Promise.all(
            pokemonList.map(async (pokemon) => {
            const { data: pokemonData } = await axios.get(pokemon.url);
            return {
                    name: pokemonData.name,
                    image: pokemonData.sprites.other['official-artwork'].front_default,
                    height: pokemonData.height,
                    level_learned_at: pokemonData.level_learned_at
                    };
                })
            );
     
            setPokemon(detailedPokemonList);
        } catch (error) {
            console.log(error)
        }
    };
   
    useEffect(() => {fetchPokemon()}, [])
    
    const styles = StyleSheet.create({
        pokemoncard: {
            padding:16,
            backgroundColor: '#c5c3f7',
            margin:8,
            borderRadius:4,
            alignItems: 'center'
        },
        text: {
            color:'#black',
            fontSize: 24,    
            fontWeight: 'bold',
            marginBottom: 10,
            color: '#4533e8'
        },
        buttonVer:{
            backgroundColor: 'yellow',
            padding: 15,
            marginTop: 20,
            borderRadius: 20,
            justifyContent: 'center',
            color: '#4533e8'
      
          }
    })
    return (
        <View>
        <FlatList 
            data={pokemon}
            renderItem={({item}) => <PokemonItem pokemon={item} navigation={navigation} />}/>
        </View>

    );
}

export default Pokemon;
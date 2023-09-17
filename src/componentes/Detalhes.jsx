import { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Detalhes = () => {

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
                    
                    
                    };
                })
            );
     
            setPokemon(detailedPokemonList);
        } catch (error) {
            console.log(error)
        }
    };
    const style = StyleSheet.create({
        text: {
        color:'#black',
        fontSize: 24,    
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#4533e8'
    }});
    useEffect(() => {fetchPokemon()}, [])
    return (
        <View>
      <Text style={style.Text}>NAME: {item.name}</Text>
      <Text style={style.Text}>URL: {item.url}</Text>
      <View>
        <FlatList 
            data={pokemon}
            renderItem={({item}) => <PokemonItem pokemon={item} navigation={navigation} />}/>
        </View>
    </View>
    );
}

export default Detalhes;
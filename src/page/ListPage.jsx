import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, View, Text } from "react-native";

const amgData = [
    {
        name: 'Sara',
        type: 'Empática',
    },
    {
        name: 'Yasmin',
        type: 'Parceira',
    },
    {
        name: 'Mariane',
        type: 'Amiga',
    },
    {
        name: 'Ingrid',
        type: 'Saudável',
    },
    {
        name: 'Bruna',
        type: 'Rolê',
    },

]

const AmgItem = ({amg})=>{
    const {name, type} = amg
    return(
        <View>
            <Text> Pessoa:{name}</Text>
            <Text> Caractéristica:{type}</Text>

        </View>
    );
}
const ListPage = () => {
    return (
        <SafeAreaView>
           <FlatList
           data={amgData}
            renderItem={({item})=> <AmgItem amg = {item}/>}
           />
        </SafeAreaView>
    );
}

export default ListPage;
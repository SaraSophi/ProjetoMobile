import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pokemon from "./screens/Pokemon";
import Forms from "./src/componentes/Forms";
import Jogo from "./src/componentes/Jogo";
import Home from "./src/componentes/Home";
import Pais from "./src/componentes/Pais";
import Detalhes from "./src/componentes/Detalhes";



const Stack = createNativeStackNavigator();

export default function App(){
  return(
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Forms" component={Forms} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pokemon" component={Pokemon} /> 
      <Stack.Screen name="Detalhes" component={Detalhes} /> 
      <Stack.Screen name="Pais" component={Pais} /> 
      <Stack.Screen name="Jogo" component={Jogo} />  
    </Stack.Navigator>
  </NavigationContainer> 
  
  )
}


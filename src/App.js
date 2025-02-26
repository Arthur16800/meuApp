import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Cadastro" component={Cadastro}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


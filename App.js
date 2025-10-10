import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AboutScreen from './screens/AboutScreen';
import AdminScreen from './screens/AdminScreen';

const Stack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen}/>
        <Stack.Screen name="About" component={AboutScreen}/>
        <Stack.Screen name="Admin" component={AdminScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
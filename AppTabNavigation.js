import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AboutScreen from './screens/AboutScreen';
import AdminScreen from './screens/AdminScreen';

const Tab = createBottomTabNavigator()

export default function AppTabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="Home"
          component={HomeScreen}
          options={{
            title: 'Início',
            tabBarIcon: ({ color, size }) =>
            (<Ionicons name='home-outline' color={color} size={size} />
            )
          }} />
        <Tab.Screen name="Details" component={DetailsScreen}
          options={{
            title: 'Details',
            tabBarIcon: ({ color, size }) =>
            (<Ionicons name='bag-outline' color={color} size={size} />
            )
          }} />
        <Tab.Screen name="About" component={AboutScreen}
          options={{
            title: 'Sobre',
            tabBarIcon: ({ color, size }) =>
            (<Ionicons name='airplane-outline' color={color} size={size} />
            )
          }} />
        <Tab.Screen name="Admin" component={AdminScreen}
          options={{
            title: 'Admin',
            tabBarIcon: ({ color, size }) =>
            (<Ionicons name='bag' color={color} size={size} />
            )
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
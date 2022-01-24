import React from 'react';
import { Text } from 'react-native'
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { theme } from './src/infrastructure/theme'
import { SafeArea } from './src/components/utility/safe-area.component';

import { restaurantRequest } from './src/services/restaurants/restaurants.service'



import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });

  const [latoLoaded] = useLato({
    Lato_400Regular
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

const MapScreen = () => {
    return (
      <SafeArea>
        <Text>Map!</Text>
      </SafeArea>
    );
}
  
const SettingsScreen = () => {
    return (
      <SafeArea>
        <Text>Settings!</Text>
      </SafeArea>
    );
}

const Tab = createBottomTabNavigator();


{/* Need headerShown option otherwise it will show header at the top*/}
{/* screenOptions is a function that return an object with 4 properties */}
 return (   
    <>
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={ ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Restaurant') {
              iconName = 'ios-restaurant-sharp'
            } else if (route.name === 'Settings') {
              iconName = 'settings-sharp'
            } else if (route.name === 'Map') {
              iconName = 'map-pin'
              return <Feather name={iconName} size={size} color={color} />;
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        }) }
        > 
          <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    </>
  );
}




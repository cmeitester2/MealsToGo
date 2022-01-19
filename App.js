import React from 'react';
import { Text } from 'react-native'
import { ThemeProvider } from 'styled-components/native';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { theme } from './src/infrastructure/theme'
import { SafeArea } from './src/components/utility/safe-area.component';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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


{/* Need headerShown option otherwise it will show header at the top */}
 return (   
    <>
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}> 
          <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    </>
  );
}




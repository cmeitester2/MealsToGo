import React from 'react';
import { Searchbar } from 'react-native-paper';
import { StatusBar, Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.components';

export const RestaurantsScreen = () => (
     
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <Searchbar
                placeholder="Search"

            />
            </View>
            <View style={styles.list}>
                <RestaurantInfoCard/>
            </View>
      </SafeAreaView>  
     

)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      marginTop: StatusBar.currentHeight
    },
    search: 
        {padding: 16
         },
    list: {
        backgroundColor: 'blue',
        padding: 16,
        flex: 1}
  });
import React from 'react';
import styled from "styled-components/native"; 
import { Searchbar } from 'react-native-paper';
import { StatusBar, Text, View, StyleSheet, SafeAreaView } from 'react-native';

import { RestaurantInfoCard } from '../components/restaurant-info-card.components';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    background-color: white;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
//currentHeight is not defined for ios

const SearchContainer = styled.View`
    padding: 16px;
`;

const RestaurantListContainer = styled.View`
    flex: 1;
    padding: 16px;
    background-color: blue;
`

export const RestaurantsScreen = () => (     
    <SafeArea>
        <SearchContainer>
            <Searchbar placeholder="Search" />
        </SearchContainer>
        <RestaurantListContainer>
            <RestaurantInfoCard/>
        </RestaurantListContainer>
    </SafeArea>  
);
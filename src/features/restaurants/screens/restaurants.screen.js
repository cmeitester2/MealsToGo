import React from 'react';
import styled from "styled-components/native"; 
import { Searchbar } from 'react-native-paper';
import { StatusBar, Text, View, SafeAreaView, FlatList } from 'react-native';
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantInfoCard } from '../components/restaurant-info-card.components';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
//currentHeight is not defined for ios

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
`

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle : {padding: 16},
})``;
// Dont full understand this. Section-140


export const RestaurantsScreen = () => (     
    <SafeArea>
        <SearchContainer>
            <Searchbar placeholder="Search" />
        </SearchContainer>
        <RestaurantList
            data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}, {name: 6}]}
            renderItem={() => (
                <Spacer position="bottom" size="large">
                    <RestaurantInfoCard/>
                </Spacer>
            )}
            keyExtractor={(item) => item.name}            
        />
    </SafeArea>  
);
import React, { useContext } from 'react';
import styled from "styled-components/native"; 
import { Searchbar } from 'react-native-paper';
import { StatusBar, Text, View, SafeAreaView, FlatList } from 'react-native';
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantInfoCard } from '../components/restaurant-info-card.components';
import { SafeArea } from '../../../components/utility/safe-area.component';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';



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


export const RestaurantsScreen = () => {   
    const restaurantContext = useContext(RestaurantsContext);
    console.log(restaurantContext);
    return(
        <SafeArea>
            <SearchContainer>
                <Searchbar placeholder="Search" />
            </SearchContainer>
            <RestaurantList
                data={restaurantContext.restaurants}
                renderItem={() => (
                    <Spacer position="bottom" size="large">
                        <RestaurantInfoCard/>
                    </Spacer>
                )}
                keyExtractor={(item) => item.name}            
            />
        </SafeArea> 
    ) 
};
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
    const {isLoading, error, restaurants} = useContext(RestaurantsContext);
    console.log('This is restaurant list');
    console.log(restaurants);
    return(
        <SafeArea>
            <SearchContainer>
                <Searchbar placeholder="Search" />
            </SearchContainer>
            <RestaurantList
                data={restaurants}
                renderItem={({item}) => {
                    console.log('This is the item');
                    console.log(item);
                    return (
                        <Spacer position="bottom" size="large">
                            <RestaurantInfoCard restaurant={item}/>
                        </Spacer>
                    );
                }}    
            />
        </SafeArea> 
    ) 
};
import React from "react";
import styled from "styled-components/native"; 
import { Text, StyleSheet } from "react-native";
import {Card} from "react-native-paper";

//styled only has so many components and doesnt know Card, so cannot do styled.Card and have to do styled(Card)
const RestaurantCard = styled(Card)`
    background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: 20px;
    background-color: white
`;

const Title = styled.Text`
    padding: 16px
`;
export const RestaurantInfoCard = ({restaurant = {}}) => {
    const {
        name = 'Some Restaurant in Tahiti',
        icon,
        photos = ["https://ehs.stonybrook.edu/programs/_images/Food.jpg"],
        address = '100 some random street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily
    } = restaurant;

    return(
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{uri: photos[0]}} />
            <Title>{name}</Title>
        </RestaurantCard>
    )
};
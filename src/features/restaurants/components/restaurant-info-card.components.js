import React from "react";
import styled from "styled-components/native"; 
import { Text, StyleSheet } from "react-native";
import {Card} from "react-native-paper";

//styled only has so many components and doesnt know Card, so cannot do styled.Card and have to do styled(Card)
const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    padding: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.ui.primary};
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
import React from "react";
import { SvgXml } from 'react-native-svg';

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component"
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import { Icon,
        RestaurantCard,
        RestaurantCardCover,
        Address,
        Info,
        Rating,
        Section,
        SectionEnd
} from "./restaurant-info-card.styles";

//styled only has so many components and doesnt know Card, so cannot do styled.Card and have to do styled(Card)




export const RestaurantInfoCard = ({restaurant = {}}) => {
    const {
        name = 'Some Restaurant in Mumbai',
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ["https://ehs.stonybrook.edu/programs/_images/Food.jpg"],
        address = '100 some random street',
        isOpenNow = true,
        rating = 5,
        isClosedTemporarily = true
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return(
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{uri: photos[0]}} />
            <Info>
                <Text variant="label">{name}</Text>
                <Section>
                    <Rating>
                        {ratingArray.map((elem, index) => (
                        <SvgXml key={index} xml={star} width={20} height={20}/>
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant="error">
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        <Spacer position="left" size="large">
                            {isOpenNow && <SvgXml xml={open} width={20} height={20}/>}
                        </Spacer>
                        <Spacer position="left" size="large">
                            <Icon source={{ uri: icon }} />
                        </Spacer>
                    </SectionEnd>
                </Section>                
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};
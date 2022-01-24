import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject("not found");
        }
        resolve(mock);
    });
};

export const restaurantsTransform = ({ results = [] }) => {
    // The argument to this function which is the entire data for a location
    // has a property called result that is being desctructred here   

    const mappedResults = results.map((restaurant) => {
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPRARILY",
            };
        });
        // We need isOpenNow and isClosedTemporarily for the card
        // but the mocks data doesnt have these 2 fields and need to be
        // derived
    console.log(mappedResults);    

    return camelize(mappedResults);
    // change properties with underscore or period to camelize version
};

restaurantRequest()
    .then(restaurantsTransform)
    .then(transformedResponse => {
        console.log(transformedResponse);
    })
    .catch((err) => {
        console.log('error');
    }
)
import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantRequest, restaurantTransform } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
    return (
        <RestaurantsContext.Provider
            value={{
                restaurants: [{name: 1}, {name: 2}]
            }}
        >
            {children}
        </RestaurantsContext.Provider>
    )
}

console.log(RestaurantsContext)
import React, { createContext, useContext, useState } from "react";

const CityContext = createContext();

function CityProvider({ children }) {    

    const [cityId, setCityId] = useState(34);

    const values = {
        cityId,
        setCityId
    }

    return (
        <CityContext.Provider value={values}>
            {children}
        </CityContext.Provider>
    )
}

const useCity = () => useContext(CityContext);

export { CityProvider, useCity }
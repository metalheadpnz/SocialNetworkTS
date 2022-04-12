import React from "react";
import {storeType} from "./redux/store";


type propsType = {
    store: storeType
}

const StoreContext = React.createContext({} as storeType)

export const Provider: React.FC<propsType> = (props) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}




export default StoreContext
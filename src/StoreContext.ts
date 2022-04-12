import React from "react";
import {storeType} from "./redux/store";

const StoreContext = React.createContext({} as storeType)

export default StoreContext
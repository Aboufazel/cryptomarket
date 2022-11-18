import { createContext } from "react"
import { useState } from "react";


export const CoinContext = createContext()


const  CoinContextProvider = ({children}) => {
    const [coin,setCoin]=useState()

    return (
        // context provider show each pass data
        <CoinContext.Provider value={{coin,setCoin}}>
            {children}
        </CoinContext.Provider>
    );
}

export default  CoinContextProvider  ;
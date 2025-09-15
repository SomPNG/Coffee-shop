import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [hamburger, setHamburger] = useState(false);


    const value= {
        hamburger,
        setHamburger,
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
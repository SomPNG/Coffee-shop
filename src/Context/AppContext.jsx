import { createContext, useState } from "react"

import BlackCoffeeImg from "../assets/coffee/coffee1.png"
import HotCoffeeImg from "../assets/coffee/coffee2.png"
import ColdCoffeeImg from "../assets/coffee/coffee3.png"


export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [hamburger, setHamburger] = useState(false);

    const coffeeCardsData = [
        {
            id:1,
            title:"Black Coffee",
            desc:"Black coffee tastes strong, bold, bitter, pure, dark, and energizing.",
            image: BlackCoffeeImg,
        },
        {
            id:2,
            title:"Hot Coffee",
            desc:"Hot coffee feels warm, comforting, smooth, cozy, rich, and calming.",
            image: HotCoffeeImg,
        },
        {
            id:3,
            title:"Cold Coffee",
            desc:"Cold coffee stays chilled, refreshing, icy, creamy, sweet, and crisp.",
            image: ColdCoffeeImg,
        }
    ]


    const value= {
        hamburger,
        setHamburger,
        coffeeCardsData
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
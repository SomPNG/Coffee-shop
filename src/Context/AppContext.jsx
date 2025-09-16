import { createContext, useState } from "react"

import BlackCoffeeImg from "../assets/coffee/coffee1.png"
import HotCoffeeImg from "../assets/coffee/coffee2.png"
import ColdCoffeeImg from "../assets/coffee/coffee3.png"
import { toast } from "react-toastify"


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

    const [formData, setFormData] = useState({
        Name: "",
        Email: "",
        Country: "",
        Pincode: ""
    });

    function changeHandler(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }))
    }

    function submitHandler(e){
        e.preventDefault();
        toast.success("Email sent successfully!", {
        duration: 2000,
        style: {
            background: "#000",
            color: "#fff", 
            border: "1px solid #7c2d12", 
        },
        iconTheme: {
            primary: "#f97316",
            secondary: "#000",
        },
        });
        console.log(formData);
        setFormData({
        Name: "",
        Email: "",
        Country: "",
        Pincode: ""
    });
    }



    const value= {
        hamburger,
        setHamburger,
        coffeeCardsData,
        formData,
        setFormData,
        changeHandler,
        submitHandler
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
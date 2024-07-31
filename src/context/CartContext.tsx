import { createContext, useState } from "react";
import { ScratchOffProps } from "../Components/HomePage";

interface contextType{
    cart:ScratchOffProps[]|null,
    setCart:React.Dispatch<React.SetStateAction<ScratchOffProps[]|null>>
    winnings:number,
    setwinnings:React.Dispatch<React.SetStateAction<number>>
    money:number,
    setMoney:React.Dispatch<React.SetStateAction<number>>,
    currently_at:number[],
    setCurrently_at:React.Dispatch<React.SetStateAction<number[]>>,
    scratchoffs:ScratchOffProps[],
    setScratchoffs:React.Dispatch<React.SetStateAction<ScratchOffProps[]>>
    }

interface contextProviderProps{
    children:React.ReactNode
}

export const context=createContext<contextType|null>(null)

export const ContextProvider=({children}:contextProviderProps)=>{
    const [cart,setCart]=useState<ScratchOffProps[]|null>(null);
    const [currently_at,setCurrently_at]=useState<number[]>(Array(10).fill(0));
    const [winnings,setwinnings]=useState<number>(0);
    const [money,setMoney]=useState<number>(0);
    const [scratchoffs,setScratchoffs]=useState<ScratchOffProps[]>([]);
    return (
        <context.Provider value={{cart,setCart,winnings,setwinnings,money,setMoney,currently_at,setCurrently_at,scratchoffs,setScratchoffs}} >
            {children}
        </context.Provider>
    )

}
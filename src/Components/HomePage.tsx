import React, {useContext, useEffect  } from "react"
import { ScratchOff } from "./ScratchOff"
import { context } from "../context/CartContext"
import { Link } from "react-router-dom"
import "../styles/ScratchOff.css";
import axios from "axios"


interface ScratchOffProps{
    Name:string
    No:number,
    Img:string,
    Price:number,
    Currently_at:number,
    isCartView?:boolean
    }



 export const HomePage:React.FC=()=>{
    
    const cartContext=useContext(context);

    useEffect(()=>{ 
        const initialMoney=prompt('How much money did you bring Dawg?')
        if (initialMoney!==null){
            const moneyBrought=Number(initialMoney)
            cartContext?.setMoney(moneyBrought)
        }
        const fetchData= async ()=>{
            try{
                const respone=await axios.get<ScratchOffProps[]>("http://localhost:4000/scratchOff");
                const data=respone.data.map((item)=>({
                    ...item,Currently_at:Number(item.Currently_at)
                }))
                cartContext?.setScratchoffs(data);
                }
            catch(error){
                    console.log(error);
                        }

            }
      fetchData();
        },[])
    
    const handleCart=(item:ScratchOffProps)=>{

        if (cartContext && item.Price<=cartContext?.money){
            cartContext?.setMoney(cartContext.money-item.Price);
            const updatedCart=cartContext.cart?[...cartContext.cart,item]:[item];
            cartContext.setCart(updatedCart)
            cartContext?.setScratchoffs(prevScratchoffs => prevScratchoffs.map((bookItem) => {
                if (bookItem.No === item.No) {
                  return { ...bookItem, Currently_at: bookItem.Currently_at + 1 };
                }
                return bookItem;
              }));
              }
        }

    return (
        <div>
            <button><Link to ="/cart">Cart</Link> </button>
            <p>You have ${cartContext?.money} left</p>
            <div className="ScratchOff">
            {
                cartContext?.scratchoffs.map((item)=>{
                    return <ScratchOff
                    key={`${item.No}+:${item.Name}+${item.Currently_at}`}
                    Name={item.Name} 
                    No={item.No}
                    Img={item.Img}
                    Price={item.Price}
                    Currently_at={item.Currently_at}
                    isCartView={false}
                    />
                    })
            }
            </div>
        </div>
        )
    }
export type  {ScratchOffProps}

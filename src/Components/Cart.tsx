import { useContext } from "react";
import { context } from "../context/CartContext";
import { ScratchOff } from "./ScratchOff";
import "../styles/ScratchOff.css";
import axios from "axios"

export const Cart = () => {

    const cartContext = useContext(context);
    const cartData = cartContext?.cart;
    const handleCheckOut=()=>{
        cartContext?.cart?.map((Scratch)=>{
            const respon=axios.patch(`http://localhost:4000/scratchOffs/${Scratch.No}`,{
                Currently_at:Scratch.Currently_at
                
            }
    ) 
    return null

        })
        cartContext?.setCart([]);

        }
           
    

    return (
        <div>
            <h3>You have won ${cartContext?.winnings} </h3>
            <button onClick={handleCheckOut}>Check out</button>
            <div className="ScratchOff">
                {cartData && cartData.map((item) => (
                    <ScratchOff
                        key={`${item.No}+${item.Name}+${item.Currently_at}`}
                        Name={item.Name} 
                        No={item.No}
                        Img={item.Img}
                        Price={item.Price}
                        Currently_at={item.Currently_at}
                        isCartView={true}
                    />) ) 
                }
            </div>
        </div>
            );
    };

import { log } from "console";
import "../styles/ScratchOff.css";
import { Winnings } from "./Winnings";
import { useContext } from "react";
import { context } from "../context/CartContext";
import { ScratchOffProps } from "./HomePage";


export const ScratchOff:React.FC<ScratchOffProps>=(props)=>{

    const cartContext=useContext(context);
    const { Name, No, Img, Price, Currently_at,isCartView } = props;

    const handleCart=(No:number,Currently_at:number,Price:number)=>{
                if (cartContext?.money&&cartContext.money>=Price)
                    {
                        cartContext.setMoney(cartContext?.money-Price);
                         const addedCartItem= cartContext?.scratchoffs.find((item)=>(item.No===No && item.Currently_at===Currently_at))
                         if (addedCartItem){
                            const updatedCart=cartContext?.cart?[...cartContext?.cart,{...addedCartItem,Currently_at:Currently_at+1}]:[{...addedCartItem,Currently_at:Currently_at+1}]
                            cartContext?.setCart(updatedCart) 
                         }
                    


                        const updateScratches=cartContext?.scratchoffs.map((Scratch)=>{
                            if(Scratch.No===No&&Scratch.Currently_at===Currently_at){
                                return {...Scratch,Currently_at:Currently_at+1}
                            }
                            else{
                                return Scratch
                            }

                        })
                        cartContext?.setScratchoffs(updateScratches)

                
                }
            
             
                
            
        }
        
    return (
        <div>
            <div className="Individual">
            <h3>{No}</h3> <h3>{Name} </h3>
            <img src={Img} alt="" />
            <p> Price:{Price}</p>
            <p>{isCartView?"Number":"Currently at"}  {Currently_at} </p>
            {!isCartView&&<button onClick={()=>{handleCart(No,Currently_at,Price)}}>Add to Cart</button>}
            
           </div>
        </div>
        )
    }
            
                
            
            

 

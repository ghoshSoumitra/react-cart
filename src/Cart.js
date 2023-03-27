import React from 'react';
import CartItem from './CartItem';
const Cart =(props)=>{

    const{products}=props;
    return (
        <div className="cart">
            
           {
            products.map((products)=>{
        return (
        <CartItem 
        products={products} 
        key={products.id} 
        onincreaseQuantity={props.onincreaseQuantity}
        onDecreaseQuantity={props.onDecreaseQuantity}
        ondelete={props.ondelete}
        />
        )
          
        

            })
           } 
           
        </div>
    )
  
}

export default Cart;
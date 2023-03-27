import React from 'react';

const CartItem =(props)=>{

 
    const { price, title, qty } = props.products;
    // console.log(this.props)
    const {
      products,
      onincreaseQuantity,
      onDecreaseQuantity,
      ondelete
    } = props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={products.img} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/10195/10195165.png"
              onClick={()=>onincreaseQuantity(products)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/4436/4436695.png"
              onClick={()=>onDecreaseQuantity(products)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828595.png"
              onClick={()=>ondelete(products.id)}
            />
          </div>
        </div>
      </div>
    );
  
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;
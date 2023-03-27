import React from 'react';

import Cart from'./Cart';
import Navbar from './Navbar';
class App extends React.Component{
  constructor () {
    super();
    this.state = {
    products:[
        {
        price: 9999,
        title: 'Mobile Phone',
        qty: 5,
        img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        id:1
        },
        {
            price: 999,
            title: 'Watch',
            qty: 10,
            img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
            id:2
            },
            {
                price: 99999,
                title: 'Laptop',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
                id:3
                },
    ]
    }
  }
  handleIncreaseQuantity=(product)=>{
    const{products}=this.state;
    const index=products.indexOf(product);
    products[index].qty+=1;
    this.setState({
        products:products
    })
    // console.log('hi')
  }
  handleDecreaseQuantity=(product)=>{
    const{products}=this.state;
    // console.log(products.length);
    const index=products.indexOf(product);
    if(products[index].qty===0){
        return;
    }
    products[index].qty-=1;
    this.setState({
        products:products
    })
    // console.log('hi')
  }
  handleDelete=(id)=>{
    const {products}=this.state;
    const items=products.filter((item)=>item.id!==id);
    this.setState({
        products:items
    })
    // console.log('hello')
  }
  getcartCount=()=>{
    const {products}=this.state;
    // console.log('hi');
    // return products.length;
    let count =0;
    products.map((products)=>count+=products.qty)
    return count;
    
  }
  getCartPrice=()=>{
    const{products}=this.state;
    let total=0;
    products.map((products)=>total+=products.price*products.qty)
    return total;
  }
  render(){
    const {products}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getcartCount()}/>
        <Cart
        products = {products}
          onincreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          ondelete={this.handleDelete}
        />
        <div className="total">Total-Amount:{this.getCartPrice()}</div>
      </div>
    );
  }

}

export default App;


import React, { Component } from'react'
import {connect} from 'react-redux'

class  GroceryCart extends Component
{ 
    total()
    {
        return this.props.items.reduce((total,item) => {
        return total+item.price},0)
    }
    
    render()
     {
         if(this.props.items.length === 0)
         {
             return <div className ="grocery-cart">Cart is empty!</div>
         }

        return <div className ="grocery-cart">
            <table>
                <thead>
                     <tr>
                        <th></th>
                        <th>Item Name</th>
                        <th>Item Price</th>
                    </tr>
                </thead>
    
                <tbody>                     
                        {this.props.items.map((item, index) => {
                            return  <tr key={index}>
                                <td><button onClick = {()=> this.props.removeFromCart(index)}>
                                    Remove from cart</button></td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                             </tr>
                          })}
                    
                </tbody>
            </table>
                        <p> Total : ${this.total()}</p>
        </div>
    }
}
function mapStateToProps(state)
{
    return {
        items : state.cart
    }
}
function mapDispatchToProps(dispatch)
{
    return{
        removeFromCart:(index)=> {
            dispatch({
                type:'REMOVE_FROM_CART',
                index 
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GroceryCart)


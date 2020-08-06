/* eslint-disable no-unused-expressions */
import React, {Component } from'react'
import {connect} from 'react-redux'

class  GroceryItem extends Component
 { 
    render()
     {
        return <div id ="grocery-item">
            
            <table id="grocery-item-table">   
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
                                        <td><button onClick = {
                                            ()=> this.props.addToCart(item)
                                            }> Add to cart </button></td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                   </tr>
                         })}
                
                    
            </tbody>
            </table>
        
        </div>
    }
}

function mapStateToProps(state)
{
    return {
        items : state.forSale
    }
}
function mapDispatchToProps(dispatch)  
{
    return{
        addToCart:(item)=> {
            dispatch({
                type:'ADD_TO_CART',
                item 
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GroceryItem)

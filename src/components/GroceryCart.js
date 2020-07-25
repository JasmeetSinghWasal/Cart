
import React, { Component } from'react'

export default class  GroceryCart extends Component
 { 
    render()
     {
        return <div>            
            <table>
                <tr>
                <th>Item Name</th>
                <th>Item Price</th>
                </tr>
                {/* {this.props.items.map((item, index) => {
                    <tr id={index}>
                        <td>item.name</td>
                        <td>item.price</td>
                    </tr>
                })} */}
            </table>
        
        </div>
    }
}

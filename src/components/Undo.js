import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
class Undo extends Component
{
    render()
    {
        return <span id= "undoButton">
                    <button onClick = { () => alert('Undo') }> Undo </button>
                </span>
        
    }
}

//export default Undo 
function mapStateToProps()
{
    return {
        ß
    }
}
function mapDispatchToProps()
{

}
export default connect (mapStateToProps, mapDispatchToProps)(Undo)
import React, { Component } from 'react'

export default class FormRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             uname:"",
             pword:""
        }
    }
    
    changeUserName=(event)=>{
       this.setState({
        uname:event.target.value
       })
    }

    changePassword=(event)=>{
        this.setState({
         pword:event.target.value
        })
     }

     submitUserData=(event)=>{
            event.preventDefault()
            console.log(`${this.state.uname}  ${this.state.pword}`)
     }
    render() {
        return (
            <div>
                <form  onSubmit={this.submitUserData} method='get'>
                    <input type="text" value={this.state.uname} 
                    
                    onChange={this.changeUserName}
                    />
                    <br></br>
                    <input type="text" value={this.state.pword}
                    onChange={this.changePassword} />

                    <br></br>
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}

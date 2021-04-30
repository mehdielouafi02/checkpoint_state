import React, { Component } from 'react'

export default class  Counter extends Component {
 state={
     Profile:0 ,
     inputValue:""
 }



    render() {
        return (
            <div>

<input type="text" onChange={(e)=> {
this.setState({inputValue:e.target.value}) ;
    console.log(e);
      }} placeholder="search" style={{marginBottom:"50px"}}/> <br/>





<p>{this.state.inputValue}</p>
<button type="button" onClick={ ()=> this.setState({count: this.state.count+1})} class="btn btn-success" style={{width:"50px"}}>+</button>
<span style={{margin:"10px 30px"}}>{this.state.count}</span>
<button type="button" onClick={ ()=> this.state.count>0 ? this.setState({count: this.state.count-1}) :alert('stop!')} class="btn btn-danger" style={{width:"50px"}}>-</button>
                
            </div>
        )
    }
}

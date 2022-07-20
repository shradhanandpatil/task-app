import React, { Component } from "react";
const Add=(Com)=>{
    class newCom extends Component{
        state={
            count:0
        }
        handelClike=()=>{
            this.setState({count:this.state.count +1});
        }
        render(){
            return <Com 
            hcount={this.state.count}
            hclike={this.handelClike}
            />
        }
    }
    return newCom;
}

export default Add;
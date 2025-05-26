import { Component } from "react";
import "./index.css"
class Counter extends Component{
    state={value:0}
     inc =()=>{
       this.setState(ps=>{
        return {value: ps.value+1 }
    })
    }
    dec =()=>{
        this.setState(ps=>{
            return {value: ps.value-1 }
        })
    }
    res =()=>{
        this.setState(ps=>{
            return{ value:0}
        })
    }
    render(){
        const {value}=this.state;
        return (
            <div className="container">
                <h1 className="heading"> counter </h1>
                <p className="index">{value}</p>
                
            <div className="buttons">
              <button className="Increase" onClick={this.inc}>
                Increase

              </button>
              <button className="dec" onClick={this.dec}>
                decrease

              </button>
              </div>
              <div>
                <button onClick={this.res}>
                    reset
                </button>
              </div>
            </div>
        )
        }
}
export default Counter;
import { Component } from "react";
class Ap extends Component{
    state={value:true }
    render=()=>{
        const {value}=this.state;
        let authbotton;
        if (value===true){
            authbotton=<button> logined already</button>;
        }else{
            authbotton=<button> login</button>;
        }
        return(
        <div> 
            <h1>
                hello
            </h1>
            {authbotton}
        </div>

        )
    }
}
export default Ap;
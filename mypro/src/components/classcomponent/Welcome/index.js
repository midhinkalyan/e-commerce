import { Component } from "react";
class Welcome extends Component{
render(){
    const {name}=this.props;
   return <p>welocmes you{name} </p>
}
}
export default Welcome;
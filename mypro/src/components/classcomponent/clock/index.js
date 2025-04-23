import { Component } from "react";
class Clock extends Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    componentDidMount(){
      this.timerid=setInterval(this.tick,1000)
    }
    tick=()=>{
        this.setState({date:new Date()})
    }
    componentWillUnmount(){
        clearInterval(this.timerid)
    }
  render(){
     const {date}=this.state;
     console.log(date);
    return(
        <div>
    <h1>clock</h1>
    <h3> {date.toLocaleTimeString()}</h3>
        </div>
    )
}
}
export default Clock;
/* import { Component } from "react";
import Clock from "./components/classcomponent/clock/index.js";
class App extends Component{
    state={showClock:false}
    updateClock = () => {
        this.setState((prev) => ({
          showClock: !prev.showClock
        }));
      };
    render(){
        const {showClock}=this.state;
      return(
        <div className="container">
            <button  typt="button"className="toggle-button" onClick={this.updateClock}> 
                {showClock? 'hideClock':'showclock'}
            </button>
          {  showClock && <Clock
            />}
        </div>
      )
    }
}
export default App*/
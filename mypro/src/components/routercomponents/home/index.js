import "../../../App.css";
import Blogitem from "../blogitem";
import { Component } from "react";

const Bloglist=[
    {
        id:1,
        img:"/logo192.png",
        author:"midhin",
        topic:"java",

    },
    {
        id:2,
        img:"/breezelogo_prev_ui.png",
        author:"bha",
        topic:"javaScript",
    }, 
     {
        id:3,
        img:"/logo192.png",
        author:"raj",
        topic:"c",
    }

]
class Home extends Component{
     state={ Bloglist1:[],
     }
    componentDidMount(){
        this.BlogListnew();
    }
    BlogListnew=async()=>{
        const response=await fetch("https://apis.ccbp.in/blogs");
        const data= await response.json();
        const updateddata = data.map(each => ({
            id: each.id,
            img: each.image_url,
            topic: each.topic,
            author: each.author
          }));
          
        this.setState({Bloglist1:updateddata})
    }
    render()
    {
        const {Bloglist1}=this.state;
        return(<div className="wrapper"> 
             { Bloglist1.map((each=>
           <Blogitem item={each} key={each.id}/> ))}
        </div>
          )
    
    }
}
export default Home;
/*import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/routercomponents/header";
import Home from "./components/routercomponents/home";
import About from "./components/routercomponents/about";
import Error404 from "./components/routercomponents/404error";
import NotFound from "./components/routercomponents/notfound/index.js";
import BlogDetails from "./components/routercomponents/blogdet/index.js";
const App=()=>{
  return(
    <BrowserRouter>
    <Header />
    <Routes>
    <Route exact path="/" Component={Home}/>
    <Route exact path="/aout" Component={About}/>
    <Route exact path="/404error" Component={Error404}/>
    <Route path="*" Component={NotFound}/>
    <Route exact path="/Blogs/:id" Component={BlogDetails}/>
    </Routes>
    

    </BrowserRouter>
  )
}
export default App;*/
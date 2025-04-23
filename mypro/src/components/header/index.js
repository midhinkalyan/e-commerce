import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css"
const Header=(props)=>
{
   const {content}=props;
   return(
    <>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
        <span className="fs-4">projects Portofolio</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="https://www.linkedin.com/in/midhin-kalyan-285822288/" className="nav-link">linkdein</a></li>
        <li className="nav-item"><a href="#" className="nav-link">github</a></li>
        <li className="nav-item"><a href="#" className="nav-link">twitter</a></li>
        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
      </ul>
    </header>
    </>
   );
}
export  default Header
/**
 * import Header from "./components/header"
import Projectitem from "./components/projectitem"
import Tableitem from "./components/tableitem"
import "./App.css";
const tableList=[
    {tablename:"STATIC",tablecom:"static"},
    {tablename:"RESPONSIVE",tablecom:"responsive"},
    {tablename:"DYNAMIC",tablecom:"dynamic"},
]
const projectList=[
    {
        projectno:1,
        category:"STATIC",
        img:"./1691412858360.jpg",
        discription:"this is the first  static project 1 did in my clg",
    },
    {
        projectno:2,
        img:"/ai.png",
        category:"STATIC",
        discription:"this is the first static project 2 did in my clg",
    },
    {
        projectno:3,
        category:"STATIC",
        img:"/car.png",
        discription:"this is the first static project 3 did in my clg",
    },
    {
        projectno:4,
        category:"RESPONSIVE",
        img:"/logo512.png",
        discription:"this is the first res project 1 did in my clg",
    },
    {
        projectno:5,
        category:"RESPONSIVE",
        img:"/logo512.png",
        discription:"this is the first res project 2 did in my clg",
    },
    {
        projectno:6,
        category:"RESPONSIVE",
        img:"/breezelogo_prev_ui.png",
        discription:"this is the first res project 3 did in my clg",
    },
    {
        projectno:7,
        category:"DYNAMIC",
        img:"/logo512.png",
        discription:"this is the first dyn project 1 did in my clg",
    },
    {
        projectno:8,
        category:"DYNAMIC",
        img:"/logo512.png",
        discription:"this is the first dyn  project 2 did in my clg",
    },
    {
        projectno:9,
        category:"DYNAMIC",
        img:"/logo512.png",
        discription:"this is the first dyn project 3 did in my clg",
    },

]
class App extends Component{
    state={activetabname:tableList[0].tablename}

    getFiltered=()=>{
        const {activetabname}=this.state;
        const Filtered= projectList.filter(each=>
            each.category===activetabname


        )
     
  return Filtered;
    }
    updatetablename=(tablename)=>{
        this.setState({activetabname:tablename});
    }  
    render(){
        const Filtered=this.getFiltered();
        return(
  <>
  <Header content="this is my details" />
      
  <Tableitem tableList={tableList}  updatetablename={this.updatetablename}/>
  <div className="project-container">
  {Filtered.map((eachProject) => (
    <Projectitem
      key={eachProject.projectno}
      category={eachProject.category}
      img={eachProject.img}
      discription={eachProject.discription}
      projectno={eachProject.projectno}
    />
  ))}
  </div>
</>

  );
    }
}
 */
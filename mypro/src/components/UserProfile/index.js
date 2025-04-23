import "./index.css";
const UserProfile = (props ) => {
    const{UserDetails ,ondeleteUser}=props;
    const {name,age,place,unique}=UserDetails;
    const ondelete=()=>{
       ondeleteUser(unique);
    }
    return (
     
      <div className="container">
        <img src="/logo512.png" alt="User Profile" />
        <p> Welcome !! {name} </p> <button onClick={ondelete}>
          x
        </button>

        <p>age is {age}</p>
        <p>place from {place}</p>
      </div>
    );
  };
  
  export default UserProfile;
  /*import UserProfile from "./components/UserProfile";
  import { Component } from "react";
  import "./index.css";
  const IntialUserDetails=[
      {
          unique:1,
      name:"midhin",
      age:40,
      place :"pacific"
  },
  { unique:2,
      name:"khadar",
      age:50,
      place :"palic"
  }
  ,
  {unique:3,
      name:"bhami",
      age:41,
      place :"pacific"
  },
  { unique:4,
      name:"prad",
      age:60,
      place :"nic"
  },
  ]
  class App extends Component{
      state={searchInput:""
          , UserDetails:IntialUserDetails
      }
      changesearch=(event)=>{
      this.setState({searchInput:event.target.value});
      }
  
    /* for delete the cuser from list
     ondeleteUser=(unique)=>{
      const{ UserDetails}=this.state;
      const filteredData = UserDetails.filter((eachuser) => eachuser.unique !== unique);
  
      this.setState({UserDetails:filteredData})
     }
      render(){
          const{searchInput,UserDetails}=this.state;
          const searchResults = UserDetails.filter((eachUser) => 
              eachUser.name.includes(searchInput.toLowerCase()) // ✅ Fixed filter logic
            );
          return(
          <div>
          <div className="logo">
              user list
              <input className="Search" type="search" value={searchInput} placeholder="Search users.." onChange={this.changesearch} />
              </div>
          {searchResults.map(eachuser=>(
              <UserProfile ondeleteUser={this.ondeleteUser} UserDetails={eachuser} key={eachuser.unique}/>
          ))}
         
          
        </div>
          )}
  }
  
  export default App;
  */
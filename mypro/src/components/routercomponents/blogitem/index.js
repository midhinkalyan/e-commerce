import '../../../index.css'
import {Link} from "react-router-dom";

const Blogitem = (props) => {
  const {item} = props
  const {id, img, author,topic} = item;
   return (<Link to={`/Blogs/${id}`} state={{item}}>
    <div className="item-container">
        <img  className =" images"src={img} alt="profile"/>
        <p className="item-topic">{topic}</p>
       
        </div>
        </Link>
  )
}

export default Blogitem

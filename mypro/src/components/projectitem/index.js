import "./index.css";
const Projectitem = (props) => {
    const { img, discription, projectno } = props;
    return (
      <div className="box">
        <h4>Project {projectno}</h4>
        <img src={img} alt={`Project ${projectno}`} />
        <p>{discription}</p>
      </div>
    );
  };
export default Projectitem;  
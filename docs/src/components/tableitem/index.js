import "./index.css";

const Tableitem = ({ tableList=[] ,updatetablename}) => {
  const update =(tablename)=>{
      return updatetablename(tablename);
  }
  return (
    <div className="tableitem">
      <p>THOSE ARE MY PROJECTS</p>
      <table className="tabledata">
        <tbody>
          <tr>
            {tableList.map((item, index) => (
              <td key={index}>
                <button className="btn" onClick={() => update(item.tablename)}>
  {item.tablename}
</button>

              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tableitem;

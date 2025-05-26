import { useParams, useLocation } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const item = location.state?.item;

  return (
    <div>
      <h1>Blog Details Page</h1>
      <p>Blog ID: {id}</p>
      <p>Blog Topic: {item?.topic}</p>
      <p>Blog Author: {item?.author}</p>
    </div>
  );
};

export default BlogDetails;

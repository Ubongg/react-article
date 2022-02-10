import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
 const { id } = useParams();
 const { error, isPending, data: blog } = useFetch('http://localhost:8000/blogs/' + id);
 const history = useHistory();

 const handleDelete = () => {
  fetch('http://localhost:8000/blogs/' + id, {
   method: 'DELETE'
  }).then(() => {
   history.push('/');
  })
 }

 return ( 
  <div className="blog-details">
   { isPending && <div className="loading">Loading...</div>}
   { error && <div>{ error }</div>}
   { blog && (
    <article>
     <h3>{ blog.title }</h3>
     <p>added by { blog.author }</p>
     <div>{ blog.body }</div>
     <button onClick={handleDelete}>delete</button>
    </article>
   )}
  </div>
 );
}
 
export default BlogDetails;
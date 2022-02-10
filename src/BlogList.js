import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
 function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
 }

 const today = new Date();
 const date = (today.toLocaleString('default', { month: 'long' })) + '  ' +  today.getDate() + ', ' + today.getFullYear() + ', ' + formatAMPM(today);

 return (
  <div className="articles">
   <h1>Articles List</h1>
   <div className="blog-list">
    {blogs.map(blog => (
    <div className="list">
     <Link to={ `/blogs/${blog.id}` }>
      <div className="blog-preview" key={blog.id}>
       <h3>{ blog.title }</h3>
       <p>{ date }</p>
       <p className="author">added by { blog.author }</p>
      </div>
     </Link>
    </div>
   ))}
   </div>
  </div>
 );
}
 
export default BlogList;
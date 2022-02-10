import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
 const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

 return (
  <div className="home">
   { error && <div>{ error }</div>}
   { isPending && <div className="loading">Loading...</div>}
   { blogs && <BlogList blogs={ blogs } />}
  </div>
 );
}
 
export default Home;
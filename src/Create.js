import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
 const [title, setTitle] = useState('');
 const [body, setBody] = useState('');
 const [author, setAuthor] = useState('mario');
 const history = useHistory();

 const handleSubmit = (e) => {
  e.preventDefault();
  const blog = { title, body, author };

  fetch('http://localhost:8000/blogs/', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog)
  }).then(() => {
    history.push('/');
  })
}

 return (
  <div className="create">
    <h2>Add a New Article</h2>
   <form onSubmit={ handleSubmit }>
    <label>Article title</label>
    <input
     type="text"
     required
     value={ title }
     onChange={(e) => setTitle(e.target.value)}
    />
    <label>Article body</label>
    <textarea
     required
     value={ body }
     onChange={(e) => setBody(e.target.value)}
    ></textarea>
    <label>Article author</label>
    <select
     value={ author }
     onChange={(e) => setAuthor(e.target.value)}
    >
     <option value="mario">mario</option>
     <option value="yoshi">yoshi</option>
    </select>
    <button>Add Article</button>
   </form>
  </div>
 );
}
 
export default Create;

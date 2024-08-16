import React,{useState, useEffect} from 'react';



const Fetch = () => {
  const [users, setUsers]= useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [body, setBody] = useState('')

  const login={
    name: name,
    email: email,
    body: body
  }
  const URL = 'https://jsonplaceholder.typicode.com/users'
  const COMMENT = 'https://jsonplaceholder.typicode.com/comments'

  useEffect(() => {
       fetch(URL)
        .then((response) => response.json())
         .then((data) => setUsers(data))
         .catch((err) => {
          console.log('this is the error', err );
        
         });
     }, []);


   

      const handleLogin = (e) => {
        e.preventDefault();
        fetch(COMMENT, {
          method: 'POST',
          headers:  {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
             },
          body: JSON.stringify(login)
        })
        .then((response)=>{
        
            console.log('response not okay', response)
          
        })
        .then((data)=> console.log(data))
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });      
      }
    
 
  
  return (
    <div>
      <ul>
      {users.map((user, index)=>(
        <li key={index}>
          <h2><span>{user.address.street},</span> {user.address.city}</h2>
          <h3>{user.name}</h3>
          <p>No: {user.phone}</p>

        </li>
      ))}
      </ul>
     <form onSubmit={handleLogin}>
     <div>
     <label htmlFor="name">First Name</label>
      <br />
      <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
      <br />
     </div>
     <div>
     <label htmlFor="email">Email</label>
      <br />
      <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <br />
     </div>
     <div>
     <label htmlFor="body">Body</label>
      <br />
      <textarea name="body" value={body} onChange={(e)=>setBody(e.target.value)} ></textarea>
      <br />
     </div>
     <button type='submit'>Submit</button>
     </form>
    </div>
  );
}

export default Fetch;

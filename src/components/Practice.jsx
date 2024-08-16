import React, { useEffect, useState } from "react";
import { UserContext } from "./Context";
import axios from "axios";
import { CarouselData } from "./Carousel";
const Form = () => {
  const { user, setUser, dog, setDog } = UserContext();
  const [datum, setDatum] = useState([]);
  const [facts, setFacts] = useState([]);
  const [firstname, setFirstName] = useState('')
  const [carImage, setCarImage] = useState(0)
  

  // URL of the server endpoint
// const url = 'https://jsonplaceholder.typicode.com/comments';

// // Data to be sent to the server
// const data = {
//   postId: 100,
//     id: 56,
//     name: "joy",
//     email: "joy@gmail.com",
//     body: "hello worldddd"
  
// };


// const options = {
//   method: 'POST', 
//   headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*'
//   },
//    body: JSON.stringify(data) 
// };

// // Making the POST request
// const handleApiCall= ()=>{
  
// fetch(url, options)
// .then(response => {
//   console.log('request:', response);
//   // Check if the response is successful (status code 200-299)
//   if (!response.ok) {
//     throw new Error('Network response was not ok ' + response.statusText);
//   }
//   return response.json(); // Parse the JSON response body
// })
// .then(data => {
//   // Handle the parsed response data
//   console.log('Success:', data);
// })
// .catch(error => {
//   // Handle any errors that occurred during the fetch
//   console.error('There was a problem with the fetch operation:', error);
// });
// }


  const handleSubmit = () => {
    setDog({
      ...dog,
      name: "jide",
      gender: "female",
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    setUser(user);
    console.log("user:", user);
  };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => setDatum(data))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    const fetchFacts = () => {
      fetch("https://catfact.ninja/facts")
        .then((response) => response.json())
        .then((data) => setFacts(data.data.slice(0, 15))) 
        .catch((err) => console.log(err));
    };

    fetchFacts();
  }, []);
const payload ={
     postId: 100,
       name: "joy",
     email: "joy@gmail.com",
    body: "hello worldddd"
      
}
  

const handleApiCall= ()=>{
  const url= 'https://jsonplaceholder.typicode.com/comments'
  fetch(url, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(payload)


  })
  .then(response=>console.log('this is the response:', response))
  .then(data=>console.log('this is the data:', data))
  .catch(err=> console.log('errr', err))
}
useEffect(()=>{
  const URL = 'https://jsonplaceholder.typicode.com/users'
   const fetchUsers= async()=>{
    try{
      const response = await axios.get(URL)
      console.log('hello:', response)
      setDatum(response.data)
    }
    catch(e){
console.log("error", e)
    }
  }
  fetchUsers()
}, [])

// const HandlePost= async()=>{
//   const url= 'https://jsonplaceholder.typicode.com/comments'
// const load= {
//   email: ''
// }
//   try{
// const res= await axios.post(url, load)
//   }catch(e){

//   }
// }
useEffect(
  ()=>{
const interval = setInterval(
  ()=>{
setCarImage(prev=>(prev + 1) % CarouselData.length)
}, 2000)
return  (()=>clearInterval(interval))
  }
, [])

  return (
    <div>
      <p>rent</p>
      <form onSubmit={handleForm}>
        <input
          type="text"
          style={{ border: "1px solid red" }}
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      <p>{user}</p>
      <p>{dog.name}</p>
      <button onClick={handleSubmit}>click</button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {facts.map((fact, index) => (
          <div
            key={index}
            style={{ border: "1px solid black", padding: "10px" }}
          >
            <p>{fact.fact}</p>
          </div>
        ))}
      </div>
      <ul>
        {datum.map(({ id, name }) => (
          <li key={id}>
            {id} | {name}
          </li>
        ))}
      </ul>
      <button onClick={handleApiCall}>click</button>
      <form >
        <label htmlFor="name">FirstName</label>
        <input type="text" value={firstname} onChange={(e)=>setFirstName(e.target.value)} />
      </form>
<div>
  
<img src={CarouselData[carImage].image} alt="carousel" />
<p>{CarouselData[carImage].description}</p>
</div>
    </div>
  );
};

export default Form;
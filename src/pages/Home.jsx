import React from 'react';
import { PrimaryButton, SecButton } from '../components/Button';
import { useState } from 'react';

const Home = () => {
  const [boy, setBoy]= useState('')
  const [count, setCount] = useState(0)
  const [objects, setObjects]= useState({
    name: '',
    age: '',
    color: ''
  })

  const handleBoy=()=>{
    setBoy('Joy')
  }
  const handleCount = ()=>{
    setCount(count+1)
  }
const HandleClick= (e)=>{
  e.preventDefault()
  console.log('hey! I am clicked')
}
const handleObject=()=>{
  setObjects({
    ...objects,
    name: 'Niyi',
    age: '12',
    color: 'black'
  })
}
  return (
    <div>
      <h2>This is Home</h2>
      <PrimaryButton click={HandleClick}>
      Explore &rarr;
      </PrimaryButton>
      <h3>Hello {boy}</h3>
      <SecButton click={handleBoy}>
        Change Name 
      </SecButton>

      <p>{count}</p>
      <PrimaryButton click={handleCount}>
      Increment
      </PrimaryButton>
      <div>
        <h1>Name: {objects.name}</h1>
        <p>Age:{objects.age}</p>
        <p>Color:{objects.color}</p>
      </div>
      <SecButton click={handleObject}>
        object 
      </SecButton>
    </div>
  );
}

export default Home;

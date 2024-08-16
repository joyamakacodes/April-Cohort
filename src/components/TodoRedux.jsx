import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addtodo, removetodo } from '../actions/TodoAction';
import { useNavigate } from 'react-router-dom';

const Todolist =({lists, addtodo, removetodo})=>{
  const navigate = useNavigate()
  const [input, setInput] = useState('')
const handleAddTodo = (e)=>{
  e.preventDefault()
  if(input){
    addtodo(input)
    setInput('')
  }
}
const handleSubmit=()=>{
  navigate('/reuse')
}
  return(
    <div>
      <input type="text" value={input} onChange={((e)=>setInput(e.target.value))} className='border border-green-500'/>
      <button onClick={handleAddTodo}>add to do</button>
      <ul>
        {lists.map((todo, index)=>(
          <li key={index}>
            <p>{todo}</p>
            <button onClick={(()=>removetodo(index))}>remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>next</button>
    </div>
  )
}

const mapStateToProps = (state)=>{
  return{
    lists: state.todos
  }
}

const mapDispatchToProps = {
  addtodo,
  removetodo
}
export default connect(mapStateToProps, mapDispatchToProps)(Todolist)
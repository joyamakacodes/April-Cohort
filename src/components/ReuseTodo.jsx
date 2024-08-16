import React from 'react';
import { connect } from 'react-redux';

const ReuseTodo = ({lists}) => {
  return (
    <div>
      <ul>
      {lists.map((list, index)=>(
        <li key={index}>{list}</li>
      ))}

      </ul>
    </div>
  );
}

const mapStateToProps=(state)=>({
  lists: state.todos
})
export default connect (mapStateToProps)(ReuseTodo)
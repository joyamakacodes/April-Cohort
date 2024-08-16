import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../actions/CountAction';
import { useNavigate } from 'react-router-dom';

const Counts = ({count, increment, decrement, reset}) => {
  const navigate = useNavigate()

  const handleSubmit=()=>{
    navigate('/product')
  }
  return (
    <div>
      <h2>{count}</h2>
      <br />
      <button onClick={increment}>+</button>
      <br />
      <button onClick={decrement}>-</button>
      <br />
      <button onClick={reset}>reset</button>
      <br />
      <button onClick={handleSubmit}>Go to Page</button>
    </div>
  );
}

const mapStateToProps = (state) => (
  {
    count: state.count.count
  }
)

const mapDispatchToProps = {
  increment,
  decrement,
  reset
}
export default connect(mapStateToProps, mapDispatchToProps)(Counts)
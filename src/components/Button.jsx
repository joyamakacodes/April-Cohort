import React from 'react';

export const PrimaryButton = ({children, click}) => {
  return (
    <button style={{backgroundColor: 'rebeccapurple', color: 'white', padding: '10px 20px', border: '1px solid white', borderRadius: '20px'}} onClick={click}>
      {children}
    </button>
  );
}


export const SecButton = ({children, click}) => {
  return (
    <button style={{backgroundColor: 'white', color: 'purple', padding: '10px 20px', border: '1px solid purple', borderRadius: '20px'}} onClick={click}>
      {children}
    </button>
  );
}



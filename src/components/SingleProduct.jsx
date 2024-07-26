import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ProductsData } from '../data/ProductsData';
const SingleProduct = () => {
  const {id}= useParams()
  
  useEffect(()=>{

  }, [id])
  return (
    <div>
      
    </div>
  );
}

export default SingleProduct;

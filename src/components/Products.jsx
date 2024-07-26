import React from 'react';
import { ProductsData } from '../data/ProductsData';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      {
        ProductsData.map(({id, image, title, desc})=>(
          <div key={id}>
            <Link to={`/product/${id}`}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{desc.slice(0, 15)}...</p>
            </Link>
          </div>
        ))
      }
    </div>
  );
}

export default Products;

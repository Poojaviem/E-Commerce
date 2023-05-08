import  { useState, useEffect } from 'react';
import axios from 'axios';
function Jewelery() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/category/jewelery')
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="products">
      <h1>Jewelery</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div className="product">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-info">
                <h2>{product.title}</h2>
                <p className="product-price">Price:-${product.price}</p>
                <button className='btn'>Add To Cart</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Jewelery;

import { Link } from "react-router-dom";
function Cart() {
    return (
     <div>
       <div className="products">
      <h1>Products</h1>
      <ul>
        
          <li >
            <div className="product">
              <div className="product-image">
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
              </div>
              <div className="product-info">
                <h2>Title:</h2>
                <p className="product-price">Price</p>
               

               <Link to="/cart" > <button className='btn'>Add To Cart</button></Link>
              </div>
            </div>
          </li>
      </ul>
    </div>
    <div className="ammount">
      <h1>Amount</h1>
    </div>
     </div>
    );
  }
  
  export default Cart;
  
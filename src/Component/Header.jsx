import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/jewelery">Jewelery</Link>
          </li>
         
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

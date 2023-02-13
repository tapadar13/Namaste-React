import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://i.ibb.co/nMD7kzB/Hurry-Curry.jpg"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
              }}
            >
              Contact
            </Link>
          </li>
          {/* <li>Cart</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;

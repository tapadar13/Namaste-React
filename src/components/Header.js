import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2"
      alt="logo"
      src="https://i.ibb.co/nMD7kzB/Hurry-Curry.jpg"
    />
  </a>
);

const Header = () => {
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link
              to="/about"
              style={{
                textDecoration: "none",
              }}
            >
              About
            </Link>
          </li>
          <li className="px-2">
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

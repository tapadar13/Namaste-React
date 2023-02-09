import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo/Title
 *  - Nav Items
 *  - Cart
 * Body
 *  - Search Bar
 *  - Restaurant List
 *     - Restaurant Cards
 *        - Image
 *        - Name
 *        - Rating
 *        - Cuisine
 * Footer
 *  - Links
 *  - Copyright
 * 
 */

const Title = () => (
    <a href="/">
        <img className="logo" alt="logo" src="https://i.ibb.co/nMD7kzB/Hurry-Curry.jpg" />
    </a>   
)

const Header = () => {
    return (
        <div className="header">
           <Title />
           <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
           </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="card">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb" />
            <h3>KFC</h3>
            <h2>Burgers, American, Fast Food</h2>
            <div>
              <h2>4.2 stars</h2>
              <h2>19 mins</h2>
            </div>
        </div>
    )
}

const Body = () => (
    <>
       <RestaurantCard />
    </>
)

const Footer = () => (
    <h3>Footer</h3>
)

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
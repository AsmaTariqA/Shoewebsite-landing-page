import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <>
            <div className="nav">
                <div className="nav-list">
                    <li><a href="home">Home</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="contact">Contact</a></li>
                    <li className="buynow"><a href="buy now">Buy Now</a></li>
                    <li className="addtocart"><a href="add to cart"><FontAwesomeIcon icon={faShoppingCart} />Cart</a></li>
                </div>
            </div>
        </>
    )
}
export default Navbar;

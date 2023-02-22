import "./cart.css";
import Header from '../header/Header';
import Footer from "../footer/Footer";
import cart from './img/cart.svg'
import CartBook from "./CartBook";
import { Navigate } from 'react-router-dom'

export default function Cart() {
    if (!localStorage.username) {
        return <Navigate to="/" redirect={true} />
    }

    let cartContent;

    if (!localStorage.bookToCart) {        
        cartContent = <div className="main">
            <button className="purchase" disabled>Purchase</button>
            <img src={cart} alt="cart" />
            <span>Cart empty..</span>
        </div>
    }
    else if (localStorage.bookToCart) { 
        let cartBooks = JSON.parse(localStorage.bookToCart);
        cartContent = <CartBook sold={cartBooks} />
    }

    return (
        <>
            <section className="header">
                <Header />
            </section>
            {cartContent}
            <Footer />
        </>
    )
}

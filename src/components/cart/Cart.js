import "./cart.css";
import Header from '../header/Header';
import Footer from "../footer/Footer";
import cart from './img/cart.svg'
import CartBook from "./CartBook";
import {useState, useEffect} from 'react'

export default function Cart() {
    if (!localStorage.username) {
        document.location = "/"
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

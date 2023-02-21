import './specBook.css';
import Footer from "../footer/Footer";
import Header from '../header/Header';
import {useState, useMemo} from 'react'
import { Link } from "react-router-dom";


export default function SpecificBook() {
    if (!localStorage.username) {
        document.location = "/prometheus-x-course-task"
    }

    let { author, price, image, title, description, id } = JSON.parse(localStorage.specificBook)

    let booksToCart;
    let totSamiy
    if (!localStorage.bookToCart) {
        booksToCart = []
    } else {
        booksToCart = JSON.parse(localStorage.bookToCart);
        if (localStorage.bookToCart.includes(title)) {
            totSamiy = JSON.parse(localStorage.bookToCart).find(el => el.title == title).count
        }
    }

    const [count, setCount] = useState(!totSamiy ? 1 : totSamiy);
    
    let totalBooklPrice = useMemo(() => ('$' + price * count).slice(1), [count])
    totalBooklPrice = Number(totalBooklPrice).toFixed(2);

    let total = { count, totalBooklPrice, title, price };

    let countId = {
        countNew:count,
        id
    }

    localStorage.setItem('specialBook', JSON.stringify(countId))

    booksToCart.push(total);

    function addedBooks() {
        localStorage.bookToCart = JSON.stringify(booksToCart)
    } 
    
let book = <section className="book-page">
        <figure>
            <img src={image} alt="javascript everywhere" />
            <figcaption>
                <p>
                    <b>Description: </b>
                    {description}
                </p>
            </figcaption>
        </figure>
        <section className="about">
            <p><b>Book name: </b>{title}</p>
            <p><b>Book author:</b> {author}</p>
            <p><b>Book level:</b> Beginner</p>
            <p><b>Book tags:</b> Core</p>
        </section>
        <section className="price-block">
            <div className="price-block-row">
                <span>Price, $ </span>
            <span id="price">{ price}</span>
            </div>
            <div className="price-block-row">
                <label htmlFor="count">Count:</label>
                <input onChange={(e) => setCount(Number(e.target.value))} type="number" id="count" min="1" max="42" value={count} />
            </div>
            <div className="price-block-row">
                <span>Total price </span>
                <span id="totalPrice">{totalBooklPrice}</span>
        </div>
        <Link to="/cart"><button onClick={addedBooks} className="price-block-btn" type="submit">Add to cart</button></Link>
            
        </section>
    </section>
    

    return (
        <>
            <section className="header">
                <Header />
            </section>
            
                {book}
            
            <Footer />
        </>
    )
}

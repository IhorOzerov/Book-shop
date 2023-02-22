import {useState} from "react"
import cart from './img/cart.svg'
export default function CartBook(props) {
    let totalPrice = new Number();
    let [singleBook, setSingleBook] = useState('')

    let booksInCart = localStorage.getItem('bookToCart');

    if (!booksInCart) {
        return (
            <div className="main">
                <button className="purchase" disabled>Purchase</button>
                <img src={cart} alt="cart" />
                <span>Cart empty..</span>
            </div>
        );
    }

    singleBook = props.sold.map((el) => (
        <div className="cartBook" key={Number(el.totalBooklPrice)}>
            <p className="cart-text"><b>Book name: </b>{el.title}</p>
            <p className="cart-price"><b>Book price: </b>{el.price}</p>
            <p className="cart-price"><b>Book count: </b>{el.count}</p>
            <p className="cart-price"><b>Price, $</b> {Number(el.totalBooklPrice)}</p>
        </div>
    ))
    if (localStorage.bookToCart) {
        JSON.parse(localStorage.bookToCart).map((el) => {
            totalPrice += Number(el.totalBooklPrice);
            return totalPrice.toFixed(2)
        })
    }
    
    function cleanStorage() {
        localStorage.removeItem("bookToCart");
        setSingleBook([]);
    }
    
    return (
        <div className="main">
            <button onClick={cleanStorage} className="purchase">Purchase</button>
            {singleBook}
            <p id="total">{'Total price,$ '} {totalPrice}</p>           
        </div>
    )
}

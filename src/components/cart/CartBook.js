export default function CartBook(props) {
    let totalPrice = new Number();
    let singleBook = props.sold.map((el) => (

        <div className="cartBook" key={Number(el.totalBooklPrice)}>
            <p className="cart-text"><b>Book name: </b>{el.title}</p>
            <p className="cart-price"><b>Book price: </b>{el.price}</p>
            <p className="cart-price"><b>Book count: </b>{el.count}</p>
            <p className="cart-price"><b>Price, $</b> {Number(el.totalBooklPrice)}</p>
        </div>

    ))
    
    JSON.parse(localStorage.bookToCart).map((el) => {
        totalPrice += Number(el.totalBooklPrice);
        return totalPrice.toFixed(2)
    })

    function cleanStorage() {
        localStorage.removeItem("bookToCart");
        singleBook = ""
        document.location = 'https://ihorozerov.github.io/cart'
    }
    
    return (
        <div className="main">
            <button onClick={cleanStorage} className="purchase">Purchase</button>
            {singleBook}
            <p id="total">{'Total price,$ '} {totalPrice}</p>           
        </div>
    )
}

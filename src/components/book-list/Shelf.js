import { Link } from "react-router-dom";
import notFound from './img/imageNotFound.png';

export default function Shelf(props) {
    const shelf = props.book.map((el) => (
        
        <div id={el.id} className = "book" key = { el.id } >
            <img src={el.image === "" ? notFound : el.image} alt="myFace" />
            <p className="book-text"><b>Book name: </b>{el.title.length >= 24 ? (el.title.slice(0, 24) + "...") : el.title}</p>
            <p className="book-text"><b>Book author: </b>{el.author}</p>
            <div className="book-price">
                <p className="book-text"><b>Price, $</b> {el.price}</p>
                <Link to="/specificbook"><button onClick={(e)=>bookInfo(e)} className="view-btn">View</button></Link>
            </div>
        </div>
    ))
        function bookInfo(e) {
            let data = props.book.find((el) => el.id == e.target.closest('.book').id)           
            localStorage.setItem('specificBook', JSON.stringify(data, e.target.closest('.book').id));
        }
    return (
        <section className="book-list">
            {shelf}
        </section>
    )
}

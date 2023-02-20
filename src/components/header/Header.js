import './header.css';
import ava from './img/avatar.png';
import cart from './img/cart.svg';
import { Link } from "react-router-dom";

export default function Header() {
    function clearUser() {
        localStorage.removeItem('username');
    }
    return (
            <>
                <h1>JS BAND STORE/ Ozerov Ihor Dmytrovych</h1>
                <section className="header-right">
                <Link to="/cart"><img className="head-img" src={cart} alt="cart"/></Link>
                <Link to="/book-shop/"><button onClick={clearUser}>Sign-Out</button></Link>
                <div className="user">
                    <img className="head-img" src={ava} alt="avatar" />
                    <span>{ localStorage.getItem('username')}</span>
                    </div>
                </section>
            </>
    )
}

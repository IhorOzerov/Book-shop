import './signin.css';
import ava from './img/avatar.png';
import Footer from "../footer/Footer";
import { useState} from 'react'
import { Link } from "react-router-dom";

export default function SignIn() {
    const [input, setInput] = useState('');
    const checkSumbit = () => {
        let sumbit = document.getElementById('submit')
        if (input.length>=3 && input.length<=15) {
            sumbit.disabled = false;
            localStorage.setItem('username', input)
        } else {
            sumbit.disabled = true;
        }
    }

    return (
        <> 
            <section className="header">
                <h1>JS BAND STORE/ Ozerov Ihor Dmytrovych</h1>
            </section>
            <div className="mainBlock">
                <section className="autorization-block">
                    <img src={ava} alt="avatar"/>
                        <div className="input-block">
                            <label htmlFor="username">Username</label>
                        <input onInput={e => setInput(e.target.value)} onKeyUp={checkSumbit}  type="text" id="username" placeholder="type Username"/>
                        <Link to="/booklist"><button id='submit' type="submit" disabled>Sign In</button></Link>
                        </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

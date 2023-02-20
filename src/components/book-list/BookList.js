import './bookList.css';
import data from "./books.json";
import Footer from "../footer/Footer";
import Header from '../header/Header';
import { useEffect, useState } from 'react';
import Shelf from './Shelf';

export default function BookList() {
    const responseData = []
    responseData.push(...data.books);

    const [input, setInput] = useState('');
    const [select, setSelect] = useState('default')
    let [sortedBooks, setSort] = useState(responseData)

    if (!localStorage.username) {
        document.location = "book-shop/"
    }

        
    useEffect(() => {
        findBook();
    }, [input, select])
    
    function findBook () {
        sortedBooks = [...responseData];

        sortedBooks = sortedBooks.filter(el => el.title
            .toLowerCase()
            .includes(input
                .trim()
                .toLowerCase()));
        
        if (select === "lowPrice") {
            setSort(sortedBooks.filter(el => el.price <= 15)
                                    .sort((a, b) => a.price - b.price));
        } else if (select === "midPrice") {
            setSort(sortedBooks.filter(el => el.price > 15 && el.price <= 30)
                                    .sort((a, b) => a.price - b.price));
        } else if (select === "highPrice") {
            setSort(sortedBooks.filter(el => el.price > 30)
                                    .sort((a,b)=> a.price-b.price));
        } else {
            setSort(sortedBooks)
        }
    }

    return (
        <>
            <section className="header">
                <Header />
            </section>

            <section className="filters">
                <input onInput={findBook} onChange={e => setInput(e.target.value)}  type="search" id="searchName" placeholder="Search by book name" />
                <select onChange={findBook} onInput={e => setSelect(e.target.value)} id="sortPrice" autoComplete="off">
                    <option value="default">default</option>
                    <option value="lowPrice">from 0 to 15</option>
                    <option value="midPrice">from 15 to 30</option>
                    <option value="highPrice">more than 30</option>
                </select>
            </section>
            <Shelf book={sortedBooks} />
            <Footer />
        </>
    )
    
}

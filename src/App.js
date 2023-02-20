import BookList from "./components/book-list/BookList";
import Cart from "./components/cart/Cart";
import SignIn from "./components/signin/Signin";
import SpecificBook from "./components/specific-book/SpecificBook";
import Page404 from "./components/Page404"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="https://ihorozerov.github.io/Book-shop/" element={<SignIn />} />
        <Route path="booklist" element={<BookList />} />
        <Route path="cart" element={<Cart/>} />
        <Route path="specificbook" element={<SpecificBook />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;

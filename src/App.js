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
        <Route path="Book-shop/" element={<SignIn />} />
        <Route path="Book-shop/booklist" element={<BookList />} />
        <Route path="Book-shop/cart" element={<Cart/>} />
        <Route path="Book-shop/specificbook" element={<SpecificBook />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;

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
        <Route path="prometheus-x-course-task/" element={<SignIn />} />
        <Route path="prometheus-x-course-task/booklist" element={<BookList />} />
        <Route path="prometheus-x-course-task/cart" element={<Cart/>} />
        <Route path="prometheus-x-course-task/specificbook" element={<SpecificBook />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;

import "./App.css";

import FirstHeader from "./components/FirstHeader";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Register from "./components/Register";
import FreeGoogleBooks from "./components/FreeGoogleBooks";
import LandingPage from "./components/LandingPage";
import ListBooks from "./components/ListBooks";
import AddBook from "./components/AddBook";
import ViewBook from "./components/ViewBook";
import MembersDb from "./components/MembersDb";

import SearchNav from "./components/SearchNav";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <SearchNav />
      <div className="App">
        <FirstHeader />
        <Routes>
          <Route>
            <Route path="/" element={<LandingPage />} />
            <Route path="/books" element={<ListBooks />} />
            <Route path="/addbook" element={<AddBook />} />
            <Route path="/update-book/:id" element={<AddBook />} />
            <Route path="/register" element={<Register />} />
            <Route path="/googlebooks" element={<FreeGoogleBooks/>} />
            <Route path="/members" element={<MembersDb />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/delete-book/:id" component={DeleteBook}></Route>  */}
            <Route path="/view-book/:id" element={<ViewBook />} />
          </Route>
        </Routes>
      </div>
      <Footer />,
    </BrowserRouter>
  );
}

export default App;

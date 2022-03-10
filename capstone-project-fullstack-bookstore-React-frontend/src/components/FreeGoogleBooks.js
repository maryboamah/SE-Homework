import React, { useState, useEffect } from "react";
import axios from "axios";
import BookService from "../Services/BookService";

const FreeGoogleBooks = () => {
  let [visible, setVisible] = useState(4);

  const [googleBooks, setGoogleBooks] = useState([]);

  const loadMore = () => {
    setVisible(visible + 4);
  };

  //get all books
  useEffect(() => {
    BookService.getGoogleBook()
      .then((res) => {
        setGoogleBooks(res.data);
        console.log(res.data);
        if (!res.data) {
          return <div className="second">Loadding...</div>;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  return (
    <div className="second">
      
    </div>
  );
};
export default FreeGoogleBooks;

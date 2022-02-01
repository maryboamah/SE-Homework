import FetchData from "./FetchData";
import { useState } from "react/cjs/react.development";
import React, { useEffect } from "react";
function SearchResults(props) {
  console.log(props.userValue);
  let url = `https://www.googleapis.com/books/v1/volumes?q=${props.userValue}+${props.selectValue}&maxResults=20&key=AIzaSyBwnJ8SVW--D44GOqK3qQU3ZP6TEOAYQuY`;
  const { data3 } = FetchData(
    `https://www.googleapis.com/books/v1/volumes?q=${props.userValue}+${props.selectValue}&maxResults=20&key=AIzaSyBwnJ8SVW--D44GOqK3qQU3ZP6TEOAYQuY`
  );
  console.log(props.userValue);
  console.log(props.selectValue);
  let [visible3, setVisible3] = useState(6);
  const loadMore3 = () => {
    setVisible3(visible3 + 6);
  };

  let results = data3 && data3.items.map((book, index) => book);
  console.log(results);
  return (
    <div className="searchResults">
      <div className="bestseller">
        <fieldset>
          <div className="bestseller-list grid-card1">
            {data3 &&
              data3.items.map((book, index) => (
                <div key={index}>
                  <div className="books">
                    <div className="bookimage">
                      <img
                        src={`${book.volumeInfo.imageLinks.thumbnail}`}
                        alt="book cover"
                      ></img>
                    </div>
                    <p>{book.volumeInfo.title}</p>
                    <p>by {book.volumeInfo.authors}</p>
                    <p>Publisher: {book.volumeInfo.publisher}</p>
                    <button className="addfavorite" onClick={props.add}>
                      Add to Favorite
                    </button>
                    <button className="preview">
                      <a href={`${props.preview}`}>Google Preview</a>{" "}
                    </button>
                  </div>
                  <legend id="loadmore1">
                    {visible3 < data3.items.length && (
                      <button onClick={loadMore3}>Load More</button>
                    )}
                  </legend>
                </div>
              ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
}
export default SearchResults;

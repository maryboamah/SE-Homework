import React, { useState, useEffect } from "react";

import BookService from "../Services/BookService";

import { Link } from "react-router-dom";

const ListBooks = () => {
  const [books, setBooks] = useState([]);
  
  let [visible, setVisible] = useState(4);

  //get all books
  useEffect(() => {
      BookService.getBooks()
        .then((res) => {
          setBooks(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    
  });

  //delete book with an id specified 
  const deletebook = (id) => {
    BookService.deleteBook(id)
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const loadMore = () => {
    setVisible(visible + 4);
  };
  
  const loadLess = () => {
    setVisible(visible - 4);
  };
  





  return (
    <div className="second">
      
      <div className="container">
        <h2 className="text-center">List Books</h2>
        <div>
          <Link to="/addbook" className="btn btn-primary">
            Add Book
          </Link>
        </div>
        <br />
        <table className="table table-bordered table-striped" style={{maxWidth:"47vw"}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Year</th>
              <th>ISBN</th>
              <th>Genre</th>
              <th>Country</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.slice(0, visible).map((book) => (
                

                
              <tr key={book.booksId} >
                <td>{book.booksId}</td>
                <td><img class="img-fluid"  src="default_book_cover.jpg" alt="No Cover" /></td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.pubYear}</td>
                <td>{book.isbn}</td>
                <td>{book.genre}</td>
                <td>{book.country}</td>
                <td>{book.price}</td>
                <td>
                  <Link
                    to={`/update-book/${book.booksId}`}
                    className="btn btn-info" style={{ marginLeft: "10px", marginBottom:"10px",width:"90px" }}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "10px", marginBottom:"10px",width:"90px"  }}
                    onClick={() => {
                      deletebook(book.booksId);
                    }}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/view-book/${book.booksId}`}
                    style={{ marginLeft: "10px",width:"90px"  }}
                    className="btn btn-success"
                    
                  >
                    View
                  </Link>
                  
                </td>
              </tr>
              
            ))}
          </tbody>
        </table>
        <div className="load">
          <div>
        <button onClick={loadMore} class="btn btn-primary">More Books</button>
        </div>
        <div>
        <button onClick={loadLess} class="btn btn-danger">Less Books</button>
        </div>
        </div>
      </div>
      </div>
    
  );
};

export default ListBooks;

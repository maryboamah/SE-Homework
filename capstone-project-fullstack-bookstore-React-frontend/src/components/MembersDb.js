import React, { useState, useEffect } from "react";

import BookService from "../Services/BookService";

import { Link } from "react-router-dom";
function MembersDb(){
    const [books, setBooks] = useState([]);
  
 const [visible, setVisible] = useState(4);
 const INSTRUCTOR = 'in28minutes'

  //get all books
  useEffect(() => {
      BookService.retrieveAllCourses(INSTRUCTOR)
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
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Favorite</th>
            
            </tr>
          </thead>
          <tbody>
            {books.slice(0, visible).map((book) => (
                

                
              <tr key={book.id} >
                <td>{book.id}</td>
                
                <td>{book.name}</td>
                <td>{book.email}</td>
                <td>{book.location}</td>
                <td>{book.favorite}</td>
                
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
        <button onClick={loadMore} class="btn btn-primary">More Books</button>
      </div>
      </div>
    
  );
}
export default MembersDb;
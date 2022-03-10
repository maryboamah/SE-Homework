import React, { useState, useEffect } from "react";

import BookService from "../Services/BookService";

const FreeGoogleBooks = () => {
  let [visible, setVisible] = useState(4);

  const [googleBooks, setGoogleBooks] = useState([]);

  const loadMore = () => {
    setVisible(visible + 2);
  };

  //get all books
  useEffect(() => {
    getDataFetch()
  },[]);
  const loadLess = () => {
    setVisible(visible - 2);
  };
  

  const getDataFetch = async () => {
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
  };

  return (
    <div className="second">
       
       


       <table className="table table-bordered table-striped" style={{maxWidth:"47vw"}}>
<thead>
  <tr>
    
    <th>Image</th>
    <th>Title</th>
    <th>Author</th>
    <th>summary</th>
    
  </tr>
</thead>
<tbody>
{googleBooks.items.slice(0, visible).map((book, index) => (
      

      
      <tr key={index} >
        
        <td><img class="img-fluid"  src={`${book.volumeInfo.imageLinks.thumbnail}`} alt="No Cover" /></td>
        <td>{book.volumeInfo.title}</td>
        <td>{book.volumeInfo.authors}</td>
        <td className="card">{book.volumeInfo.description}</td>
    
        <td>
          
          <a className="btn btn-primary" href={`${book.volumeInfo.previewLink}`}Preview Link>Preview Book</a>
          
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
  );
};
export default FreeGoogleBooks;

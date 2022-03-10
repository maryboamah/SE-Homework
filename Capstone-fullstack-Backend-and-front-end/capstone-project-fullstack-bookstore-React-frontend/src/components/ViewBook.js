import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import BookService from "../Services/BookService";

import { Link } from "react-router-dom";

const ViewBook =()=>{

    const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [publisher, setPublisher] = useState("");
  const [pubYear, setPubYear] = useState("");
  const [country, setCountry] = useState("");
  const [isbn, setIsbn] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");
  const {id}= useParams();
  


  useEffect(()=>{
    BookService.getBookById(id).then((res)=>{
        setAuthor(res.data.author);
        setCountry(res.data.country);
        setGenre(res.data.genre);
        setIsbn(res.data.isbn);
        setPrice(res.data.price);
        setPubYear(res.data.pubYear);
        setPublisher(res.data.publisher);
        setTitle(res.data.title);
        setImage(res.data.image);
              }).catch(error=>{
                  console.log(error)
              })
},[])

  





  return (
    <div className="second">
      <div className="container">
        
          
          <h2 className="text-center">Details For Book Number {id}</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Title :</label>
                  <input
                    type="text"
                    placeholder="Enter Title"
                    name="title"
                    className="form-control"
                    value={title} readOnly={true}
                    onChange={(e) => setTitle(e.target.value)}
                  ></input>
                  <label className="form-label">Author :</label>
                  <input readOnly={true}
                    type="text"
                    placeholder="Enter Author"
                    name="author"
                    className="form-control"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  ></input>
                  <label className="form-label">Publisher :</label>
                  <input readOnly={true}
                    type="text"
                    placeholder="Enter Publisher"
                    name="Publisher"
                    className="form-control"
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                  ></input>
                  <label className="form-label">Publication Year :</label>
                  <input readOnly={true}
                    type="text"
                    placeholder="Enter Publication Year"
                    name="pubYear"
                    className="form-control"
                    value={pubYear}
                    onChange={(e) => setPubYear(e.target.value)}
                  ></input>
                  <label className="form-label">Country :</label>
                  <input readOnly={true}
                    type="text"
                    placeholder="Enter Country"
                    name="country"
                    className="form-control"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  ></input>
                  <label className="form-label">ISBN :</label>
                  <input readOnly={true}
                    type="text"
                    placeholder="Enter ISBN"
                    name="isbn"
                    className="form-control"
                    value={isbn}
                    onChange={(e) => setIsbn(e.target.value)}
                  ></input>
                  <label className="form-label">Genre :</label>
                  <input readOnly={true}
                    type="text"
                    placeholder="Enter Genre"
                    name="genre"
                    className="form-control"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                  ></input>
                  <label className="form-label">Price :</label>
                  <input readOnly={true}
                    type="text"
                    placeholder="Enter Price"
                    name="price"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  ></input>
                </div>
               
                <Link to="/books" className="btn btn-success">View All</Link>
              </form>
            </div>
          </div>
        </div>
 
   
  );
}
export default ViewBook
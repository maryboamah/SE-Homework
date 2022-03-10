import React, { useState, useEffect } from "react";
import BookService from "../Services/BookService";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [publisher, setPublisher] = useState("");
  const [pubYear, setPubYear] = useState("");
  const [country, setCountry] = useState("");
  const [isbn, setIsbn] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleImage = (e) => {
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const updateOrSaveBook = (e) => {
    e.preventDefault();

    const book = {
      title,
      author,
      price,
      publisher,
      pubYear,
      country,
      isbn,
      genre,
      image,
    };
    if (id) {
      BookService.updateBook(book, id)
        .then((res) => {
          setImage(res.data.image);

          navigate("/books");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      BookService.createBook(book)
        .then((res) => {
          navigate("/books");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    BookService.getBookById(id)
      .then((res) => {
        setAuthor(res.data.author);
        setCountry(res.data.country);
        setGenre(res.data.genre);
        setIsbn(res.data.isbn);
        setPrice(res.data.price);
        setPubYear(res.data.pubYear);
        setPublisher(res.data.publisher);
        setTitle(res.data.title);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const heading = () => {
    if (id) {
      return <h2 className="text-center">Update Book</h2>;
    } else {
      return <h2 className="text-center">Add Book</h2>;
    }
  };

  return (
    <div className="second">
      <div class="container">
        {heading()}
        <div className="card-body">
          <form>
            <div className="form-group mb-2">
              <label className="form-label">Title :</label>
              <input
                type="text"
                placeholder="Enter Title"
                name="title"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
              <label className="form-label">Author :</label>
              <input
                type="text"
                placeholder="Enter Author"
                name="author"
                className="form-control"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              ></input>
              <label className="form-label">Publisher :</label>
              <input
                type="text"
                placeholder="Enter Publisher"
                name="Publisher"
                className="form-control"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
              ></input>
              <label className="form-label">Publication Year :</label>
              <input
                type="text"
                placeholder="Enter Publication Year"
                name="pubYear"
                className="form-control"
                value={pubYear}
                onChange={(e) => setPubYear(e.target.value)}
              ></input>
              <label className="form-label">Country :</label>
              <input
                type="text"
                placeholder="Enter Country"
                name="country"
                className="form-control"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              ></input>
              <label className="form-label">ISBN :</label>
              <input
                type="text"
                placeholder="Enter ISBN"
                name="isbn"
                className="form-control"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
              ></input>
              <label className="form-label">Genre :</label>
              <input
                type="text"
                placeholder="Enter Genre"
                name="genre"
                className="form-control"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              ></input>
              <label className="form-label">Price :</label>
              <input
                type="text"
                placeholder="Enter Price"
                name="price"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
              <label className="form-label">Image :</label>
              <input
                type="file"
                name="file"
                className="form-control"
                onChange={handleImage}
              ></input>
            </div>
            <button
              className="btn btn-success"
              onClick={(e) => updateOrSaveBook(e)}
            >
              Submit
            </button>
            <Link to="/books" className="btn btn-danger">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddBook;

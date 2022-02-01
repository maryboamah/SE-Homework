import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useState } from "react/cjs/react.development";

function Header() {
  // console.log(fav1);
  let navigate = useNavigate();

  // set searchValue and selection options to an empty string
  let [searchValueCategory, setCategory] = useState('')
  let [searchValueInput, setInput] = useState('')

  // get search value with submit button
  // let getSearchvalue =()=>{
  //     // let value = document.getElementById("select").value
  //     // let inputValue = document.getElementById("text").value
  //     // searchValueCategory = value
  //     // searchValueInput = inputValue

  // }
  // setCategory(document.getElementById("select").value)
  // setInput(document.getElementById("text").value)
  // setCategory(document.getElementById('select').value)
  // useEffect(()=>{

  //     setCategory(document.getElementById("select").value)
  //     setInput(document.getElementById("text").value)

  // //     setInput(searchValueInput)
  // },[])
  // console.log(searchValueCategory)
  //  input value into data
  // const {data3} = FetchData(`https://www.googleapis.com/books/v1/volumes?q=${searchValueInput}+${searchValueCategory}&maxResults=20&key=AIzaSyBwnJ8SVW--D44GOqK3qQU3ZP6TEOAYQuY`)

  return (
    <div className="header">
      <p id="logo">Play Book</p>
      <div id="search">
        {" "}
        <select id="select">
          <option value=""> ...Select..</option>
          <option value="inauthor"> Author</option>
          <option value="intitle"> Title</option>
          <option value="inpublisher"> Publisher</option>
          <option value="subject"> Subject</option>

          <option value="isbn"> ISBN </option>
        </select>
        <input
          type="text"
          placeholder="Search by Title/Author/ISBN"
          className="text"
          id="text"
        ></input>
        <Link to="searchresult">
          <button
            type="submit"
            id="submit"
            onClick={() => {
              navigate("/searchresult");
            }}
          >
            Submit
          </button>
        </Link>
      </div>

      <img src="favorite.png" alt="favorite" id="favorite"></img>
      <p id="test"></p>
      <img src="cart.png" alt="cart" id="cart"></img>
      <img src="profile.png" alt="profile" id="profile"></img>
    </div>
  );
}

export default Header;

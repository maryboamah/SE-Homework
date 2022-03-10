
import { Link, useNavigate } from 'react-router-dom';
function LandingPage(){
    return(
        <div className="second">
            <div className="looking">
              
            
            </div> 
        <div className="landingpage">
        <Link to="/books" >
            <div className="user-buton ">
                <div><img src="booksb.jpg" alt="book" ></img> </div>
                <div>Browse Books</div>


            </div></Link>

            <Link to="/addbook" >
            <div className="guestbutton">
            <div><img src="suggestion.jpg" alt="book" ></img> </div>
                <div>Suggest Books</div>

            </div></Link>
            <Link to="/register" >
            <div className="adminbutton">
            <div><img src="membership.jpg" alt="book" ></img> </div>
                <div>Become A Club Member </div>
                
            </div></Link>
        </div>
        </div>
    );
}
export default LandingPage;
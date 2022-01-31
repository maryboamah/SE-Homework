import { Link } from 'react-router-dom'

function Nav(){
    return(<div className="nav">
<Link to='home'>
<p id="home" className="imglogo"><img src="home.png"alt="home"></img> <span>Home</span></p>
</Link>
<Link to='about'>
    <p id="about" className="imglogo"><img src="about.png"alt="about"></img> <span>About US</span></p>
    </Link>
    <Link to='contact'>
    <p id="contact" className="imglogo"><img src="contact.png"alt="contact"></img> <span>Contact Us</span></p>
    </Link>
    <Link to='trivia'>
    <p id="trivia" className="imglogo"><img src="trivia.png"alt="trivia"></img> <span>Trivia</span></p>
    </Link>
    </div>)
}
export default Nav
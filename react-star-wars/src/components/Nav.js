import {Link} from 'react-router-dom'
function Nav(){
    return (
        <div className="nav">
            <Link to= 'home'>
            <img src="back.png" alt="back button" className="prev"></img>
            <p id="prev">Previous</p>
            </Link>
            <Link to= 'page2'>
            <img src="foward.png" alt="forward button" className="next"></img>
            <p id="next">Next</p>
            </Link>

        </div>
    )
}
export default Nav
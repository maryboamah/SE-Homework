import React, {Component} from "react";

class Header extends Component{

    render(){
        return(<div className="header">
            <p> <a href="#">Home</a> </p>
            <p><a href="#">Grocery List</a></p>
        </div>)
    }
}
export default Header
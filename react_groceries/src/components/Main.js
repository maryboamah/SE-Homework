import React, {Component} from "react";
import GrocceryForm from "./GrocceryForm";

class Main extends Component{
    constructor(){
        super()
        this.state ={
          
        }
      }

      //handle change here
    render(){
        return(<div className="main">
            <h1>Grocery App</h1>
            <GrocceryForm/>
            
        </div>)
    }
}
export default Main
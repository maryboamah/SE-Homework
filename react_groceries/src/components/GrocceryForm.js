import React, { Component } from "react";

class GrocceryForm extends Component {
  constructor() {
    super();
    this.state = {
      // username:[

      // ],
      // showUsername:false

      groceries: [
        {
          username: "",
          itemName: "",
          brand: "",
          units: "",
          quantity: 0,
          isPurchased: false,
        },
      ],
    };
  }

  displayItemsHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });

    // put a line through items on check box
    const inputs = document.querySelectorAll("input[type='checkbox']");
    const crossOut = document.querySelectorAll("tbody");

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked === true) {
        let xout = i;
        console.log(crossOut[xout]);
        crossOut[xout].style.textDecorationLine = "line-through";
      } else if (inputs[i].checked === false) {
        let xout = i;
        crossOut[xout].style.textDecorationLine = "none";
      }
    }

    //delete button to delete
  };

  deletItemHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });

    const crossOut = document.querySelectorAll("tbody");
    let deleteIndex = event.target.id;
    deleteIndex = parseInt(deleteIndex);

    let newGroceries1 = this.state.groceries.slice(0, deleteIndex);
    let newGroceries2 = this.state.groceries.slice(
      deleteIndex + 1,
      crossOut.length
    );
    let newGroceries = newGroceries1.concat(newGroceries2);
    this.setState({
      groceries: newGroceries,
    });
  };

  toogleItemHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });

    let toggleIndex = event.target.id;

    let toggleHtml = document.getElementById(`${toggleIndex}`);

    toggleHtml.classList.toggle("now");
    if (event.target.textContent === "LATER") {
      event.target.textContent = "NOw";
    } else {
      event.target.textContent = "LATER";
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const itemsArray = [];
    // itemsArray.push(this.state)
   

    this.setState({
      ...itemsArray.push(this.state),
      groceries: [...this.state.groceries, ...itemsArray],
    });

    this.groceries = itemsArray;
  };


handleDefault=(event)=>{
  event.preventDefault();
}


//set isPurchased to true or false
handlePurchased=(event)=>{

  this.setState({
    [event.target.id]: event.target.value,
  });

  this.setState(state=>{
    if(state.isPurchased === false){
     
      event.target.src = '/emptycheck.png'
      console.log(this.state.isPurchased)
     return {isPurchased:true}
    
}else{
  
  event.target.src= '/tick.png'

  return {isPurchased:false}
}
  })

}


  render() {
    
    return (
      <div className="addgroccery">
        <h2>Add Your Groccery</h2>
        <form className="form"onSubmit={this.handleSubmit}>
          <label htmlFor="username" id="one">
            Name:
          </label>
          <input
            id="username"
            onChange={this.displayItemsHandler}
            value={this.state.groceries.username}
          />

          <label htmlFor="itemName" id="three">
            Item Name:
          </label>
          <input
            id="itemName"
            onChange={this.displayItemsHandler}
            value={this.state.groceries.itemName}
          />
          <label htmlFor="brand" id="five">
            Brand Name:
          </label>
          <input
            id="brand"
            onChange={this.displayItemsHandler}
            value={this.state.groceries.brand}
          />
          <label htmlFor="units" id="seven">
            Units:
          </label>
          <input
            id="units"
            onChange={this.displayItemsHandler}
            value={this.state.groceries.units}
            type="number"
          />
          <label htmlFor="quantity" id="nine">
            Quantity:
          </label>
          <input
            id="quantity"
            onChange={this.displayItemsHandler}
            value={this.state.groceries.quantity}
            type="number"
          />

          <button type="submit"   id="eleven">
            Add To List
          </button>
        </form>

        <div id="itemList" >
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Item Name</th>
                <th>Brand Name</th>
                <th>Units</th>
                <th>Quantity</th>
                <th>Not Needed</th>
                <th>Purchased</th>
                <th style={{ backgroundColor: "white", border: "none" }}></th>
                <th style={{ backgroundColor: "white", border: "none" }}></th>
              </tr>
            </thead>
            {this.state.groceries.map((Grocery, index) => (
              <tbody key={index} id={index}>
                <tr>
                  <td>{Grocery.username}</td>
                  <td>{Grocery.itemName}</td>
                  <td>{Grocery.brand}</td>
                  <td>{Grocery.units}</td>
                  <td>{Grocery.quantity}</td>
                  <td>
                    <input
                      id={index}
                      onChange={this.displayItemsHandler}
                      type="checkbox"
                    />
                  </td>
                  <td>
                   <img src="/emptycheck.png" alt="emptycheckbox" className="check" id={`check${index}`} onClick={this.handlePurchased}></img>
                  </td>
                  <td>
                    <button
                      className="later"
                      id={`later${index}`}
                      onClick={this.toogleItemHandler}
                    >
                      LATER
                    </button>
                  </td>
                  

                  <td>
                    <button
                      className="delete"
                      id={index}
                      type="button"
                      onClick={this.deletItemHandler}
                    >
                      DELETE
                    </button>
                  </td>
                  

                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default GrocceryForm;

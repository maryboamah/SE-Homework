import React, { Component } from "react";
let allItems = [];
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
    var inputs = document.querySelectorAll("input[type='checkbox']");
    var crossOut = document.querySelectorAll("tbody")
    for(let i=0; i<inputs.length; i++){
if(inputs[i].checked === true){
  let xout = i;  
  console.log(crossOut[xout]);
  crossOut[xout].style.textDecorationLine = "line-through"

  


}else if(inputs[i].checked === false){
 let xout = i
 crossOut[xout].style.textDecorationLine = "none"

}

    }
  };

  handleSubmit = (event) => {
    
    const itemsArray = [];
    // itemsArray.push(this.state)
    console.log(itemsArray);

    this.setState({
      ...itemsArray.push(this.state),
      groceries: [...this.state.groceries, ...itemsArray],
    });
    event.preventDefault();
    this.groceries = itemsArray;
    console.log(itemsArray[1]);
    allItems.push(itemsArray);
    console.log(allItems[1]);
    

    // {receipts.map((ReceiptData, index) => {
    //     return <Receipt ReceipData={ReceiptData} key={index} title={index} />;
    //   })}
  };

  render() {
    return (
      <div className="addgroccery">
        <h2>Add Your Groccery</h2>
        <form className="form" >
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

          <button type="submit" onClick={this.handleSubmit} id="eleven">
            Add To List
          </button>
        </form>
        <div id="itemList">
          <table onChange={this.displayItemsHandler}>
            
            <thead >
              <tr>
                <th>Name</th>
                <th>Item Name</th>
                <th>Brand Name</th>
                <th>Units</th>
                <th>Quantity</th>
                <th style={{ backgroundColor: "white", border: "none" }}></th>
                <th style={{ backgroundColor: "white", border: "none" }}></th>
              </tr>
            </thead>
            {this.state.groceries.map((Grocery, index) => (
              <tbody key={index} id={index}>
                {console.log(Grocery[index])}
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
                    <button>{"DELETE"}</button>
                  </td>
                </tr>

                {/* <DisplayList Grocery={Grocery} key={index}  /> */}
              </tbody>
            ))}
          </table>

          {/* <p>{this.props.grocery}</p> */}
        </div>
      </div>
    );
  }
}

export default GrocceryForm;

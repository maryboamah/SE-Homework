function Receipt(props) {
  return (
    <div>
      <div className="part2" id={`receipt-${props.title}`}>
        <h2>{props.ReceipData.person}</h2>
        <p>
          <span className="head">Main:</span> {props.ReceipData.order.main}
        </p>
        <p>
          <span className="head">Protein:</span>{" "}
          {props.ReceipData.order.protein}
        </p>
        <p>
          <span className="head">Rice:</span> {props.ReceipData.order.rice}
        </p>
        <p>
          <span className="head">Sauce:</span> {props.ReceipData.order.sauce}
        </p>
        <p>
          <span className="head">Drink:</span> {props.ReceipData.order.drink}
        </p>
        <p>
          <span className="head">Cost:</span> {props.ReceipData.order.cost}
        </p>
        <p>
          <span className="head">Toppings:</span>{" "}
          {`${props.ReceipData.order.toppings}`}
        </p>
      </div>
      <div className="part2"></div>
    </div>
  );
}
export default Receipt;

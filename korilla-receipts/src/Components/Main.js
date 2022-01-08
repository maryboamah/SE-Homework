import Receipt from "./Receipt"

import receipts from "../Data"
function Main(){
return (<div >
    <h2>Part 2: Sample Receipts- Displaying All Receipts</h2>
    <div className="part">
    {receipts.map((ReceiptData, index)=>{
        return <Receipt ReceipData ={ReceiptData} key ={index}  title = {index} />
    })}
<h2 id="part4">Part 4 Conditionally Render the receipts if they have been paid or not</h2>
    
    </div>
    <div className="part4">
    {receipts.map((ReceiptData, index)=>{
        if(ReceiptData.paid === false){
            return <Receipt ReceipData ={ReceiptData} key ={index}  title = {index} />
        }
        
    })}
    </div>
</div>)
}
export default Main
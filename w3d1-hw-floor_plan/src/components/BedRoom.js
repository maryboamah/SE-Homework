

function BedRoom(props){
    return(<div className="bedroom" id= { `bed-${props.bednumber}`}>
        <h2>{props.description}</h2>

    </div>)
}
export default BedRoom
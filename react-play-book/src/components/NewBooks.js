

function NewBooks(props){
    return(<div className="books">
        <div className="bookimage">
            
            <img src={`${props.imageUrl}`} alt="book cover"></img>
        </div>
<p>{props.title}</p>
<p>by {props.author}</p>
<p>Publisher:  {props.publisher}</p>
<button className="addfavorite" onClick={props.add}>Add to Favorite</button>
<button className='preview' ><a href={`${props.preview}`}>Google Preview</a> </button>
    </div>)
}
export default NewBooks
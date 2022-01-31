
import DisplayBanner from "./DisplayBanner"
import FreeEbooks from "./FreeEbooks"
import FetchData from "./FetchData"
import NewBooks from "./NewBooks"
import BestSeller from "./BestSeller"
import { useState } from "react/cjs/react.development"
import React, { useEffect } from 'react';
import Footer from "./Footer"
// export const UserContext = React.createContext();

function Home(){
    let[visible, setVisible]=useState(6)
    let[visible1, setVisible1]=useState(6)
    let[visible2, setVisible2]=useState(6)
   //data for free ebooks
    const {data1} = FetchData(`https://www.googleapis.com/books/v1/volumes?q=+inauthor&maxResults=20&orderBy=newest&key=AIzaSyBRrOnOtT1e--wOhPagUSD8JBwkYmyyymc`)
   //data for new books
    const {data2} = FetchData(`https://www.googleapis.com/books/v1/volumes?q=+inauthor&maxResults=20&orderBy=newest&key=AIzaSyBRrOnOtT1e--wOhPagUSD8JBwkYmyyymc`)
    //data for new books
    const {data3} = FetchData(`https://www.googleapis.com/books/v1/volumes?q=+inauthor&maxResults=20&orderBy=newest&key=AIzaSyBRrOnOtT1e--wOhPagUSD8JBwkYmyyymc`)
    
    
    const loadMore = ()=>{
        setVisible(visible1 + 6)
    }
    const loadMore1 = ()=>{
        setVisible1(visible1 + 6)
    }
    const loadMore2 = ()=>{
        setVisible2(visible2 + 6)
    }
    
  
    let count=0
   let addtocount =()=>{
       count = count + 1
       document.getElementById('fav-count').innerHTML = count
   } 
   
    return(<div className="home">
        <p id="fav-count"></p>
        <DisplayBanner/>
        <div className="bestseller">
            <fieldset>
                <legend><h2>Best Seller</h2></legend>
            
            <div className="bestseller-list grid-card1">
            {data1 && (
           data1.items.slice(0, visible).map((book,index)=>(
               
               
              <div key={index}>

                 
                  <BestSeller title ={book.volumeInfo.title} imageUrl={book.volumeInfo.imageLinks.thumbnail} author = {book.volumeInfo.authors} publisher={book.volumeInfo.publisher} add ={addtocount}/>
                  <legend id="loadmore1">{visible < data1.items.length && (
                    <button onClick={loadMore}>Load More</button>
                  )}</legend>
              </div>
               
           )

           )







           )
       }

            </div>
            </fieldset>
        </div>
        <div className="newarrivals">
            <fieldset>
                <legend><h2>New Arrivals</h2></legend>
            
            <div className="newarrivals-list grid-card">
            {data1 && (
           data1.items.slice(0,visible1).map((book,index)=>(
               
               
              <div key={index}>

                
                  <NewBooks title ={book.volumeInfo.title} imageUrl={book.volumeInfo.imageLinks.thumbnail} author = {book.volumeInfo.authors} publisher={book.volumeInfo.publisher} add ={addtocount} preview = {book.volumeInfo.previewLink}/>
                  <legend id="loadmore2">{visible1 < data1.items.length && (
                    <button onClick={loadMore1}>Load More</button>
                  )}</legend>
              </div>
               
           )

           )







           )
       }
            </div>
            </fieldset>
            </div>
            <div className="free-ebooks" >
                <fieldset>
                    <legend><h2>Free Ebooks</h2></legend>
            <div className="free-ebooks-list grid-card" >
            
 {data2 && (
           data2.items.slice(0,visible2).map((book,index)=>(
               
               
               
              <div key={index}>
              

                 
                  <FreeEbooks title ={book.volumeInfo.title} imageUrl={book.volumeInfo.imageLinks.thumbnail} author = {book.volumeInfo.authors} publisher={book.volumeInfo.publisher} add ={addtocount}  />
                  <legend id="loadmore">{visible2 < data2.items.length && (
                    <button onClick={loadMore2}>Load More</button>
                  )}</legend>
            
              </div>
               
           )

           )







           )
           
       }
       
                </div>
                </fieldset>
            </div>

       

    </div>)
  
}
export default Home
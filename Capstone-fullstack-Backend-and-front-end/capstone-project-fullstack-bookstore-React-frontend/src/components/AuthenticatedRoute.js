import BookService from "../Services/BookService"
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom';

const  AuthenticatedRoute =()=> {


    const navigate = useNavigate();

     
   const logger =()=>{
    if (BookService.isUserLoggedIn()) {
        return  navigate("/members")
    } else {
        return navigate("/register" )
    }

   } 
   logger();

    return(
        <div>

        </div>
    )
}

export default AuthenticatedRoute
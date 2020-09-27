import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.png'
//import styled from 'styled-components'


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-dark nav">
            <Link to='/'>
            <img src={logo} alt="store" className="navbar-brand"/>
            </Link>
            <ul className="navbar-nav align-items-center mr-auto ">
            
            <li className="nav-item ml-5">
            <Link  to='/' className="nav-link text-white">
           
            Mentors
            </Link>
            </li>
            <li className="nav-item ml-5">
            <Link to='/create' className='nav-link text-white'>
            
            Add Mentors
            </Link> 
           
            </li>
        
            
         </ul>
         
           
            </nav>
        )
    }
}

export default Navbar

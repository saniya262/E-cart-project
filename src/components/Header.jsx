import React, { useEffect, useState } from 'react'
import {Badge, Container, Nav, Navbar} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Header() {

    const[wishListCount,setWishListCount]=useState(0)
    const[cartCount,setCartCount]=useState(0)
    const wishlist=useSelector(state=>state.wishlistSlice.wishlist)
    const cart =useSelector(state=>state.cartReducer)
  
    useEffect(()=>{
       setWishListCount(wishlist?.length)
       setCartCount(cart?.length)
    },[wishlist,cart])
  return (
    <div>
       <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{zIndex:1}}>
      <Container>
        <Navbar.Brand> <Link to={'/'} style={{color:"white",fontWeight:"bold",textDecoration:"none"}}>
        <i className="fa-solid fa-truck fa-bounce"></i>E-Cart</Link></Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

          <Nav.Link className=' btn btn-outline-light'>
             <Link to={'/Wishlist'} style={{color:"white",fontWeight:"bold",textDecoration:"none"}} >
            <i className="fa-solid fa-heart text-danger"></i>Wishlist
            <Badge bg="success rounded ms-2">{wishListCount}</Badge></Link>
            </Nav.Link>

            <Nav.Link  className=' btn btn-outline-light ms-2'>
              <Link to={'/Cart'} style={{color:"white", fontWeight:"bold",textDecoration:"none"}}>
            <i className="fa-solid fa-cart-shopping text-warning"></i>cart
            <Badge bg="success rounded ms-2">{cartCount}</Badge></Link>
            </Nav.Link>
            
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
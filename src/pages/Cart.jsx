import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/slice/cartslice'
import { Link } from 'react-router-dom'

function Cart() {


  const cart=useSelector(state=>state.cartReducer)
  
  const[total,setTotal]=useState(0)

  const dispatch= useDispatch()

  useEffect(()=>{
    if(cart?.length>0){
      setTotal(cart?.map(product=>product?.totalPrice).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  },[cart])


  return (
    <div className='container' style={{marginTop:"100px"}}> 

    { 
    cart?.length>0?

      <div className="row mt-5">

      <div className="col-lg-8">
        <table className="table shadow">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              cart?.map((product,index)=>(

                <tr key={index}>
                <td>{index+1}</td>
                <td>{product.title}</td>
                <td><img style={{width:"100px",height:"100px"}} src={product.thumbnail}/></td>
                <td><input type="text" value={product.quantity} readOnly  style={{width:"25px",border:"0px"}} /></td>
                <td className='text-danger'>${product.totalPrice}</td>
                <td><button className='btn' onClick={()=>dispatch(removeFromCart(product.id))}><i className="fa-solid fa-trash text-danger"></i></button></td>
              </tr>

              ))
            }
           
          </tbody>
        </table>

        <div className="float-end ">
          <button className='btn btn-outline-warning me-3' onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
          <Link to={'/'} style={{textDecoration:"none"}}>
          <button className='btn btn-outline-primary'>Shop More</button></Link>
        </div>



      </div>
      <div className="col-lg-1"></div>
      <div className="col-lg-3">
        <div className="container border rounded shadow mt-5 p-5 w-100">
          <h1>Cart Summary</h1>
          <h4>Total Products:{cart?.length}</h4>
          <h5>Total: <span className='text-danger fw-bolder'>${total}</span></h5>
        </div>
        <div className="d-grid">
          <button className='btn btn-success m-3 rounded'>Checkout</button>
        </div>
      </div>
     </div>:
      <div className='container mt-5 d-flex align-item-center'>
                
      <img src="https://bakestudio.in/assets/images/cart/empty-cart.gif" style={{width:"40rem"}} alt="" />
      <h1 className='text-danger mt-5'>Your Cart Is Empty...</h1>

    </div>
    
     }
    </div>
  )
}

export default Cart
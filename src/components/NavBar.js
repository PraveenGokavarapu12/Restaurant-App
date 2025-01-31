import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const orderslen=useSelector(state=>state.order.orders.length)
  const navigate=useNavigate();
  
  return (
    <div>
      <nav className='navbar navbar-light bg-light'>
        <a className='navbar-brand m-2'>Restaurant</a>
        <button className='btn btn-primary m-2' onClick={()=>navigate('/orders')}>Orders <span className='badge bg-secondary'>{orderslen}</span></button>
      </nav>
    </div>
  )
}

export default NavBar

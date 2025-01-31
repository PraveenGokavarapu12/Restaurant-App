import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeOrder } from '../redux/OrderSlice';


const OrdersPage = () => {
  const ordersData = useSelector(state => state.order.orders)
  const dispatch=useDispatch();
  let totalCost = 0;
  ordersData.forEach(element => {
    totalCost += element.price
  })
  const cancelOrder=(id)=>{
    dispatch(removeOrder(id));
  }
  return (
    <div>
      <center>

        {ordersData.length > 0 ?
          <div className='container'>
            <div className='row'>
              {ordersData.map((item) => (
                <div key={item.id} className='col-md-4'>
                  <div className='card p-1 mb-2' style={{ width: "20rem" }}>
                    <div className='card-body'>
                      <img src={item.url} alt='loading' className='card-img-top m-1' style={{ width: "250px", height: "220px", objectFit: "cover" }} />
                      <h5 className='card-title'>{item.name}</h5>
                      <p>Rs :{item.price}</p>
                      <p>Table No: {item.tableNum}</p>
                      <button className='btn btn-danger' onClick={()=>cancelOrder(item.id)}>Cancel</button>


                    </div>
                  </div>

                </div>
              ))}
              <div className='d-flex flex-column align-items-start'>
                <p>Total Cost : {totalCost} Rs/-</p>
                <p>Discount : 10%</p>
                <h5>Total amount after discount: <span style={{ color: 'green' }}>{totalCost * 0.9}  Rs/-</span></h5>
              </div>

            </div>
          </div> :
          <div>
            <p>No Orders Placed Yet!</p>
          </div>}
      </center>

    </div>
  )
}

export default OrdersPage

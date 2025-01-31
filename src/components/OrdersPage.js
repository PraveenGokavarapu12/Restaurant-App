import React from 'react'
import { useSelector } from 'react-redux'


const OrdersPage = () => {
  const ordersData = useSelector(state => state.order.orders)
  console.log(ordersData)

  let totalCost = 0;
  ordersData.forEach(element => {
    totalCost += element.price
  });
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

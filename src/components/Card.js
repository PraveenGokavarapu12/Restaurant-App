import React, { useState } from 'react';
import menuItems from '../data';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../redux/OrderSlice';

const Card = ({ tableNum,sortOrder }) => {
    const filteredCat = useSelector((state) => state.filter.value);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const dispatch = useDispatch();
    let filteredData;

    if (filteredCat === "All Items") {
        filteredData = menuItems;
    } else {
        filteredData = menuItems.filter((item) => item.category === filteredCat);
    }

    if (sortOrder === "asc") {
        filteredData.sort((a, b) => a.price - b.price);
      } else if (sortOrder === "desc") {
        filteredData.sort((a, b) => b.price - a.price);
      }
  

    const onClickOrder = (item) => {
        if (tableNum === null) {
            alert("Please Select a Table First");
        } else {
            const orderDetails = {
                ...item,
                tableNum: tableNum,
            };
            dispatch(placeOrder(orderDetails));

            setOrderPlaced(true);


            // Hide the notification after 3 seconds
            setTimeout(() => {
                setOrderPlaced(false);
            }, 3000);
        }
    };

    return (
        <div>
            <center>
                {orderPlaced && (
                    <div
                        className="modal fade show"
                        style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="orderPlacedModal"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content rounded-4 shadow-lg p-4" style={{ backgroundColor: '#f8d7da' }}>
                                <div className="modal-body text-center">
                                    <div className="py-3">
                                        <i className="bi bi-check-circle-fill" style={{ fontSize: '3rem', color: '#28a745' }}></i>
                                    </div>
                                    <h4 className="modal-title text-success">Yay! Order Placed!</h4>
                                    <p className="mt-3" style={{ fontSize: '1.2rem' }}>
                                        Your order has been successfully placed. We’ll bring it to your table soon! 🎉
                                    </p>
                                    <div className="mt-4">
                                        <button
                                            className="btn btn-outline-success py-2 px-4 rounded-3"
                                            style={{ fontSize: '1rem' }}
                                            onClick={() => setOrderPlaced(false)}
                                        >
                                            Okay, Got it!
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {filteredData.length > 0 ? (
                    <div className="container">
                        <div className="row">
                            {filteredData.map((item) => (
                                <div key={item.id} className="col-md-4">
                                    <div className="card p-1 mb-2" style={{ width: '20rem' }}>
                                        <div className="card-body">
                                            <img
                                                src={item.url}
                                                alt="loading"
                                                className="card-img-top m-1"
                                                style={{ width: '250px', height: '220px', objectFit: 'cover' }}
                                            />
                                            <h5 className="card-title">{item.name}</h5>
                                            <p style={{color:'green', fontWeight:'bold'}}>{item.price} Rs/- <span style={{textDecoration:'line-through' ,fontSize:'12px',fontWeight:'normal'}}>{item.price*1.2} Rs/-</span></p>
                                            <button className="btn btn-primary" onClick={() => onClickOrder(item)}>
                                                Order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="spinner-border text-primary"></div>
                )}
            </center>
        </div>
    );
};

export default Card;

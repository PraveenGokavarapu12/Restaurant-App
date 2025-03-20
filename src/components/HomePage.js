import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Tables from './Tables';
import Filter from './Filter';
import Card from './Card';

const HomePage = () => {
  const [tableNum, setTableNum] = useState(null);
  const [sortOrder, setSortOrder] = useState(""); 


  const handleSort = (order) => {
    setSortOrder(order);
  };



  

  return (
    <div>
      <center>
        <Tables
          onSelect={setTableNum}
          // Pass tableNum state to Tables component
        />
        <Filter />
        <div className="mb-3 w-25">
          <label htmlFor="sort">
            Sort By:
          </label>
          <select
            value={sortOrder}
            onChange={(e) => handleSort(e.target.value)}
            className='m-1'
          >
            <option value="">Sort by Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      
        <Card 
          tableNum={tableNum} 
          sortOrder={sortOrder}
           // Pass callback to handle when order is placed
        />
      </center>
    </div>
  );
};

export default HomePage;


import React, { useState } from 'react';
import Tables from './Tables';
import Filter from './Filter';
import Card from './Card';

const HomePage = () => {
  const [tableNum, setTableNum] = useState(null);

  

  return (
    <div>
      <center>
        <Tables
          onSelect={setTableNum}
          // Pass tableNum state to Tables component
        />
        <Filter />
        <Card 
          tableNum={tableNum} 
           // Pass callback to handle when order is placed
        />
      </center>
    </div>
  );
};

export default HomePage;


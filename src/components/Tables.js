import React, { useState } from 'react'

const Tables = ({onSelect}) => {
    const list=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
    const [active,setActive]=useState(null);
    const inactiveBtn='btn btn-outline-primary m-2'
    const activeBtn='btn btn-outline-primary m-2 active'
   
    const onSelectTable=(num)=>{
      setActive(num);
      onSelect(num);
    }
  return (
    <div>
      <center>
        <p>Choose a Table</p>
        {list.map((num,index)=>(
            <div key={index} style={{display:'inline'}}>
                <button className={num===active?activeBtn:inactiveBtn} onClick={()=>onSelectTable(num)}>{num}</button>
            </div>
        ))}
      </center>
    </div>
  )
}

export default Tables

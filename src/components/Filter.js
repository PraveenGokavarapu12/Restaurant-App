import React from 'react'
import { useDispatch } from 'react-redux'
import { change } from '../redux/FilterSlice'

const Filter = () => {
    const categories=["All Items","Rice Items","Pizzas","Hot Drinks","Cold Drinks"]
    
    const dispatch=useDispatch();
    const onSubmitHandler=(filter)=>{
        dispatch(change(filter))
    }
  return (
    <div className='m-2'>
        <center >
            <span className=' m-1'>Filter: </span>
            <select onChange={(e)=>onSubmitHandler(e.target.value)} className='m-1'>
                {categories.map((item,index)=>(
                    <option value={item} key={index}>{item}</option>
                ))}
            </select>
           
        </center>
    </div>
  )
}

export default Filter

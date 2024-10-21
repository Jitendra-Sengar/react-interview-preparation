import React from 'react'
import { useState } from 'react'

const Pagination = () => {
    const items=['item1','item2','item3','item4','item5','item6','item7','item8','item9','item10']
    const [currentPage,setCurrentPage]=useState(2)
    const itemsPerPage=2
    const lastIndexOfPage=currentPage*itemsPerPage;
    const firstIndexOfPage=lastIndexOfPage-itemsPerPage;
    const currentItems=items.slice(firstIndexOfPage,lastIndexOfPage)
    const pageNumbers=[];
    
    for(let i=1; i<=Math.ceil(items.length/itemsPerPage);i++){
      pageNumbers.push(i)
    }

  return (
    <div>
        <h1>Pagination</h1>
        <ul>
          {currentItems.map((item,i)=>(
            <li key={i}>{item}</li>
          ))}
        </ul>
          //Page pageNumbers
          {
            pageNumbers.map((num)=>(
              <li key={num} onClick={()=>setCurrentPage(num)}>{num}</li>
            ))
          }

    </div>
  )
}

export default Pagination

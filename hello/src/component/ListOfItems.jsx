import React from 'react'

const ListOfItems = () => {

    const arr=["item1","item2","item3","item4"]
  return (
    <div>
        <h1>Show List Items</h1>
      <ul>
        {arr.map((item,i)=>(
            <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListOfItems

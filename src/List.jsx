import React from 'react'

const List = ({item}) => {
  return(
    <li key={item}>{item}</li>
  )
}

export default List

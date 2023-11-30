import React from 'react'
import Item from './Item'
import PropTypes from 'prop-types';

export default function ItemsList({ itemsList, onDeleteItems, onTogglePacked, onHandleClear}) {
  const [sortOption, setSortOption] = React.useState('input')
  let sortedItems;
  
      
    switch (sortOption) {
      case "input":
        sortedItems = itemsList;
        break;
      case "desc":
        sortedItems = itemsList.slice().sort((a, b) => a.desc.localeCompare(b.desc));
        //sortedItems = [...itemsList].sort((a, b) => a.desc > b.desc ? 1 : -1);
        break;
      case "qty":
        sortedItems = [...itemsList].sort((a, b) => a.qty - b.qty);
        break;
      case "packed":
        sortedItems = itemsList.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
        break;

      
        
    }
  
  function handleSort(e) {
    setSortOption(e.target.value)
    console.log(e.target.value); 

  }
  
  return (
    <div>  
      {
        sortedItems.map((item) => (
          <Item key={item.id} item={item} onDeleteItems={onDeleteItems} onTogglePacked={onTogglePacked} />
          ))
        }
      <div className='text-center my-6'>
        <button className='bg-gray-500 text-white text-sm/loose p-2 mr-4' onClick={onHandleClear}>CLEAR LIST</button>
        <select value={sortOption} className='bg-gray-500 text-white text-sm/loose p-3.5' onChange={handleSort}>
          <option value="input">SORT BY INPUT</option>
          <option value="desc">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
          <option value="qty">SORT BY QUANTITY</option>
        </select>
      
      </div>
    </div>
  )
}
ItemsList.propTypes = {
  itemsList: PropTypes.array.isRequired,
  onDeleteItems: PropTypes.func.isRequired,
  onTogglePacked: PropTypes.func.isRequired,
  onHandleClear: PropTypes.func.isRequired,
}
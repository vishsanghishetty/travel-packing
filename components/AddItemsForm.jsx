import React from 'react'
import PropTypes from 'prop-types';

export default function AddItemsForm({onAddItems}) {
  //define state, use the state, then set the state
  const [itemDesc, setItemDesc] = React.useState("")
  const [itemQuantity, setItemQuantity] = React.useState(1)

  
  function handleDescChange(e) { //input
    setItemDesc(e.target.value);
    // console.log(e.target.value);
  }

  function handleSubmit(e) { //Form and Add
    e.preventDefault();

    // "" empty string is a falsy value, !falsy is true so if the condition is true return (GUARD clause)
    if (!itemDesc) return;

     const newItem = {
      desc: itemDesc.trim(),
      qty: itemQuantity,
      packed: false,
      id: Date.now()
    }
    
    //console.log(newItem);
    onAddItems(newItem);
    
    setItemDesc('');
    setItemQuantity(1);
  }

  function handleSelect(e) { //Dropdown
    setItemQuantity(Number(e.target.value));
   // console.log(e.target.value);
  }


    return (
      <form onSubmit={handleSubmit} className='bg-pink-800 text-2xl/loose font-mono font-small text-center text-white py-2'>
        What do you need for your trip? 🚙 🚗
        <select value={itemQuantity} onChange={handleSelect} className='bg-white  text-gray-600 ml-4 rounded-2xl py-2 px-2'>
          {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
            <option value={num} key={num}>{num}</option>
          ))
          }
        </select>
        <input type="text" placeholder='Enter item ...' className='rounded-2xl ml-4 py-0 text-gray-600' value={itemDesc} onChange={handleDescChange} />
        <button className='bg-white  text-gray-600 ml-4 rounded-2xl py-0 px-5'>Add</button>
        </form>

  )
}

AddItemsForm.propTypes = {
  onAddItems: PropTypes.func.isRequired,
}
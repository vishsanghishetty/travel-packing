import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareMinus} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

export default function Item({ item, onDeleteItems, onTogglePacked }) {
  const isPacked = item.packed;
  return (
    <div className='flex justify-items-center ml-6'>
      <input type="checkbox" checked={item.packed} className='text-green-700 cursor-pointer' onChange={()=>onTogglePacked(item.id)} />
    <div key={item.id} className='text-yellow-800 my-0 ml-2 text-l/loose font-mono font-medium text-center '>
        
        {
          isPacked ?
            <s> {item.qty} {item.desc}</s>
            :
            `${item.qty} ${item.desc}`
        }
      
        <FontAwesomeIcon className='text-red-600 cursor-pointer flex-auto ml-2' icon={faSquareMinus} size="lg" onClick={() => onDeleteItems(item.id)}/>
      
        </div>

      </div>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  onDeleteItems: PropTypes.func.isRequired,
  onTogglePacked: PropTypes.func.isRequired,
}
  


import React from 'react'
import PropTypes from 'prop-types';

export default function Footer({ itemsList }) {
  if (!itemsList.length)
    return (<p className="dark:bg-neutral-700 text-lg mt-80 py-8 text-center text-white px-96">Start adding items to the packing list! 🚀</p>)
  const itemListCount = itemsList.length
  const itemsPackedCount = itemsList.filter((item) => item.packed === true).length
  const itemsPackagedPercentage = (itemsPackedCount / itemListCount) * 100
  
  //console.log(itemsPackagedPercentage)
  return (
    <footer
  className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left mt-80">
  <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        <em>
          
              
          {
            itemsPackagedPercentage === 100 ? <p>You have got everything! Ready to go ✈️</p> :  `You have ${itemListCount} items on your list, and you already packed ${itemsPackedCount} items `
          }
          ({Math.round(itemsPackagedPercentage)} %)
        </em>
  </div>
</footer>
    
  )
}

Footer.propTypes = {
  itemsList: PropTypes.array.isRequired,
}
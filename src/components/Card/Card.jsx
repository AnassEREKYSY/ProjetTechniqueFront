import React from 'react'

function Card({children}) {
  return (
    <div className='bg-white dark:border border border-gray-200 rounded-lg dark:border-stone-700 dark:bg-stone-800 p-4 w-full'>
      {children}
    </div>
  )
}

export default Card
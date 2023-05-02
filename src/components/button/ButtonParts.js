import React from 'react'

export default function ButtonParts({title} ) {
  return (
<button className='text-white border-2 border-purple-900 bg-purple-900 hover:bg-white hover:text-purple-900 text-xl uppercase px-12 py-2 rounded-lg shadow-xl m-6'>
{title}
</button>
  )
}

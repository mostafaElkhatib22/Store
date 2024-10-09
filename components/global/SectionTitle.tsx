import React from 'react'
import { Separator } from '@/components/ui/separator'
function SectionTitle({text}:{text:string}) {
  return (
    <div>
      <h2 className='text-3xl font-medium text-gray-600 tracking-wider capitalize mb-8'>
        {text}
      </h2>
      <Separator/>
    </div>
  )
}

export default SectionTitle
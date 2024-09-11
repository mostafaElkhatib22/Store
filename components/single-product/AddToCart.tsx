import React from 'react'
import { Button } from '@/components/ui/button'
function AddToCart({productId}:{productId:string}) {
  return (
    <Button className='capitalize mt-8' size={'lg'}>Add To Cart</Button>
  )
}

export default AddToCart
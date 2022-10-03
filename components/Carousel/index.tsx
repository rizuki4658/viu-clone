import React from 'react'

const Carousel: React.FC<{}> = ({...props}) => {
  return (
    <div className="bg-red-500 container-carousel">
      <div className="relative h-full w-full">
        <button className="bg-pink-500 absolute left-0 top-0 bottom-0 w-24">PREV</button>
        <a href="#" className="bg-blue-500 w-full h-full block">AAAA</a>
        <button className="bg-pink-500 absolute right-0 top-0 bottom-0 w-24">NEXT</button>
      </div>
    </div>
  )
}

export default Carousel

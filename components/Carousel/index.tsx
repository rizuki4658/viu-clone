import React from 'react'

const autoplay = setInterval(() => {

}, 4000)

class Carousel extends React.Component {
  render() {
    return (
      <div className="container-carousel">
        <div className="relative h-full w-full">
          <button className="absolute left-0 top-0 bottom-0 w-24" />
          <div className="w-full h-full block">
            <a href="#" className="bg-blue-500 w-full h-full block">AAAA</a>
          </div>
          <button className="absolute right-0 top-0 bottom-0 w-24" />
        </div>
      </div>
    )
  }
}

export default Carousel

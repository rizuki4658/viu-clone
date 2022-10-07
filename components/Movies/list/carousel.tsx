import React from 'react'

type Item = {
  name: string
  img: string
}

type StateType = {
  items?: [],
  counter: 0
}

type PropsType = {
  items: Item[]
}


class CarouselLists extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props)
    this.state = {
      items: [],
      counter: 0
    }

    this.nextClick = this.nextClick.bind(this)
    this.prevClick = this.prevClick.bind(this)
  }

  stateSetter(key: string, value: any) {
    this.setState((oldState) => ({
      ...oldState,
      ...{
        [key]: value
      }
    }))
  }

  nextClick() {
    const child: any = document.querySelector('#carouselMovieList')
    const parent: any = document.querySelector('#carouselMovieParent')
    if (parent.scrollLeft >= parent.scrollWidth) return
    const perScroll: any = Math.round(child.scrollWidth / 14)
    parent.scrollLeft += perScroll
    this.stateSetter('counter', this.state.counter + perScroll)
  }

  prevClick() {
    const child: any = document.querySelector('#carouselMovieList')
    const parent: any = document.querySelector('#carouselMovieParent')
    if (parent.scrollLeft <= 0) return
    const perScroll: any = Math.round(child.scrollWidth / 14)
    parent.scrollLeft -= perScroll
    this.stateSetter('counter', this.state.counter - perScroll)
  }


  render() {
    return (
      <div className="max-w-7xl relative mb-10 text-center">
        <div
          id="carouselMovieParent"
          className="carousel-movie-list max-w-7xl scroll-smooth overflow-hidden">
          <button
            className="absolute z-10 lg:-left-12 -left-6 top-0 bottom-0 lg:w-24 w-8 carousel-prev"
            onClick={this.prevClick}
          />
          <div
            id="carouselMovieList"
            className="md:h-64 h-32 space-x-4 whitespace-nowrap inline-block">
            <div className="bg-blue-500 rounded-lg inline-block h-full md:w-44 w-20">1</div>
            <div className="bg-blue-500 rounded-lg inline-block h-full md:w-44 w-20">2</div>
            <div className="bg-blue-500 rounded-lg inline-block h-full md:w-44 w-20">3</div>
            <div className="bg-blue-500 rounded-lg inline-block h-full md:w-44 w-20">4</div>
            <div className="bg-blue-500 rounded-lg inline-block h-full md:w-44 w-20">5</div>
            <div className="bg-blue-500 rounded-lg inline-block h-full md:w-44 w-20">6</div>
            <div className="bg-blue-500 rounded-lg inline-block h-full md:w-44 w-20">7</div>
            <div className="bg-blue-500 rounded-lg inline-block h-full md:w-44 w-20">8</div>
            <div className="bg-blue-500 rounded-lg inline-block h-full md:w-44 w-20">9</div>
            <div className="bg-blue-500 rounded-lg inline-block h-full md:w-44 w-20">10</div>
            <div className="bg-blue-500 rounded-lg inline-block h-full md:w-44 w-20">11</div>
            <div className="bg-blue-500 rounded-lg inline-block h-full md:w-44 w-20">12</div>
            <div className="bg-blue-500 rounded-lg inline-block h-full md:w-44 w-20">13</div>
            <div className="bg-blue-500 rounded-lg inline-block h-full md:w-44 w-20">14</div>
          </div>
          <button
            className="absolute z-10 lg:-right-12 -right-6 top-0 bottom-0 lg:w-24 w-8 carousel-next"
            onClick={this.nextClick}
          />
        </div>
      </div>
    )
  }
}

export default CarouselLists

import React from 'react'

type Item = {
  name: string
  img: string
}

type StateType = {
  width: number
  widthParent: number
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
      width: 0,
      widthParent: 0,
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
    const child2: any = document.querySelector('#test')
    // console.log(child2.offsetWidth)
    // console.log(child.offsetWidth)
    const perScroll: any = Math.round(child.scrollWidth / 14)
    child2.scrollLeft = perScroll
    this.stateSetter('counter', this.state.counter + perScroll)
    if (this.state.counter < child2.offsetWidth) {
      this.stateSetter('counter', this.state.counter + perScroll)
      child2.scrollLeft += perScroll
    }
  }

  prevClick() {
    const child: any = document.querySelector('#carouselMovieList')
    const perScroll: any = Math.round(child?.scrollWidth / 14)
    if (this.state.counter > 0 && child.scrollLeft <= child.scrollWidth) {
      this.stateSetter('counter', this.state.counter - perScroll)
      child.scrollLeft -= perScroll
    }
  }

  componentDidMount(): void {
    const parent = document.querySelectorAll('#carouselMovieWrapper')
    console.log(parent)
  }


  render() {
    return (
      <div id="test" className="relative z-0 text-center max-w-7xl scroll-smooth overflow-hidden">
        {this.state.counter}
      <button className="absolute z-10 lg:0 -left-6 bg-red-500 top-0 bottom-0 lg:w-24 w-8 carousel-prev" onClick={this.prevClick} />
      <div id="carouselMovieList" className="relative bg-red mb-10 md:h-64 h-32 space-x-3 whitespace-nowrap inline-block">
        <div className="bg-blue-500 inline-block h-full md:w-44 w-20">1</div>
        <div className="bg-blue-500 inline-block h-full md:w-44 w-20">2</div>
        <div className="bg-blue-500 inline-block h-full md:w-44 w-20">3</div>
        <div className="bg-blue-500 inline-block h-full md:w-44 w-20">4</div>
        <div className="bg-blue-500 inline-block h-full md:w-44 w-20">5</div>
        <div className="bg-blue-500 inline-block h-full md:w-44 w-20">6</div>
        <div className="bg-blue-500 inline-block h-full md:w-44 w-20">7</div>
        <div className="bg-blue-500 inline-block h-full md:w-44 w-20">8</div>
        <div className="bg-blue-500 inline-block h-full md:w-44 w-20">9</div>
        <div className="bg-blue-500 inline-block h-full md:w-44 w-20">10</div>
        <div className="bg-blue-500 inline-block h-full md:w-44 w-20">11</div>
        <div className="bg-blue-500 inline-block h-full md:w-44 w-20">12</div>
        <div className="bg-blue-500 inline-block h-full md:w-44 w-20">13</div>
        <div className="bg-blue-500 inline-block h-full md:w-44 w-20">14</div>
      </div>
      <button className="absolute z-10 lg:0 -right-6 bg-red-500 top-0 bottom-0 lg:w-24 w-8 carousel-next" onClick={this.nextClick} />
      </div>
    )
    // return (
    //   <div id="carouselMovieWrapper" className="carousel-movie-wrapper w-full overflow-hidden relative">
    //     { this.state.width }
    //     {/* <button className="absolute lg:-left-12 -left-6 bg-blue-500 top-0 bottom-0 lg:w-24 w-8 carousel-prev" /> */}
    //     <div
    //       id="carouselMovieList"
    //       className="carousel-movie-list mb-10 md:h-64 h-32 space-x-3 whitespace-nowrap overflow-x-auto">
    //       <div className="bg-blue-500 inline-block h-full md:w-44 w-20" onClick={this.testeClick}>1</div>
    //       <div className="bg-blue-500 inline-block h-full md:w-44 w-20">2</div>
    //       <div className="bg-blue-500 inline-block h-full md:w-44 w-20">3</div>
    //       <div className="bg-blue-500 inline-block h-full md:w-44 w-20">4</div>
    //       <div className="bg-blue-500 inline-block h-full md:w-44 w-20">5</div>
    //       <div className="bg-blue-500 inline-block h-full md:w-44 w-20">6</div>
    //       <div className="bg-blue-500 inline-block h-full md:w-44 w-20">7</div>
    //     </div>
    //     {/* <button className="absolute lg:-right-12 -right-6 bg-blue-500 top-0 bottom-0 lg:w-24 w-8 carousel-next" /> */}
    //   </div>
    // )
  }
}

export default CarouselLists

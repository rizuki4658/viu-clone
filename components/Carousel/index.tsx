import React from 'react'
import { sliders as Sliders } from '../../constants/carousel' 

type State = {
  current: number | undefined
  slides: any[]
  time: number
  interval: any
}

type Props = {
  current?: number
  slides?: any[]
  time?: number
}

class Carousel extends React.Component<Props, State> {  
  constructor(props: Props) {
    super(props)
    this.state = {
      current: undefined,
      slides: Sliders,
      time: Sliders.length,
      interval: null
    }

    this.goToSlide = this.goToSlide.bind(this)
    this.prevSlide = this.prevSlide.bind(this)
    this.nextSlide = this.nextSlide.bind(this)
    this.stopPlay = this.stopPlay.bind(this)
    this.autoplay = this.autoplay.bind(this)
  }
  slideTime: any;

  stateSetter(key: string, value: any) {
    const oldState = this.state
    this.setState({
      ...oldState,
      [key]: value
    })
  }

  goToSlide() {
    let index = this.state.current
    if (index === undefined) {
      this.stateSetter('current', 0)
    } else {
      index += 1
      if (index > this.state.slides.length - 1) index = 0
      this.stateSetter('current', index)
      clearTimeout(this.slideTime)
    }
    this.slideTime = setTimeout(this.goToSlide, 3000)
  }

  prevSlide() {
    this.stopPlay()
    if (this.state.current === 0) {
      this.stateSetter('current', this.state.slides.length - 1)
    } else if (this.state.current !== undefined) {
      this.stateSetter('current', this.state.current - 1)
    }
  }

  nextSlide() {
    this.stopPlay()
    if (this.state.current === this.state.slides.length - 1) {
      this.stateSetter('current', 0)
    } else if (this.state.current !== undefined) {
      this.stateSetter('current', this.state.current + 1)
    }
  }

  stopPlay() {
    if (this.slideTime) clearTimeout(this.slideTime)
  }

  autoplay() {
    this.goToSlide()
  }

  componentDidMount() {
    this.autoplay()
  }

  render() {
    return (
      <div className="container-carousel">
        <div
          className="relative h-full w-full"
          onMouseLeave={this.autoplay}>
          <button
            className="absolute left-0 top-0 bottom-0 w-24"
            onClick={this.prevSlide}
          />
          <div className="w-full h-full block">
            <a href="#" className="w-full h-full block">
              <div
                style={{
                  backgroundImage: `url(/img/${typeof this.state.current === 'undefined' ? '' : this.state.slides[this.state.current].img})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
                }}
                className="h-full w-full"
              />
            </a>
          </div>
          <button
            className="absolute right-0 top-0 bottom-0 w-24"
            onClick={this.nextSlide}
          />
        </div>
      </div>
    )
  }
}

export default Carousel

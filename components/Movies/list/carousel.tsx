import React,{ createRef } from 'react'
import {
  MoviePropsType,
  MovieStateType
} from '../../../types'

import CardMovie from './card'
import ButtonControl from './button'
import HeaderList from './header'

class CarouselLists extends React.Component<MoviePropsType, MovieStateType> {
  constructor(props: MoviePropsType) {
    super(props)
    this.state = {
      items: [],
      showButton: true,
      refChild: createRef(),
      refParent: createRef(),
      showLink: false,
      refCard: createRef()
    }

    this.nextClick = this.nextClick.bind(this)
    this.prevClick = this.prevClick.bind(this)
    this.showingButtonControl = this.showingButtonControl.bind(this)
    this.showingDetail = this.showingDetail.bind(this)
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
    const child = this.state.refChild.current
    if (child.scrollLeft >= child.scrollWidth) return
    const perScroll: any = Math.round(child.scrollWidth / 14) // 14 change by items length
    child.scrollLeft += (perScroll * 4)
  }

  prevClick() {
    const child = this.state.refChild.current
    if (child.scrollLeft <= 0) return
    const perScroll: any = Math.round(child.scrollWidth / 14) // 14 change by items length
    child.scrollLeft -= (perScroll * 4)
  }

  showingButtonControl() {
    const parent = this.state.refParent.current
    const child = this.state.refChild.current
    this.stateSetter('showButton', child.scrollWidth > parent.offsetWidth)
  }

  showingDetail() {
    console.log(this.state.refCard)
  }

  componentDidMount(): void {
    this.showingButtonControl()
  }

  render() {
    return (
      <>
        <HeaderList
          {...this.props.title}
          showLink={this.state.showLink}
        />
        <div className="w-full relative bg-pink-500" style={{ minHeight: '150px' }}>
          <div
            ref={this.state.refParent}
            className="relative block">
            <ButtonControl
              show={this.state.showButton}
              type="prev"
              callback={this.prevClick}
            />
            <div
              ref={this.state.refChild}
              className="carousel-movie-list md:h-60 h-32 block whitespace-nowrap space-x-4 overflow-hidden">
              <div 
                ref={this.state.refCard}
                className="inline-block h-full md:w-40 w-20"
                onMouseEnter={this.showingDetail}>
                <CardMovie
                  {...{
                    img: '',
                    name: '1',
                    desc: ''
                  }}
                />
              </div>
            </div>
            <ButtonControl
              show={this.state.showButton}
              type="next"
              callback={this.nextClick}
            />
          </div>
        </div>
      </>
    )
  }
}

export default CarouselLists

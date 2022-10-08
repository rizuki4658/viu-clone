import React,{ createRef } from 'react'
import {
  MoviePropsType,
  MovieStateType
} from '../../../types'

import Card from './card'
import ButtonControl from './button'
import HeaderList from './header'

class CarouselLists extends React.Component<MoviePropsType, MovieStateType> {
  constructor(props: MoviePropsType) {
    super(props)
    this.state = {
      items: [],
      counter: 0,
      showButton: true,
      refChild: createRef(),
      refParent: createRef(),
      showLink: false
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
    const parent = this.state.refParent.current
    const child = this.state.refChild.current
    if (parent.scrollLeft >= parent.scrollWidth) return
    const perScroll: any = Math.round(child.scrollWidth / 14) // 14 change by items length
    parent.scrollLeft += perScroll
    this.stateSetter('counter', this.state.counter + perScroll)
  }

  prevClick() {
    const parent = this.state.refParent.current
    const child = this.state.refChild.current
    if (parent.scrollLeft <= 0) return
    const perScroll: any = Math.round(child.scrollWidth / 14) // 14 change by items length
    parent.scrollLeft -= perScroll
    this.stateSetter('counter', this.state.counter - perScroll)
  }

  componentDidMount(): void {
    const parent = this.state.refParent.current
    const child = this.state.refChild.current
    this.stateSetter('showButton', child.offsetWidth > parent.offsetWidth)
    this.stateSetter('showButton', child.offsetWidth > parent.offsetWidth)
  }

  render() {
    return (
      <>
        <HeaderList
          {...this.props.title}
          showLink={this.state.showLink}
        />
        <div className="max-w-7xl relative mb-10">
          <div
            ref={this.state.refParent}
            className="carousel-movie-list max-w-7xl scroll-smooth overflow-hidden">
            <ButtonControl
              show={this.state.showButton}
              type="prev"
              callback={this.prevClick}
            />
            <div
              ref={this.state.refChild}
              className="md:h-64 h-32 space-x-4 whitespace-nowrap inline-block">
              <Card {...{
                img: '',
                name: '1',
                desc: ''
              }} />
              <Card {...{
                img: '',
                name: '1',
                desc: ''
              }} />
              {/* <Card {...{
                img: '',
                name: '1',
                desc: ''
              }} />
              <Card {...{
                img: '',
                name: '1',
                desc: ''
              }} />
              <Card {...{
                img: '',
                name: '1',
                desc: ''
              }} />
              <Card {...{
                img: '',
                name: '1',
                desc: ''
              }} />
              <Card {...{
                img: '',
                name: '1',
                desc: ''
              }} />
              <Card {...{
                img: '',
                name: '1',
                desc: ''
              }} />
              <Card {...{
                img: '',
                name: '1',
                desc: ''
              }} />
              <Card {...{
                img: '',
                name: '1',
                desc: ''
              }} />
              <Card {...{
                img: '',
                name: '1',
                desc: ''
              }} /> */}
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

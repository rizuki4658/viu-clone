import React,{ createRef } from 'react'
import {
  MoviePropsType,
  MovieStateType
} from '../../../types'

import Card from './card'

const ButtonControl: React.FC<{
  show: boolean
  type: "next" | "prev"
  callback: () => void
}> = ({...props}) => {
  let buttonClass = [
    'absolute',
    'z-10',
    'top-0 bottom-0',
    'lg:w-24 w-8'
  ]
  if (props.show) {
    if (props.type === 'next') {
      buttonClass = [...buttonClass, 'lg:-right-12', '-right-6', 'carousel-next']
    } else buttonClass = [...buttonClass, 'lg:-left-12', '-left-6', 'carousel-prev']

    return (
      <button
        className={ buttonClass.join(' ') }
        onClick={props.callback}
      />
    )
  } return <></>
}

class CarouselLists extends React.Component<MoviePropsType, MovieStateType> {
  constructor(props: MoviePropsType) {
    super(props)
    this.state = {
      items: [],
      counter: 0,
      showButton: true,
      refChild: createRef(),
      refParent: createRef()
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
  }

  render() {
    return (
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
            }} />
            <Card {...{
              img: '',
              name: '1',
              desc: ''
            }} />
          </div>
          <ButtonControl
            show={this.state.showButton}
            type="next"
            callback={this.nextClick}
          />
        </div>
      </div>
    )
  }
}

export default CarouselLists

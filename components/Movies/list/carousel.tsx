import React,{ createRef } from 'react'
import { CSSTransition } from 'react-transition-group'
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
      refCard: createRef(),
      classDetail: [
        'absolute top-1/2',
        'transform -translate-y-1/2',
        'bg-pink-400 w-72 h-80 rounded-3xl',
        'transition-all duration-300 ease-out',
        'scale-0 invisible opacity-0 z-0'
      ]
    }

    this.nextClick = this.nextClick.bind(this)
    this.prevClick = this.prevClick.bind(this)
    this.showingButtonControl = this.showingButtonControl.bind(this)
    this.showingDetail = this.showingDetail.bind(this)
    this.hidingDetail = this.hidingDetail.bind(this)
  }
  showTime: any
  hideTime: any

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

  showingDetail(e: any) {
    if (window.innerWidth < 1024) return
    clearTimeout(this.hideTime)
    
    const target: HTMLElement = e?.target
    const rect = target?.getBoundingClientRect()
    const cardInfo = this.state.refCard.current
    cardInfo.style.left = (rect.x - 40) + 'px'
    const oldClass = [...this.state.classDetail]
    if (oldClass[oldClass.length - 1] === 'scale-1 visible opacity-100 z-20') return
    oldClass[oldClass.length - 1] = 'scale-1 visible opacity-100 z-20'
    this.showTime = setTimeout(() => {
      this.stateSetter('classDetail', oldClass)
    }, 300)
  }

  hidingDetail() {
    if (window.innerWidth < 1024) return
    clearTimeout(this.showTime)

    const oldClass = [...this.state.classDetail]
    if (oldClass[oldClass.length - 1] === 'scale-0 invisible opacity-0 z-0') return
    oldClass[oldClass.length - 1] = 'scale-0 invisible opacity-0'
    this.hideTime = setTimeout(() => {
      this.stateSetter('classDetail', oldClass)
    }, 300)
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
        <div
          className="w-full relative mb-10"
          style={{ minHeight: '150px' }}>
          <div
            ref={this.state.refParent}
            className="z-10 relative block">
            <ButtonControl
              show={this.state.showButton}
              type="prev"
              callback={this.prevClick}
            />
            <div
              ref={this.state.refChild}
              className="carousel-movie-list md:h-60 h-32 block whitespace-nowrap space-x-4 overflow-hidden">
              <div 
                className="inline-block h-full md:w-40 w-20">
                <CardMovie
                  {...{
                    img: '',
                    name: '1',
                    desc: ''
                  }}
                />
              </div>
              <div 
                className="inline-block h-full md:w-40 w-20">
                <CardMovie
                  {...{
                    img: '',
                    name: '1',
                    desc: ''
                  }}
                />
              </div>
              <div 
                className="inline-block h-full md:w-40 w-20">
                <CardMovie
                  {...{
                    img: '',
                    name: '1',
                    desc: ''
                  }}
                />
              </div>
              <div 
                className="inline-block h-full md:w-40 w-20">
                <CardMovie
                  {...{
                    img: '',
                    name: '1',
                    desc: ''
                  }}
                />
              </div>
              <div 
                className="inline-block h-full md:w-40 w-20">
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

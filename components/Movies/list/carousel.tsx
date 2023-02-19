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
      refCard: createRef(),
      classDetail: [
        'absolute top-1/2',
        'transform -translate-y-1/2',
        'bg-pink-400 w-72 h-80 rounded-3xl',
        'transition-all duration-300 ease-out',
        'scale-0 invisible opacity-0 z-0'
      ],
      showCardInfo: false
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
    this.hidingDetail()
    const parent = this.state.refChild.current
    const child = this.state.refChild.current
    child.scrollLeft += (parent.clientWidth)
  }

  prevClick() {
    this.hidingDetail()
    const parent = this.state.refChild.current
    const child = this.state.refChild.current
    child.scrollLeft -= (parent.clientWidth)
  }

  showingButtonControl() {
    const parent = this.state.refParent.current
    const child = this.state.refChild.current
    this.stateSetter('showButton', child.scrollWidth > parent.offsetWidth)
  }

  showingDetail(number: number | string, e: any) {
    this.stateSetter('showCardInfo', false)
    this.showTime = setTimeout(() => {
      this.stateSetter('showCardInfo', true)
      const cardInfo: HTMLDivElement = this.state.refCard.current
      const child: HTMLDivElement = this.state.refChild.current

      if (!child) return

      const rect = e.target.getBoundingClientRect()
      if ((rect.left - 40) >= (window.innerWidth - rect.width)) {
        cardInfo.style.right = `${20}px`
        cardInfo.style.left = ''
      } else if (rect.left < 40) {
        cardInfo.style.left = `${20}px`
        cardInfo.style.right = ''
      } else {
        cardInfo.style.left =  `${rect.x - (rect.width / 2)}px`
        cardInfo.style.right = ''
      }
    }, 300)
  }

  hidingDetail() {
    this.stateSetter('showCardInfo', false)
    clearTimeout(this.showTime)
  }

  componentDidMount(): void {
    this.stateSetter('items', this.props.items)
    this.hidingDetail()
    setTimeout(this.showingButtonControl, 500)
  }

  render() {
    return (
      <>
        <HeaderList
          {...this.props.title}
          showLink={this.state.showLink}
        />
        <div
          className="w-full mb-10 relative"
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
              className="carousel-movie-list md:h-60 h-32 block whitespace-nowrap md:space-x-4 space-x-2 overflow-hidden">
              {
                this.state.items?.map((item: { name: string, img: string }, key) => (
                  <div
                    key={key}
                    // onMouseEnter={this.showingDetail.bind(this, key)}>
                    className="inline-block h-full md:w-40 w-20">
                    <CardMovie
                      {...{
                        img: item.img,
                        name: item.name,
                        desc: ''
                      }}
                    />
                  </div>
                ))
              }
            </div>
            <ButtonControl
              show={this.state.showButton}
              type="next"
              callback={this.nextClick}
            />
          </div>

          <div
            ref={this.state.refCard}
            onMouseLeave={this.hidingDetail}
            className={[
              'w-60',
              'absolute',
              'bg-red-500',
              this.state.showCardInfo ? 'z-20' : 'hidden z-0',
              'ease-in-out',
              '-top-8 -bottom-8',
              'transition-all',
              'duration-300'
            ].join(' ')}
            style={{
              borderRadius: '40px',
            }}>
            aaa
          </div>
        </div>
      </>
    )
  }
}

export default CarouselLists

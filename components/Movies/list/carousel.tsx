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
      ],
      showCardInfo: false
    }

    this.nextClick = this.nextClick.bind(this)
    this.prevClick = this.prevClick.bind(this)
    this.showingButtonControl = this.showingButtonControl.bind(this)
    this.showingDetail = this.showingDetail.bind(this)
    this.hidingDetail = this.hidingDetail.bind(this)
    this.createData = this.createData.bind(this)
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

  createData() {
    const test = []
    for (let i = 0; i < 14; i++) {
      test.push({
        name: `name ${i + 1}`,
        img: '',
        desc: ''
      })
    }
    this.stateSetter('items', test)
  }

  nextClick() {
    const parent = this.state.refChild.current
    const child = this.state.refChild.current
    child.scrollLeft += (parent.clientWidth)
  }

  prevClick() {
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
    this.stateSetter('showCardInfo', true)
    this.showTime = setTimeout(() => {
      const cardInfo: HTMLDivElement = this.state.refCard.current
      const child: HTMLDivElement = this.state.refChild.current

      if (!child) return

      if (cardInfo.style.display === 'none') cardInfo.style.display = 'block'

      if (e.target.offsetLeft > (child.clientWidth - 224)) {
        cardInfo.style.left = `${(e.target.offsetLeft - child.clientWidth)}px`
      } else cardInfo.style.left = `${(160 * Number(number)) - 40}px`
    }, 1000)
  }

  hidingDetail() {
    this.stateSetter('showCardInfo', false)
    const card: HTMLDivElement = this.state.refCard.current
    card.style.display = 'none'
    card.style.left = ''
    clearTimeout(this.showTime)
  }

  componentDidMount(): void {
    this.createData()
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
                this.state.items?.map((item: { name: string }, key) => (
                  <div
                    key={key}
                    className="inline-block h-full md:w-40 w-20"
                    onMouseEnter={this.showingDetail.bind(this, key)}>
                    <CardMovie
                      {...{
                        img: '',
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
            className="absolute w-80 -top-8 -bottom-8 bg-red-500 z-20 transition-all duration-300 ease-in-out">
            aaa
          </div>
        </div>
      </>
    )
  }
}

export default CarouselLists

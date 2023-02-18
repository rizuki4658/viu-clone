import React, { createRef } from 'react'
import Navigation from './Navigation'
import Slider from './Slider'
import Logo from './Logo'
import SearchLogin from './SearchLogin'

interface StateHeader {
  mobile?: boolean
  refHeaderNav?: any
  scrolledY?: boolean
  showSearch?: boolean
}

class Header extends React.Component<StateHeader, StateHeader> {
  constructor (props: StateHeader) {
    super(props)
    this.state = {
      mobile: false,
      scrolledY: false,
      refHeaderNav: createRef(),
      showSearch: false
    }
  }

  setterState = (newState: StateHeader) => {
    this.setState((state: StateHeader) => ({
        ...state,
        ...newState
      })
    )
  }

  handleResize = (e: any, directWidth?: number) => {
    const width = directWidth || e.target.innerWidth
    if (width <= 1024 && !this.state.mobile) {
      this.setterState({ mobile: true })
    } else if (width > 1024 && this.state.mobile) {
      this.setterState({ mobile: false })
    }
  }

  handleScroll = (e: Event) => {
    const content: HTMLElement = this.state.refHeaderNav.current
    if (content) {
      const rect = content.getBoundingClientRect()
      if (window.scrollY > rect.height && !this.state.scrolledY) {
        this.setterState({scrolledY: true})
      } else if (window.scrollY <= rect.height && this.state.scrolledY && !this.state.showSearch) this.setterState({scrolledY: false})
    }
  }

  onChangeDataSearch = (e: any) => {
    this.setterState({
      scrolledY: e.show,
      showSearch: e.show
    })
  }

  componentDidMount(): void {
    this.handleResize(null, window.innerWidth)
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <header
        ref={this.state.refHeaderNav}
        className="fixed z-40 top-0 left-0 right-0 transition-all duration-300 ease-in-out"
        style={{
          backgroundColor: this.state.scrolledY ? '#141414' : 'transparent'
        }}>
        <div className="flex max-w-7xl items-center lg:py-3 py-2 xl:mx-auto mx-4 gap-x-6">
          <Slider mobile={this.state.mobile} />
          <Logo />
          <Navigation mobile={this.state.mobile}/>
          <SearchLogin mobile={this.state.mobile} onChangeData={this.onChangeDataSearch} />
        </div>
      </header>
    )
  }
}

export default Header

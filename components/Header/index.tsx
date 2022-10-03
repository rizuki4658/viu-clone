import React from 'react'
import Navigation from './Navigation'
import Slider from './Slider'
import Logo from './Logo'
import SearchLogin from './SearchLogin'

interface StateHeader {
  mobile?: boolean
}

class Header extends React.Component<StateHeader, StateHeader> {
  constructor (props: StateHeader) {
    super(props)
    this.state = {
      mobile: false
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

  componentDidMount(): void {
    this.handleResize(null, window.innerWidth)
    window.addEventListener('resize', this.handleResize)
  }

  render() {
    return (
      <header className="fixed top-0 left-0 right-0">
        <div className="flex items-center md:py-3 md:px-8 py-2 px-4 gap-x-6">
          <Slider mobile={this.state.mobile} />
          <Logo />
          <Navigation mobile={this.state.mobile}/>
          <SearchLogin mobile={this.state.mobile} />
        </div>
      </header>
    )
  }
}

export default Header

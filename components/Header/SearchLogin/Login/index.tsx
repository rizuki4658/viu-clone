import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

interface LoginProps {
  mobile?: boolean
}

interface LoginState {
  show?: boolean
}

class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props)
    this.state = {
      show: false
    }

    this.handleShow = this.handleShow.bind(this)
    this.Modal = this.Modal.bind(this)
  }

  setterState = (newState: LoginState) => {
    this.setState((state: LoginState) => ({
        ...state,
        ...newState
      })
    )
  }

  handleShow() {
    if (this.state.show) {
      return this.setterState({
        show: false
      })
    }
    this.setterState({ show: true })
  }

  Modal() {
    const nodeModalLogin = useRef(null)
    return (
      <CSSTransition
        in={this.state.show}
        timeout={200}
        nodeRef={nodeModalLogin}
        classNames="fade"
        appear
        unmountOnExit>
        <>
          <div
            ref={nodeModalLogin}
            className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"
            onClick={this.handleShow}
          />
        </>
      </CSSTransition>
    )
  }

  render() {
    if (!this.props.mobile) {
      return (
        <div className="relative">
          <button
            type="button"
            className="px-6 py-3 text-sm bg-white bg-opacity-30 rounded-full hover:bg-yellow-500 hover:text-black"
            onClick={this.handleShow}>
            Sign in / Sign Up
          </button>
          <this.Modal />
        </div>
      )
    }

    return <></>
  }
}

export default Login

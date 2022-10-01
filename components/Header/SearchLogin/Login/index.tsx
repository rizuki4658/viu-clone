import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Facebook as IconFacebook } from '../../../Icons'

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
    this.ContentModal = this.ContentModal.bind(this)
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

  ContentModal() {
    const nodeContentModalRef = useRef(null)

    return (
      <CSSTransition
        in={this.state.show}
        timeout={300}
        nodeRef={nodeContentModalRef}
        classNames="fade"
        unmountOnExit
        appear>
        <div
          ref={nodeContentModalRef}
          className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 max-w-2xl max-h-96">
          <div className="bg-white rounded-3xl text-gray-500 flex items-center">
            <div className="pb-6 px-10 pt-10 sm:w-96">
              <div className="text-center mb-10">
                <h4 className="cbold text-4xl mb-1">Sign Up</h4>
                <span>and get 15 days free access to all Premium videos.</span>
              </div>
              <ul>
                <li className="mb-3">
                  <button
                    className="bg-blue-700 text-white p-5 cbold text-sm w-full flex items-center rounded-full">
                    <IconFacebook />
                    Continue with Facebook
                  </button>
                </li>
                <li className="mb-3">
                  <button
                    className="p-5 cbold text-gray-400 border border-gray-400 text-sm w-full flex items-center rounded-full">
                    Continue with Google
                  </button>
                </li>
                <li className="mb-3">
                  <button
                    className="text-white bg-black p-5 cbold text-sm w-full flex items-center rounded-full">
                    Continue with Apple
                  </button>
                </li>
                <li>
                  <button
                    className="text-gray-700 bg-yellow-500 p-5 cbold text-sm w-full flex items-center rounded-full">
                    Continue with Email or Mobile
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CSSTransition>
    )
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
          <this.ContentModal />
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

import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import {
  Facebook as IconFacebook,
  Apple as IconApple,
  GoogleColor as IconGoogle,
  Email as IconEmail
} from '../../../Icons'

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
    this.handleShowPrevent = this.handleShowPrevent.bind(this)
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

  handleShow(e: any) {
    if (this.state.show) {
      if (!e.target.className.includes('wrapper-login')) return e.preventDefault() 
      return this.setterState({
        show: false
      })
    }
    this.setterState({ show: true })
  }

  handleShowPrevent(e: Event) {
    e.preventDefault()
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
          className="mx-auto mt-20 max-w-3xl">
          <div className="bg-white rounded-3xl text-gray-500 flex items-center">
            <div className="pb-6 px-10 pt-10 flex-1">
              <div className="text-center mb-10">
                <h4 className="cbold text-4xl mb-1">Sign Up</h4>
                <span>and get 15 days free access to all Premium videos.</span>
              </div>
              <ul>
                <li className="mb-3">
                  <button
                    className="bg-blue-600 text-white p-5 cbold text-sm w-full flex items-center rounded-full gap-x-4">
                    <span className="text-xl">
                      <IconFacebook />
                    </span>
                    <span className="leading-none pt-1">
                      Continue with Facebook
                    </span>
                  </button>
                </li>
                <li className="mb-3">
                  <button
                    className="p-5 cbold text-gray-400 border border-gray-400 text-sm w-full flex items-center rounded-full gap-x-4">
                    <span className="text-xl">
                      < IconGoogle />
                    </span>
                    <span className="leading-none pt-1">
                      Continue with Google
                    </span>
                  </button>
                </li>
                <li className="mb-3">
                  <button
                    className="text-white bg-black p-5 cbold text-sm w-full flex items-center rounded-full gap-x-4">
                    <span className="text-xl">
                      <IconApple />
                    </span>
                    <span className="leading-none pt-1">
                      Continue with Apple
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    className="text-gray-700 bg-yellow-500 p-5 cbold text-sm w-full flex items-center rounded-full gap-x-4">
                    <span className="text-xl">
                      <IconEmail />
                    </span>
                    <span className="leading-none pt-1">
                      Continue with Email or Mobile
                    </span>
                  </button>
                </li>
              </ul>
              <div
                className="mt-4 text-xs text-center">
                  By continuing, you agree to Viu&nbsp;
                  <span className="cbold">Terms and conditions</span>
                  &nbsp;and&nbsp;
                  <span className="cbold">Privacy Policy</span>
                </div>
            </div>
            <div
              className="md:block bg-black"
              style={{ width: '360px' }}>
              <img src="./img/login-image.png" className="rounded-tr-3xl rounded-br-3xl" />
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
        <div
          ref={nodeModalLogin}
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50">
          <div
            className="wrapper-login relative min-h-full overflow-y-auto"
            onClick={this.handleShow}>
            <this.ContentModal />
          </div>
        </div>
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

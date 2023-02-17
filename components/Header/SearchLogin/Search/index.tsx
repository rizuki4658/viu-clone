import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

import { movies } from '../../../../constants/search'
import { StateSearch, PropsSearch, Movie } from '../../../../types'

import {
  Search as IconSearch,
  Close as IconClose,
  Clock as IconClock,
  TrendingUp as IconTrendingUp
} from '../../../Icons'

class Search extends React.Component<PropsSearch, StateSearch> {
  constructor (props: StateSearch) {
    super(props)
    this.state = {
      show: props.show,
      search: '',
      history: [],
      results: movies,
      onSearch: true
    }

    this.handleShow = this.handleShow.bind(this)
    this.handleChangeForm = this.handleChangeForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setterState = (newState: StateSearch) => {
    this.setState((state: StateSearch) => {
      const result = ({
        ...state,
        ...newState
      })
      this.props.onChangeData(result)
      return result
    })
  }

  handleShow() {
    if (this.state.show) {
      this.setterState({
        search: '',
        history: [],
        show: false,
        results: movies,
        onSearch: true
      })
      return
    }
    this.setterState({ show: true })
  }

  handleChangeForm(e: any) {
    const { name, value } = e.target
    if (name === 'search') {
      const historySearch: string[] = localStorage.getItem('search') ? JSON.parse(localStorage.getItem('search') || '[]') : []
      const filtered = [...historySearch].filter((item: string) => item.includes(value))
      return this.setterState({
        history: filtered,
        [name]: value,
        onSearch: true
      })
    }
    this.setterState({ [name]: value })
  }

  handleSubmit(e: any) {
    const historySearch: string[] = localStorage.getItem('search') ? JSON.parse(localStorage.getItem('search') || '[]') : []
 
    if (historySearch.length && !historySearch.find((item: string) => item === this.state.search)) {
      localStorage.setItem('search', JSON.stringify([...historySearch, ...[this.state.search]]))
    } else if (!historySearch.length) localStorage.setItem('search', JSON.stringify([this.state.search]))

    this.setterState({
      history: [],
      search: '',
      onSearch: false
    })

    e.preventDefault()
  }

  handleChangeDataToParent() {
    this.props.onChangeData()
  }

  History() {
    if (this.state.history?.length && this.state.search?.trim().length) {
      return (
        <>
          <span className="block md:text-lg cbold text-center mb-4">Recent Searches</span>
          <div className="flex flex-wrap justify-center items-center gap-x-4">
            {
              this.state.history.map((item: string, key: number) => {
                return (
                  <button
                    key={key}
                    className="flex items-center gap-x-2 px-5 py-3 bg-gray-600 bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 ease-in-out text-yellow-500 rounded-full"
                    type="button">
                    <IconClock />
                    {item}
                  </button>
                )}
              )
            }
          </div>
        </>
      )
    }
    return <></>
  }

  Results() {
    if (this.state.onSearch) {
      return (
        <>
        <div className="text-2xl mt-12 text-center">Trends of The Weeks</div>
        <ul className="mt-8">
          {this.state.results?.map((item: Movie, key: number) => {
            return (
              <li key={key} className="md:inline-block sm:w-1/2 md:px-2 py-2">
                <button
                  className="flex items-center bg-gray-700 bg-opacity-0 hover:bg-opacity-30 px-4 py-2 gap-x-2 w-full hover:text-yellow-500 transition-all duration-300 ease-in-out rounded-full">
                  <span className="text-2xl"><IconTrendingUp /></span>
                  <div className="whitespace-nowrap overflow-hidden overflow-ellipsis">{item.name}</div>
                </button>
              </li>
            )
          })}
        </ul>
        </>
      )
    }
    return (
      <div className="border-t border-gray-400 py-4 text-center text-xs">
        Not Found!
      </div>
    )
  }

  ModalSearch: React.FC = () => {
    const nodeModalSearch = useRef(null)
 
    return (
      <CSSTransition
        in={this.state.show}
        timeout={300}
        nodeRef={nodeModalSearch}
        classNames="search-slide"
        unmountOnExit
        appear>
        <div
          ref={nodeModalSearch}
          className="search-modal fixed md:px-8 px-4 py-3 bg-black lg:top-16 top-12 overflow-y-auto bottom-0 left-0 right-0">
          <div className="mx-auto max-w-lg">
            <form onSubmit={this.handleSubmit}>
              <input
                value={this.state.search}
                onChange={this.handleChangeForm}
                name="search"
                type="text"
                placeholder="Search by Title, Genre, People"
                autoComplete="off"
                className="bg-transparent block w-full py-2 text-lg md:text-2xl text-center focus:outline-none" />
            </form>
            {this.History()}
            {this.Results()}
          </div>
        </div>
      </CSSTransition>
    )
  }

  Icon: React.FC = () => {
    if (this.state.show) return (<IconClose />)

    return (<IconSearch />)
  }

  render() {
    return (
      <>
        <button
          type="button"
          className="flex items-center cbold gap-x-1"
          onClick={this.handleShow}>
          <span className="text-sm">Search</span>
          <this.Icon />
        </button>
        <this.ModalSearch />
      </>
    )
  }
}

export default Search
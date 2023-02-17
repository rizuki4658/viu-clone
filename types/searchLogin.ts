
import { Movie } from './index'
export interface LoginProps {
  mobile?: boolean
}

export interface LoginState {
  show?: boolean
}

export interface StateSearch {
  show?: boolean
  search?: string | undefined
  history?: string[]
  results?: Movie[]
  onSearch?: boolean
}

export interface PropsSearch {
  show?: boolean
  search?: string | undefined
  history?: string[]
  results?: Movie[]
  onSearch?: boolean
  onChangeData?: any
}

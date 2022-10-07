export type Menu = {
  link: string
  name: string
}

export type Menus = Menu[]

export type SideMenu = {
  top: Menus
  bottom: Menus
}

export type Movie = {
  link: string
  name: string
}

export * from './searchLogin'

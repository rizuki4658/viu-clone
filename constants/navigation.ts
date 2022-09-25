import { Menus, SideMenu } from '../types'

export const menus: Menus = [
  {
    link: '',
    name: 'VIU Originals'
  },
  {
    link: '',
    name: 'Korean Drama'
  },
  {
    link: '',
    name: 'Anime'
  },
  {
    link: '',
    name: 'Asian Drama'
  },
  {
    link: '',
    name: 'Movies'
  }
]

export const menusSide: SideMenu = {
  top: [
    ...menus,
    {
      name: 'Korean Varieties',
      link: ''
    }
  ],
  bottom: [
    {
      link: '',
      name: 'Go Premium'
    },
    {
      link: '',
      name: 'My Account'
    },
    {
      link: '',
      name: 'Redeem Voucher'
    },
    {
      link: '',
      name: 'Pair Your TV'
    },
    {
      link: '',
      name: 'FAQs'
    },
    {
      link: '',
      name: 'Install Viu'
    }
  ]
}
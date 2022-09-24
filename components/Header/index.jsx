// import Link from 'next/link'
import Navigation from './Navigation'

const isMobile = false

const Header = () => {
  return (
    <header
      className={[
        'md:flex justify-between',
        'md:py-3 md:px-8 py-2 px-4'
      ]}>
      <div
        className={[
          'flex items-center',
          'gap-x-4'
        ]}>
        <div>Button</div>
        <div
          className={[
            'text-center md:text-left flex-1'
          ]}>
          Viu logo
        </div>
        <Navigation />  
        <div
          className={[
            'md:hidden flex items-center justify-end'          
          ]}>
          <div>Search</div>
        </div>
      </div>
      <div
        className={[
          'md:flex hidden items-center justify-end'          
        ]}>
        <div>Search</div>
        <div>Button Login</div>
      </div>
    </header>
  )
}

export default Header

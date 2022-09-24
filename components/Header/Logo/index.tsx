import React from 'react'
import Link from 'next/link'
import { ViuLogo } from '../../Icons'

const Logo: React.FC<{}> = () => {
  return(
    <div className="flex lg:block justify-center items-center flex-1 lg:flex-none">
      <Link href={'/'}>
        <a>
          <ViuLogo />
        </a>
      </Link>
    </div>
  )
}

export default Logo

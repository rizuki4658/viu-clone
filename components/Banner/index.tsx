import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Banner.module.css'

import BannerTags from './tags'
import { Play as IconPlay } from '../Icons'

type BannerType = {
  type: "playist" | "video"
}

const BannerPlayist: React.FC<{
  title: string
  img: string
  about: string
  tags: string[]
}> = ({...props}) => {
  return (
    <>
      <div
        className={styles.banner_playlist}
        style={{
          backgroundImage: 'url(https://readrange.com/wp-content/uploads/elementor/thumbs/NIKI-01-1-1-psocxax8azvs7xmf6ev3wj7wt2xkz3lf242rqwv8y8.jpg)' // `url(${props.img})`
        }}
      />

      <div className="xl:max-w-7xl xl:mx-auto mx-4 lg:flex justify-between items-center xl:gap-x-6 lg:gap-x-4">
        <div>
          <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-4">
            Title of Movie or Series JHASJKH JKHajksdhh  jkashdjkh hkjashd  hkjashdh  hkjh  kjashdkjh jkhh kjhhjh  hjhjhlasdj jkj
          </h1>
          <BannerTags tags={['2016', 'Bahasa Indonesia', 'Thriller Mystery']} />
        </div>

        <div className="flex justify-end gap-x-2">
          <Link href={'/video/1'}>
            <a
              className="flex items-center xl:px-5 px-3 xl:py-3 py-1.5 bg-yellow-500 text-yellow-800 rounded-3xl font-bold xl:text-lg text-sm gap-x-2 min-w-max">
              <span className="xl:text-3xl text-xl"><IconPlay /></span>
              Watch Episode 1
            </a>
          </Link>
          <button>A</button>
        </div>
      </div>
    </>
  )
}

class Banner extends React.Component<BannerType> {
  constructor(props: any) {
    super(props)

    this.BannerType = this.BannerType.bind(this)
  }

  BannerType() {
    if (this.props.type === 'playist')
      return (
        <BannerPlayist {...{
          img: '',
          tags: [],
          about: '',
          title: ''
        }}/>
      )

    return <></>
  }

  render() {
    return (
      <div className={styles.banner}>
        <this.BannerType />
      </div>
    )
  }
}

export default Banner

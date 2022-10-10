import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { PlaylistType } from '../../../types/playist'

import Banner from '../../../components/Banner'

class Playlist extends React.Component<PlaylistType, PlaylistType> {
  constructor(props: PlaylistType) {
    super(props)

    this.state = {
      id: undefined
    }
  }

  stateSetter(key: string, value: any): void {
    const oldState = {...this.state}
    this.setState({
      ...oldState,
      [key]: value
    })
  }

  componentDidMount(): void {
    this.stateSetter('id', this.props.id)
  }

  render() {
    return (
      <>
        <Banner type="playist" />
      </>
    )
  }
}

const Page :NextPage = () => {
  const router = useRouter()

  if (router.isReady) return <Playlist id={router.query.id} />

  return <></>
}

export default Page

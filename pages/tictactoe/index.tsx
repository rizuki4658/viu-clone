import React from 'react'
import Head from 'next/head'
import TicTacToe from '../../components/TicTacToe'

const PageTicTacToe: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tic Tac Toe</title>
      </Head>

      <div className="mt-16 flex justify-center items-center h-96">
        <div>
          <TicTacToe />
        </div>
      </div>
    </>
  )
}

export default PageTicTacToe
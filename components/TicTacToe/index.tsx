import React, { useEffect, useState } from 'react'

const players = {
  CPU: {
    sym: 'O',
    name: 'CPU'
  },
  HUMAN: {
    sym: 'X',
    name: 'You'
  }
}

const TicTacToe: React.FC = () => {
  const [state, setState] = useState({
    board: [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ],
    isCPUNext: false,
    winner: null
  })

  const setterState = ({ key, value}: { key: string, value: any}) => {
    return setState((oldState: any) => ({
      ...oldState,
      [key]: value
    }))
  }

  const getDiagonal = (type: 'principal' | 'secondary') => {
    const diagonal = []
    if (type === 'principal') {
      for (let i = 0; i < state.board.length; i++) {
        diagonal.push(state.board[i][i])
      }
    } else if (type === 'secondary') {
      let k = state.board.length - 1
      for (let i = 0; i < state.board.length; i++) {
        diagonal.push(state.board[i][k--])
      }
    }
    return diagonal
  }

  const checkRow = () => {
    if (state.winner) return

    let length = 0
    for (let i = 0; i < state.board.length; i++) {
      const row = state.board[i]
      length = row.length
      if (row.every((item) => item === players.CPU.sym)) {
        setterState({ key: 'winner', value: players.CPU.name })
        return length
      } else if (row.every((item) => item === players.HUMAN.sym)) {
        setterState({ key: 'winner', value: players.HUMAN.name })
        return length
      }
    }
    return length
  }

  const checkCol = (length: number) => {
    if (state.winner) return

    for (let i = 0; i < length; i++) {
      const column = state.board.map((row) => row[i])
      if (column.every((item) => item === players.CPU.sym)) {
        return setterState({ key: 'winner', value: players.CPU.name })
      } else if (column.every((item) => item === players.HUMAN.sym)) {
        return setterState({ key: 'winner', value: players.HUMAN.name })
      }
    }
  }

  const checkDiagonal = () => {
    if (state.winner) return

    const principal = getDiagonal('principal')
    const secondary = getDiagonal('secondary')

    if (principal.every((item) => item === players.CPU.sym || secondary.every((item) => item === players.CPU.sym))) {
      return setterState({ key: 'winner', value: players.CPU.name })
    } else if (principal.every((item) => item === players.HUMAN.sym || secondary.every((item) => item === players.HUMAN.sym))) {
      return setterState({ key: 'winner', value: players.HUMAN.name })
    }
  }

  const checkDraw = () => {
    const newBoard = [...state.board]
    if (newBoard.flat().every((item) => item !== '')) return setterState({ key: 'winner', value: 'draw' })
  }

  const checkWinner = () => {
    const colLength = checkRow()

    if (colLength) checkCol(colLength)

    checkDiagonal()

    checkDraw()
  }

  const marks = (row: number, col: number) => {
    if (state.winner || state.isCPUNext) return

    const newBoard = [...state.board]
    newBoard[row][col] = players.HUMAN.sym
    setterState({ key: 'board', value: newBoard })
    checkWinner()
    setterState({
      key: 'isCPUNext',
      value: true
    })
  }

  const movesCPU = () => {
    const emptyIndexes: any = [];
    state.board.forEach((row, arrayIndex) => {
      row.forEach((col, index) => {
        if (col === '') {
          emptyIndexes.push({ arrayIndex, index })
        }
      })
    })
    const randomIndex = Math.floor(Math.random() * emptyIndexes.length)
    return emptyIndexes[randomIndex]
  }

  const marksCPU = () => {
    if (state.winner) return

    const time = setTimeout(() => {
      const move = movesCPU()
      const newBoard = [...state.board]
      newBoard[move.arrayIndex][move.index] = players.CPU.sym
      setterState({ key: 'board', value: newBoard })
      checkWinner()
      setterState({
        key: 'isCPUNext',
        value: false
      })
      clearTimeout(time)
    }, 3000)
  }

  useEffect(() => {
    if (state.winner) return;
    if (state.isCPUNext) marksCPU()
  }, [state.isCPUNext])

  return (
    <table>
      <tbody>
        {
          state.board.map((row, rowKey) => (
            <tr key={rowKey}>
              {
                row.map((col, colKey) => (
                  <td
                    key={`${rowKey}${colKey}`}
                    className="border w-24 h-24 text-5xl text-center cursor-pointer"
                    onClick={() => marks(rowKey, colKey)}>
                    {col}
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default TicTacToe

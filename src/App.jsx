import { useState } from 'react'
import './App.css'
import TicTacToe from './components/TicTacToe';

const initialBoard = () => Array(9).fill(null);

function App() {
  const [board, setBoard] = useState(initialBoard())
  console.log(board)

  return (
    <TicTacToe/>
  )
}

export default App

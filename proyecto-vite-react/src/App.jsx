import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <TaskList></TaskList>
    <TaskForm></TaskForm>
    </div>
  )
}

export default App

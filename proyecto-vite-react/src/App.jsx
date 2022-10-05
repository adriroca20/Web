import { useState, useEffect} from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { tareas } from './tareas'


function App() {
  const [tasks, setTasks] = useState(0)
  
  useEffect(() => {
      setTasks(tareas);
  }, [])

  //A la funcion le pasas una tarea y la añade al
  //array
  function createTask(task){
    //Si tasks es [1,2,3] y task es 4, esto devuelve
    //[1,2,3,4]
    setTasks([...tasks,task]);
  }

  return (
    <div>
    <TaskList tasks={tareas}></TaskList>
    <TaskForm createTask={createTask}></TaskForm>
    </div>
  )
}

export default App

import { useState, useEffect} from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { tareas } from './tareas'


function App() {
  const [tasks, setTasks] = useState([])
  
  useEffect(() => {
      setTasks(tareas);
  }, [])

  //A la funcion le pasas una tarea y la añade al
  //array
  function createTask(taskTitle){
    //Si tasks es [1,2,3] y task es 4, esto devuelve
    //[1,2,3,4]
    setTasks([...tasks,{
      title: taskTitle,
      id:tasks.length,
      description: "Nueva tarea creada"
    }]);

  }

  return (
    <div>
    <TaskForm createTask={createTask}></TaskForm>
    <TaskList tasks={tasks}></TaskList>
    </div>
  )
}

export default App

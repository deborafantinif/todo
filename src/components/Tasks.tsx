import { useState } from 'react';
import { NewTask } from './NewTask';
import { NoTask } from './NoTask';
import { Task } from './Task';
import styles from './Tasks.module.css';

export interface ITask {
  status: boolean,
  content: string,
  id: number,
}

export function Tasks() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [tasksNumbers, setTasksNumbers] = useState<number>(0);
  const [tasksCompleted, setTasksCompleted] = useState<string>('0');

  function changeStatus(id: number) {
    const task = tasks.find((t) => t.id == id) as unknown as ITask;
    const newTask = {
      ...task,
      status: !task.status,
    };
    const newTasks = tasks.map((t) => {
      if (t.id == id) {
        return newTask;
      }
      return t;
    })
    const numberCompletedTasks = newTasks.filter((t) => t.status == true).length
    setTasksCompleted(`${numberCompletedTasks} de ${newTasks.length}`)
    setTasks(newTasks);
  }

  function deleteTask(id: number) {
    setTasksNumbers(tasks.length - 1)
    const deletedTask = tasks.filter((t) => t.id !== id) as unknown as ITask[];
    if (deletedTask.length == 0) {
      setTasksCompleted('0')
    } else {
      const numberCompletedTasks = deletedTask.filter((t) => t.status == true).length
      setTasksCompleted(`${numberCompletedTasks} de ${deletedTask.length}`)
    }
    setTasks(deletedTask);
  }

  function handleChangeTask(id: number, action: string) {
    (action == 'status') ? changeStatus(id) : deleteTask(id);
  }

  function createNewTask(task: string) {
    setTasksNumbers(tasks.length + 1)
    const newId = tasks.length == 0 ? 0 : tasks[tasks.length - 1].id + 1
    const newTask = {
      status: false,
      content: task,
      id: newId
    }
    const newTasks = [... tasks]
    newTasks.push(newTask)
    const numberCompletedTasks = newTasks.filter((t) => t.status == true).length
    setTasksCompleted(`${numberCompletedTasks} de ${newTasks.length}`)

    setTasks(newTasks)
  }

  return(
    <main>
      <NewTask createNewTask={createNewTask}/>
      <div className={styles.headline}>
        <div>
          <span className={styles.countertasks}>Tarefas criadas </span>
          <span className={styles.counter}>{tasksNumbers}</span>
        </div>
        <div>
          <span className={styles.counterfinish}>Concluídas </span>
          <span className={styles.counter}>{tasksCompleted}</span>
        </div>
      </div>
      { (tasks.length > 0) ? tasks.map((item) => <Task key={item.id} task={item} handleChangeTask={handleChangeTask}/>) : <NoTask/>}
    </main>
  )
}
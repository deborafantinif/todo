import { PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'
import { useState } from 'react';
import { ITask } from './Tasks'

interface INewTaskProps {
  createNewTask(task: string): void,
}

export function NewTask(props: INewTaskProps) {
  const [task, setTask] = useState<string>('');

  function handleInput(event: React.ChangeEvent<HTMLInputElement>): void {
    setTask(event.target.value)
  }

  function handleSubmit() {
    props.createNewTask(task)
    setTask('')
  }

  return(
    <div className={styles.newtask}>
      <input type="text" className={styles.inputtask} value={task} placeholder="Adicione uma nova tarefa" onChange={(e) => handleInput(e)} />
      <button type='button' className={styles.buttontask} onClick={handleSubmit}>
        <div>
        <span>Criar</span>  <PlusCircle size={16}/>
        </div>
      </button>
    </div>
  )
}
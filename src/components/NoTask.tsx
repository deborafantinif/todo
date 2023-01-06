import { ClipboardText } from 'phosphor-react'
import styles from './NoTask.module.css'

export function NoTask() {
  return(
    <div className={styles.nocontent}>
      <ClipboardText size={56}/>
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
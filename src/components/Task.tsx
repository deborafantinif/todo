import { CheckCircle, Circle, Trash } from 'phosphor-react';
import PropTypes from 'prop-types';
import styles from './Task.module.css';
import { ITask } from './Tasks';

interface ITaskProps {
  task: ITask,
  handleChangeTask(id: number, action: string): void,
}

export function Task({task, handleChangeTask}: ITaskProps) {
  return(
    <div className={styles.content}>
      <div className={styles.text} onClick={() => handleChangeTask(task.id, 'status')}>
        {!task.status ? <Circle size={24} className={styles.circle}/> : <CheckCircle size={24} className={styles.circle}/>}
        <p>{task.content}</p>
      </div>
      <Trash size={20} className={styles.trash} onClick={() => handleChangeTask(task.id, 'delete')}/>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.shape({
    status: PropTypes.bool,
    content: PropTypes.string,
  }).isRequired,
};

// 
import { Trash, PlusCircle, ClipboardText } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import styles from "./TodoList.module.css";

interface TaskProps {
  id: string;
  name: string;
  status: boolean;
}

export function TodoList() {
  const [listTasks, setListTasks] = useState<TaskProps[]>([]);
  const [newTask, setNewTask] = useState<TaskProps>({
    id: '',
    name: '',
    status: false}
  );

  function handleCreateNewTask() {
    setListTasks([...listTasks, newTask]);
    setNewTask({
      id: '',
      name: '',
      status: false
    });
  }
  
  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    const nameTask = event.target.value;

    setNewTask({
      id: uuidv4(),
      name: nameTask,
      status: false
    });
  }

  function toggleStatus(idTask: string) {
    const newListTasks = listTasks.map(task => {
      if(idTask === task.id) {
        return {
          id: task.id,
          name: task.name,
          status: !task.status
        }
      }

      return task;
    });

    setListTasks(newListTasks);
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeleteOne = listTasks.filter(task => {
      return task.id !== taskToDelete;
    });

    setListTasks(tasksWithoutDeleteOne);
  }

  return (
    <div className={styles.container}>
      <div className={styles.newTask}>
        <input type="text" onChange={handleNewTask} value={newTask?.name}/>

        <button onClick={handleCreateNewTask}>
          Nova tarefa
          <PlusCircle size={32} />
        </button>
      </div>

      <div className={styles.content}>
        <header>
          <p>Total de tarefas<span>{listTasks.length}</span></p>
          <p>Tarefas realizadas<span>{` 2 / ${listTasks.length}`}</span></p>
        </header>
        {listTasks.length !== 0 ? listTasks.map(task => {
          return (
            <div key={task.id} className={styles.contentTask}>
              <div className={styles.contentInfo} >
                <input type="checkbox" onChange={() => toggleStatus(task.id)} name="task" />
                
                <p className={task.status ? `${styles.concluded}` : ''}>{task.name}</p>
              </div>

              <button onClick={() => deleteTask(task.id)} title="Deletar tarefa">
                <Trash size={24} />
              </button>
            </div>
          );
        }) :
          <div className={styles.contentTaskEmpty}>
            <ClipboardText size={46} />
            <p>{`Não há tarefas para serem realizadas.`}</p>
          </div>
        }
      </div>
    </div>
  );
}

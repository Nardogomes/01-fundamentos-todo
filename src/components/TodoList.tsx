import { Trash, PlusCircle, ClipboardText } from "phosphor-react";
import { ChangeEvent, useState } from "react";

import styles from "./TodoList.module.css";

export function TodoList() {
  const [listTasks, setListTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  function handleCreateNewTask() {
    setListTasks([...listTasks, newTask]);
    setNewTask('');
  }
  
  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.newTask}>
        <input type="text" onChange={handleNewTask} value={newTask}/>

        <button onClick={handleCreateNewTask}>
          Nova tarefa
          <PlusCircle size={32} />
        </button>
      </div>

      <div className={styles.content}>
        {listTasks.length !== 0 ? listTasks.map((task, index) => {
          return (
            <div key={index} className={styles.contentTask}>
              <div className={styles.contentInfo} >
                <input type="checkbox" name="task" />
                
                <p>{task}</p>
              </div>

              <button title="Deletar tarefa">
                <Trash size={24} />
              </button>
            </div>
          );
        }) :
          <div className={styles.contentTaskEmpty}>
            <ClipboardText size={32} />
            <p>{`Não há tarefas para serem realizdas.`}</p>
          </div>
        }
      </div>
    </div>
  );
}

import { Trash, PlusCircle } from "phosphor-react";

import styles from "./TodoList.module.css";

export function TodoList() {
  return (
    <div className={styles.container}>
      <div className={styles.newTask}>
        <input type="text" />

        <button>
          Nova tarefa
          <PlusCircle size={32} />
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.contentTask}>
          <div className={styles.contentInfo} >
            <input type="checkbox" name="task" />
            
            <p>Estudar Javascrit</p>
          </div>

          <button title="Deletar tarefa">
            <Trash size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

import { getTasks } from "../_data-access/get-tasks";
import TaskInfoClient from "./task-info-client";

const TaskInfos = async () => {
  // 1. Busca as tarefas no banco de dados no lado do servidor
  const tasks = await getTasks();

  // 2. Cálculos dinâmicos para contadores e barra de progresso
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.done).length;

  return (
    <TaskInfoClient totalTasks={totalTasks} completedTasks={completedTasks} />
  );
};

export default TaskInfos;

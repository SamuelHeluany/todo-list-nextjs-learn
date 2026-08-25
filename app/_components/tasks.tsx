import { getTasks } from "../_data-access/get-tasks";
import DeleteTask from "./delete-task";
import EditTask from "./edit-task";
import ToggleTaskButton from "./toggle-task-button";

const TaskList = async () => {
  const tasks = await getTasks();
  return (
    <div className="mt-4 border-b">
      {tasks.map((task) => (
        <div
          className="h-14 flex justify-between items-center border-t"
          key={task.id}
        >
          <div
            className={`${
              task.done ? "w-1 h-full bg-green-400" : "w-1 h-full bg-red-400"
            }`}
          ></div>

          <p className="flex-1 px-2 text-base">{task.task}</p>
          <div className="flex items-center ">
            <EditTask />
            <DeleteTask id={task.id} />
            <ToggleTaskButton id={task.id} done={task.done} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

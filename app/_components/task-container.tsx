"use client";

import { useState } from "react";

import { Tasks } from "../generated/prisma";
import TaskFilter, { FilterType } from "./tasks-filter";
import TaskList from "./tasks";

interface TaskContainerProps {
  initialTasks: Tasks[];
}

export default function TaskContainer({ initialTasks }: TaskContainerProps) {
  const [filterTask, setFilterTask] = useState<FilterType>("allTasks");

  // Filtra em tempo de execução
  const selectedFilterTask = initialTasks.filter((task) => {
    if (filterTask === "completedTasks") return task.done;
    if (filterTask === "pendingTasks") return !task.done;
    return true;
  });

  return (
    <div className="space-y-4">
      <TaskFilter currentFilter={filterTask} onFilterChange={setFilterTask} />
      <TaskList tasks={selectedFilterTask} />
    </div>
  );
}

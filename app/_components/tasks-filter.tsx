"use client";

import { Check, List, X } from "lucide-react";
import { Badge } from "./ui/badge";

export type FilterType = "allTasks" | "pendingTasks" | "completedTasks";

interface TaskFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const TaskFilter = ({ currentFilter, onFilterChange }: TaskFilterProps) => {
  return (
    <div className="flex gap-2">
      <Badge
        className="cursor-pointer h-6 gap-1"
        variant={currentFilter === "allTasks" ? "default" : "outline"}
        onClick={() => onFilterChange("allTasks")}
      >
        <List className="w-3.5 h-3.5" />
        Todas
      </Badge>

      <Badge
        className="cursor-pointer h-6 gap-1"
        variant={currentFilter === "pendingTasks" ? "default" : "outline"}
        onClick={() => onFilterChange("pendingTasks")}
      >
        <X className="w-3.5 h-3.5" />
        Não finalizadas
      </Badge>

      <Badge
        className="cursor-pointer h-6 gap-1"
        variant={currentFilter === "completedTasks" ? "default" : "outline"}
        onClick={() => onFilterChange("completedTasks")}
      >
        <Check className="w-3.5 h-3.5" />
        Concluídas
      </Badge>
    </div>
  );
};

export default TaskFilter;

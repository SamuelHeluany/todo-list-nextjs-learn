"use client";
import { toast } from "sonner";
import { clearAllTasksStatus } from "../_actions/clear-all-tasks-status";
import { List, ListCheck, Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { useState } from "react";

interface TaskInfoClientProps {
  totalTasks: number;
  completedTasks: number;
}

export function TaskInfoClient({
  totalTasks,
  completedTasks,
}: TaskInfoClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDialog = () => {
    if (completedTasks > 0) {
      setIsOpen(true);
    } else {
      toast.error("Não há tarefas a serem limpas.");
    }
  };

  const handleClearTaskStatus = async () => {
    try {
      await clearAllTasksStatus({ done: true });
      toast.success("Tarefas limpas com sucesso!");
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao limpar tarefas.");
      setIsOpen(false);
    }
  };

  const progressPercentage =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  return (
    <div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-1.5 text-sm">
          <ListCheck size={18} />
          <p>
            Tarefas concluídas: ({completedTasks}/{totalTasks})
          </p>
        </div>
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
          <button
            type="button"
            onClick={handleOpenDialog}
            className="text-xs h-7 cursor-pointer border p-2 rounded-xl flex items-center gap-1 hover:bg-gray-50"
          >
            <Trash className="w-3.5 h-3.5" />
            Limpar tarefas concluídas
          </button>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Deseja limpar as tarefas concluídas?
              </AlertDialogTitle>
              <AlertDialogDescription>
                Está ação fará com que todas as tarefas concluídas se tornem
                não-concluídas e não poderá ser desfeita.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Não</AlertDialogCancel>
              <AlertDialogAction onClick={handleClearTaskStatus}>
                Sim
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/* Barra de Progresso Dinâmica  */}
      <div className="h-2 w-full bg-gray-100 mt-4 rounded-md overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-md transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <div className="flex items-center justify-end gap-1 mt-2 text-gray-500">
        <List size={16} />
        <p className="text-xs">{totalTasks} tarefas no total</p>
      </div>
    </div>
  );
}

export default TaskInfoClient;

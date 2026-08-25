"use client";

import { toast } from "sonner";
import { updateTaskStatus } from "../_actions/update-task-status";
import { Check, X } from "lucide-react";

interface ToggleTaskButtonProps {
  id: string;
  done: boolean;
}

export default function ToggleTaskButton({ id, done }: ToggleTaskButtonProps) {
  const handleToggleStatus = async () => {
    try {
      await updateTaskStatus({ id });

      if (!done) {
        toast.success("Status da tarefa: Finalizada!");
      } else {
        toast.success("Status da tarefa: Aguardando ser finalizada!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao concluir tarefa.");
    }
  };

  return (
    <button
      className="flex justify-center items-center rounded-sm h-8 cursor-pointer hover:bg-gray-100"
      onClick={handleToggleStatus}
    >
      {done ? <X /> : <Check />}
    </button>
  );
}

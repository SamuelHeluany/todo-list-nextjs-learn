"use client";

import { Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { DeleteTaskSchema } from "../_actions/delete-task/schema";
import { deleteTask } from "../_actions/delete-task";
import { toast } from "sonner";

const DeleteTask = ({ id }: DeleteTaskSchema) => {
  const handleDeleteTask = async () => {
    try {
      await deleteTask({ id: id });
      toast.success("Tarefa deletada com Sucesso!");
    } catch (error) {
      throw error;
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={
          <button className="flex justify-center items-center rounded-sm w-8 h-8 cursor-pointer hover:bg-gray-100">
            <Trash size={18} />
          </button>
        }
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deseja excluir esta tarefas?</AlertDialogTitle>
          <AlertDialogDescription>
            Está ação não poderá ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Não</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteTask}>Sim</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteTask;

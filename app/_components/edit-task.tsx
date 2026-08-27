"use client";

import { SquarePen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Tasks } from "../generated/prisma";
import { useState } from "react";
import { toast } from "sonner";
import { upsertTask } from "../_actions/upsert-task";
import { useForm } from "react-hook-form";
import {
  upsertTaskSchema,
  UpsertTaskSchema,
} from "../_actions/upsert-task/schema";
import { zodResolver } from "@hookform/resolvers/zod";

interface TaskProps {
  task: Tasks;
}

const EditTask = ({ task }: TaskProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpsertTaskSchema>({
    resolver: zodResolver(upsertTaskSchema),
    defaultValues: {
      id: task.id,
      task: task.task,
      done: task.done,
    },
  });

  const onSubmit = async (data: UpsertTaskSchema) => {
    try {
      if (data.task.trim() === task.task.trim()) {
        toast.info("Nenhuma alteração foi feita.");
        setIsOpen(false);
        return;
      }
      await upsertTask(data);
      toast.success("Nome da tarefa editada com sucesso!");
      setIsOpen(false);
    } catch (error) {
      toast.error("Erro ao editar a tarefa.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        render={
          <button className="flex justify-center items-center rounded-sm w-8 h-8 cursor-pointer hover:bg-gray-100">
            <SquarePen size={18} />
          </button>
        }
      />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar tarefa</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className=" gap-2">
          <div className="flex gap-2">
            <Input placeholder="Editar tarefa" {...register("task")} />
            {/* mesagem de erro zod */}
            <Button type="submit" className="cursor-pointer">
              Editar
            </Button>
          </div>
          {errors.task && (
            <span className="text-sm text-red-500 font-medium">
              {errors.task.message}
            </span>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default EditTask;

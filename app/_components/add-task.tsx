"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { createTask } from "../_actions/create-task";
import { useForm } from "react-hook-form";
import {
  createTaskSchema,
  CreateTaskSchema,
} from "../_actions/create-task/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spinner } from "@/app/_components/ui/spinner";
import { toast } from "sonner";

export default function AddTask() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateTaskSchema>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      task: "",
      done: false,
    },
  });

  const onSubmit = async (data: CreateTaskSchema) => {
    try {
      await createTask({ task: data.task, done: false });
      reset();
      toast.success("Tarefa criada com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
      <div className="grid w-full">
        <Input
          {...register("task")}
          placeholder="Adicione uma tarefa..."
          disabled={isSubmitting}
        />
        {/* mesagem de erro zod */}
        {errors.task && (
          <span className="text-sm text-red-500 font-medium">
            {errors.task.message}
          </span>
        )}
      </div>

      <Button className="cursor-pointer" type="submit" disabled={isSubmitting}>
        <Plus />
        {isSubmitting ? (
          <>
            <Spinner /> <span>Adicionando...</span>
          </>
        ) : (
          "Adicionar"
        )}
      </Button>
    </form>
  );
}

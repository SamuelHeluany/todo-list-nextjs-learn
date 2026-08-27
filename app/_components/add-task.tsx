"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { upsertTask } from "../_actions/upsert-task";
import { useForm } from "react-hook-form";
import {
  upsertTaskSchema,
  UpsertTaskSchema,
} from "../_actions/upsert-task/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spinner } from "@/app/_components/ui/spinner";
import { toast } from "sonner";

export default function AddTask() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UpsertTaskSchema>({
    resolver: zodResolver(upsertTaskSchema),
    defaultValues: {
      task: "",
      done: false,
    },
  });

  const onSubmit = async (data: UpsertTaskSchema) => {
    try {
      await upsertTask({ task: data.task, done: false });
      reset();
      toast.success("Tarefa criada com sucesso!");
    } catch (error) {
      console.error(error);
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

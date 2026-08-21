"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { CreateTask } from "../_actions/create-task";

export default function AddTask() {
  const [task, setTaskName] = useState<string>("");

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!task.trim()) return;

    try {
      await CreateTask({ task, done: false });
      setTaskName("");
      console.log(...task);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        value={task}
        placeholder="Adicionar tarefa..."
        onChange={(e) => setTaskName(e.target.value)}
      />
      <Button className="cursor-pointer" type="submit">
        <Plus />
        Adicionar
      </Button>
    </form>
  );
}

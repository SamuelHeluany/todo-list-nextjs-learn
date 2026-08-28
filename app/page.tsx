import { Button } from "@/app/_components/ui/button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { Separator } from "@/app/_components/ui/separator";
import { List, ListCheck, Trash } from "lucide-react";
import AddTask from "@/app/_components/add-task";
import TaskContainer from "./_components/task-container";
import { getTasks } from "./_data-access/get-tasks";

const Home = async () => {
  // 1. Busca as tarefas no banco de dados no lado do servidor
  const tasks = await getTasks();

  // 2. Cálculos dinâmicos para contadores e barra de progresso
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.done).length;
  const progressPercentage =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-xl border-none">
        <CardHeader>
          <AddTask />
        </CardHeader>
        <CardContent>
          <Separator className="mb-2" />

          {/* 3. TaskContainer gerencia a filtragem e a exibição do TaskList */}
          <TaskContainer initialTasks={tasks} />

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-1.5 text-sm">
              <ListCheck size={18} />
              <p>
                Tarefas concluídas: ({completedTasks}/{totalTasks})
              </p>
            </div>
            <Button className="text-xs h-7 cursor-pointer" variant="outline">
              <Trash className="w-3.5 h-3.5" />
              Limpar tarefas concluídas
            </Button>
          </div>

          {/* Barra de Progresso Dinâmica */}
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
        </CardContent>
      </Card>
    </main>
  );
};

export default Home;

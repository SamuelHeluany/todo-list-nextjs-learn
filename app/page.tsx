import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { Separator } from "@/app/_components/ui/separator";
import { Check, List, ListCheck, Trash, X } from "lucide-react";
import AddTask from "@/app/_components/add-task";
import TaskList from "./_components/tasks";

const Home = async () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-xl border-none">
        <CardHeader>
          <AddTask />
        </CardHeader>
        <CardContent>
          <Separator className="mb-2" />
          <div className="flex gap-2">
            <Badge className="cursor-pointer h-6" variant="default">
              <List />
              Todas
            </Badge>
            <Badge className="cursor-pointer  h-6" variant="secondary">
              <X />
              Não finalizadas
            </Badge>
            <Badge className="cursor-pointer  h-6" variant="secondary">
              <Check />
              Concluídas
            </Badge>
          </div>
          <TaskList />

          <div className="flex justify-between mt-4">
            <div className="flex items-center">
              <ListCheck size={18} />
              <p>Tarefas concluídas: (3/3)</p>
            </div>
            <Button className="text-xs h-7 cursor-pointer" variant="outline">
              <Trash />
              Limpar tarefas concluídas
            </Button>
          </div>

          <div className="h-2 w-full bg-gray-100 mt-4 rounded-md">
            <div
              className="h-full bg-blue-500 rounded-md"
              style={{ width: "50%" }}
            ></div>
          </div>

          <div className="flex items-center justify-end gap-1 mt-2">
            <List size={16} />
            <p className="text-xs">3 tarefas no total</p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default Home;

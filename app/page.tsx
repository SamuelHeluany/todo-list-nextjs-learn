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
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Check,
  List,
  ListCheck,
  Plus,
  SquarePen,
  Trash,
  X,
} from "lucide-react";

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-xl border-none">
        <CardHeader className="flex gap-2">
          <Input placeholder="Adicionar tarefa..." />
          <Button className="cursor-pointer">
            <Plus />
            Adicionar
          </Button>
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

          <div className="mt-4 border-b">
            <div className="h-14 flex justify-between items-center border-t">
              <div className="w-1 h-full bg-green-300"></div>
              <p className="flex-1 px-2 text-base">Study React</p>
              <div className="flex items-center gap-2">
                <Dialog>
                  <DialogTrigger
                    render={<SquarePen size={18} className="cursor-pointer" />}
                  ></DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar tarefa</DialogTitle>
                    </DialogHeader>
                    <div className="flex gap-2">
                      <Input placeholder="Editar tarefa" />
                      <Button className="cursor-pointer">Editar</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <AlertDialog>
                  <AlertDialogTrigger
                    render={<Trash size={18} className="cursor-pointer" />}
                  />
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Deseja excluir esta tarefa?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Está ação não poderá ser desfeita.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Não</AlertDialogCancel>
                      <AlertDialogAction>Sim</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>

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

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

const EditTask = () => {
  return (
    <Dialog>
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
        <div className="flex gap-2">
          <Input placeholder="Editar tarefa" />
          <Button className="cursor-pointer">Editar</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditTask;

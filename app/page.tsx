import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { Separator } from "@/app/_components/ui/separator";
import AddTask from "@/app/_components/add-task";
import TaskContainer from "./_components/task-container";
import TaskInfos from "./_components/task-information";
import { getTasks } from "./_data-access/get-tasks";

const Home = async () => {
  const tasks = await getTasks();
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
          <TaskInfos />
        </CardContent>
      </Card>
    </main>
  );
};

export default Home;

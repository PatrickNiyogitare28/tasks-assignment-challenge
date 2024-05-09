import { useEffect, useState } from "react"
import axiosInstance from "@/lib/axios"
import downloadReport from "@/utils/downloadReport";
import generateRandomNameId from "@/utils/randomId";
import { Task } from "@/types/task";

export default function useFetchTasks(){
    const [tasks, setTasks] = useState<Task[]>([])
    const fetchTasks = async() => {
        await axiosInstance.get(`/tasks`)
        .then((data) => {
            setTasks(data.data.data.tasks);
        })
        .catch((e)=>{
            console.log("axios error")
            console.log(e)
        })
    }

    useEffect(() => {
        fetchTasks();
    },[])

    const handleDownloadReport = () => {
        const data:any = [
            ["Name", "Project", "Description", "Start Date", "End Date", "Assignee", "Priority", "Attachement"],
          ];

          tasks.forEach((task) => {
            const row = [task.title, task.projectName, task.description, task.startDate, task.endDate, `${task.assignee.map((ass) => ass.fullName+" ")}`, 
             task.priority, task.attachment]
            data.push(row);
          })
      
         downloadReport(data, "tasks-"+generateRandomNameId())
    }
    const refetch = () => fetchTasks();
    return {
        tasks,
        refetch,
        handleDownloadReport
    }
}
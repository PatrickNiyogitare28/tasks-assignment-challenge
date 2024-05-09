import axiosInstance from "@/lib/axios"
import toast from "react-hot-toast"

export default function useUpdateTask({refetch}: {refetch: () => void;}){
    const handleChangeStatus = (Status: 'APPROVED' | 'REJECTED' | 'PENDING', Id: string) => {
        axiosInstance.put(`/tasks/${Id}`, {Status})
        .then((data) => {
            refetch();
            toast.success("Task updated successfully")
        })
        .catch((e) => {
            toast.error("Task not updated, error occurred")
        })
    }
    return {
        handleChangeStatus
    }
}
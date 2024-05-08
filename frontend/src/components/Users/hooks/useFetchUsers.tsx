import axiosInstance from "@/lib/axios"
import { Profile } from "@/types/profile"
import downloadReport from "@/utils/downloadReport"
import generateRandomNameId from "@/utils/randomId"
import { useEffect, useState } from "react"

export default function useFetchUsers(){
    const [users, setUsers] = useState<Profile[]>([])
    const fetchUsers = async() => {
        await axiosInstance.get('/profile')
        .then((data) => {
            console.log("axios success")
            setUsers(data.data.data.profiles);
        })
        .catch((e)=>{
            console.log("axios error")
            console.log(e)
            console.log(e)
        })
    }

    const handleDownloadReport = () => {
        const data:any = [
            ["Name", "Email", "Phone", "Activation Code"],
          ];

          users.forEach((usr) => {
            const row = [usr.fullName, usr.email, usr.mobile, usr.activationCode]
            data.push(row);
          })
      
         downloadReport(data, "users-"+generateRandomNameId())
    }

    useEffect(() => {
        fetchUsers();
    },[])

    const refetch = () => fetchUsers();
    return {
        users,
        refetch,
        handleDownloadReport
    }
}
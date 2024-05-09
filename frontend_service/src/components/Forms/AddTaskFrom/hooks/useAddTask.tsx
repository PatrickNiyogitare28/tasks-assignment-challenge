import * as Yup from 'yup';
import {useFormik} from 'formik';
import { useState } from 'react';
import axiosInstance from '@/lib/axios';
import toast from 'react-hot-toast';
import { IResponse, cloudinaryService } from '@/lib/utils/cloudinaly';
import { Task } from '@/types/task';

export default function useAddTask ({onClose, task}: {onClose: () => void, task: Task | null}){
    const [loading, setLoading] = useState<boolean>(false);
    const [uploading, setUploading] = useState<boolean>(false);
    const [attachement, setAttachment] = useState("");
    const initialValues = {
        title: task?.title || "",
        description: task?.description || "",
        startDate: task?.startDate || "",
        endDate: task?.endDate || "",
        priority: task?.priority || "",
        attachement: task?.attachment || "",
        assignees: [],
        projectName: task?.projectName || "",
    }

    const validationSchema = Yup.object({
        title: Yup.string().required("Title is required"),
        description: Yup.string().required("Description is required"),
        startDate: Yup.string().required("Start Time is required"),
        endDate: Yup.string().required("End Time is requred"),
        priority: Yup.string(),
        attachement: Yup.string().required("Attachement is required"),
        projectName: Yup.string().required()
    })

    const {errors, touched, values, setFieldValue, getFieldProps, resetForm} = useFormik({
        initialValues,
        validationSchema,
        onSubmit(){}
    })

    const onSubmit = (e:any) => {
        e.preventDefault();
        console.log(values)
        const mutationVariables: any = {
            title: values.title,
            description: values.description,
            projectName: values.projectName,
            priority: values.priority,
            startDate: values.startDate,
            endDate: values.endDate,
            attachement: values.attachement,
            assigneeIds: values.assignees.map((ass:any) => ass.value)

        }
        setLoading(true)
        axiosInstance.post('/tasks', mutationVariables)
        .then((data) => {
            setLoading(false);
            resetForm()
            onClose();
            toast.success("Task saved successfully")
        })
        .catch((error) => {
            setLoading(false);
            console.log(error)
            toast.error("Task saving failed, error occured")
        })
    }

    const uploadToCloudinary = async (file: File) => {
    setUploading(true)
     const apiResponse: IResponse = await cloudinaryService.upload(file);
    if (!apiResponse.success && !apiResponse.fileUrl) {
      setUploading(false);
      return toast.error(apiResponse.error || "An error occurred");
    }
    else{
        toast.success("Attachment uploaded successfully")
        setUploading(false);
        setFieldValue("attachement", apiResponse.fileUrl)
        setAttachment(apiResponse.fileUrl as string)
    }
    }



    return {
        errors,
        touched,
        values,
        setFieldValue,
        getFieldProps,
        loading,
        onSubmit,
        uploadToCloudinary,
        uploading,
        attachement
    }
}
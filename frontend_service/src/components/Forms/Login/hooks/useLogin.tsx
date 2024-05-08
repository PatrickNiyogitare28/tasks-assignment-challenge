import { useState } from 'react';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import  {toast} from 'react-hot-toast';
import axiosInstance from '@/lib/axios';
import { useRouter } from 'next/router';
import { handleClientCookie } from '@/lib/client/useClientStorage';

export default function useSignUp(){
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    
    const initialValues = {
        email: '',
        password: ''
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required"),
        password: Yup.string().required("Password is required")
    })

    const {errors, touched, getFieldProps, handleSubmit, values, resetForm} = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (_) => {

        }  
    })

    const onSubmit = async (e:any) => {
      e.preventDefault();
      setLoading(true);
     
      const LoginDto: {login: string, password: string} = {
        login: values.email,
        password: values.password
      }
      axiosInstance.post('/auth/signin',LoginDto)
      .then((response) => {
        setLoading(false);
        toast.success("Successfully logged in")
        handleClientCookie(response.data.accessToken as string)
        router.replace('/')
        resetForm();

      })
      .catch((error: any) => {
        console.log(error);
        setLoading(false);
        return toast.error(error?.response?.data?.message ||"Login failed, an error occurred.") 
      })
      
    }

    return {
        errors,
        touched,
        getFieldProps,
        handleSubmit,
        values,
        loading,
        onSubmit
    }
}

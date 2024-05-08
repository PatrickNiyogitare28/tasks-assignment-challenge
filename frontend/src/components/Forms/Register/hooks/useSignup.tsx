import { useState } from 'react';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import { hashPassword } from '@/utils/hash-password';
import {toast} from 'react-hot-toast';
import axiosInstance from '@/lib/axios';
import { useRouter } from 'next/router';

export default function useSignUp(){
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const initialValues = {
        fullName: '',
        email: '',
        mobile: '',
        password: ''
    }
    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required("Full name is required"),
        email: Yup.string().email().required("Email is required"),
        mobile: Yup.string().required("Phone number is required"),
        password: Yup.string().min(6, "Password should be alteast 8 chars").required("Password is required")
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
     // check if email exists already
      
     const nameParts = values.fullName.split(' ');
     const firstName = nameParts[0]; // Assuming the first part is the first name
     const lastName = nameParts.length > 1 ? nameParts[1] : '';

      const NewUserDto: any = {
        firstName,
        lastName,
        email: values.email,
        mobile: values.mobile,
        password: values.password,
        roleName: 'ROLE_ADMIN',
      }
      axiosInstance.post('/auth/signup',NewUserDto)
      .then((response:any) => {
        setLoading(false);
        toast.success("Successfully registered")
        router.replace('/auth/login')
        resetForm();
      })
      .catch((error: any) => {
        setLoading(false);
        return toast.error(error?.response?.data?.message || "Registration failed, an error occurred.") 
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

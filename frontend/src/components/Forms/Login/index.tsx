import FormActionButton from '@/components/Elements/FormActionButton';
import Input from '@/components/Elements/Input';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import useLogin from './hooks/useLogin';

export default function LoginForm(){
    const router = useRouter();
    const {errors, touched, getFieldProps, values, loading, onSubmit} = useLogin();

    return (
        <div className='bg-white rounded-xl w-full px-12 py-12 shadow-sm'>
            <h1 className='text-xl text-black font-bold'>Login to continue</h1>
            <h3 className='text-gray-400 font-lighter'>Task Tracker App</h3>
            <div className='mt-8'>
                <form onSubmit={(event: any) => onSubmit(event)}>
                <div className='mt-4'>
                <Input 
                placeholder='Email' 
                type='text' 
                isDirty={(errors.email && touched.email) ? true : false}
                fieldProps={getFieldProps("email")}
                error={errors.email}
                />
                </div>
                <div className='mt-4'>
                    <Input 
                    placeholder='Password' 
                    type='password' 
                    isDirty={(errors.password && touched.password) ? true : false}
                    fieldProps={getFieldProps("password")}
                    error={errors.password}
                    />
                </div>
                <div className='mt-6'>
                <FormActionButton 
                       onSubmit={() => {}}
                       type="submit"
                       disabled={(Object.keys(errors).length === 0 || (Object.keys(touched).length === 0) || loading) ? false : true}
                       label={(loading) ? "LOGING IN ..." : "LOGIN"}
                    />
                </div>
                 </form>
                <div className='mt-4'>
                    <span className='text-gray-600'>Have no account? <Link href="/auth/signup" className='text-primary'>Create Account</Link></span>
                </div>
            </div>
        </div>
    )
}
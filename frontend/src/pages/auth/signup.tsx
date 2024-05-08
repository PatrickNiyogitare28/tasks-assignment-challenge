import React from 'react';
import {Toaster} from 'react-hot-toast';
import RegisterForm from '@/components/Forms/Register';
import Credit from '@/components/Credit';

export default function Signup(){
    return (
        <div className='h-[100vh] w-screen bg-white flex items-center overflow-y-hidden'>
            <Toaster/>
            <Credit />
            <div className='w-[50%] flex items-center'>
              <img  src="/assets/images/imigongo.png" alt="bars" className='h-full' />
              <div className='flex justify-around h-[100%] items-center'>
                    <label className='text-4xl font-bold text-center  text-gray-600'>TASK TRACKER APP</label>
              </div>
            </div>
            <div className='w-[50%] bg-primary h-full flex items-center justify-around'>
                <div className='w-[60%]'>
                <RegisterForm />
                </div>
            </div>
        </div>
    )
}
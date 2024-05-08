import React from 'react';
import {BiGroup, BiSolidGroup, BiListCheck, BiListMinus} from 'react-icons/bi';
import BarChart from './Charts/Bar';
import UserPieChart from './Charts/Pai';
import useGetStats from './hooks/useGetStats';

export default function AdminStatistics () {
    const {data} = useGetStats();
    return (
        <div className="w-full">
        <h2 className='font-bold text-xl p-4 px-6'>Metrics</h2>
        <div className='w-full flex justify-between  px-6 mt-4    '>
            <div className='w-[20%] bg-white shadow-md rounded-md p-4'>
                <div className='flex justify-between items-center'>
                <label>TASKS</label>
                <BiGroup size={30} color='silver' />
                </div>
                <div>
                    <label className='text-primary font-bold text-4xl'>{data.appointments}</label>
                </div>
            </div>

            <div className='w-[20%] bg-white shadow-md rounded-md p-4'>
                <div className='flex justify-between items-center'>
                <label>USERS</label>
                <BiSolidGroup size={30}  color='silver'  />
                </div>
                <div>
                    <label className='text-primary font-bold text-4xl'>{data.messages}</label>
                </div>
            </div>

          
        </div>
        <div className='py-4 '>
        <h2 className='font-bold text-xl p-4 px-6'>Statistics</h2>
        <div className='p-4 w-full flex justify-between   px-[4em] py-6'>
        <div className='w-[60%]'>
            <BarChart />
        </div>
        <div className='w-[30%]'>
           <UserPieChart verified={data.verifiedAccounts} nonVerified={data.nonVerifiedAccounts} />
        </div>
        </div>
        </div>
        </div>
    )
}
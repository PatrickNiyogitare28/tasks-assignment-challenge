import React, {useState} from 'react';
import {BiDownload, BiPlus} from 'react-icons/bi';
import TasksTable from '../Elements/Tables/AttachementTable';
import useFetchTasks from './hooks/useFetchAdminTasks';
import Modal from '../Modal';
import AddTaskForm from '../Forms/AddTaskFrom';


export default function AdminTasks () {
    const [showModal, setShowModal] = useState<boolean>(false);
    const {tasks, refetch, handleDownloadReport} = useFetchTasks()
    return (
        <>
        <div className='p-6'>
        <h2 className='font-bold text-xl p-4 px-6'>Tasks</h2>
            <div className='w-full flex gap-4'>
                <button className='bg-primary flex gap-2 items-center px-6 rounded-xl py-2 ml-auto' onClick={handleDownloadReport}>
                    <BiDownload color="white" />
                    <label className='text-white font-light'>DOWNLOAD REPORTS</label>
                </button>
                <button className='bg-primary flex gap-2 items-center px-6 rounded-xl py-2' onClick={() => setShowModal(true)}>
                    <BiPlus color="white" />
                    <label className='text-white font-light'>ADD TASK</label>
                </button>
            </div>
            <div className="mt-4">
            <TasksTable tasks={tasks} refetch={refetch} />
            </div>
        </div>  
        {showModal &&
          <Modal title='ADD TASK' onClose={() => setShowModal(false)}>
            <AddTaskForm task={null} onClose={() => {setShowModal(false); refetch()}} />
          </Modal>
        }
        </>
    )
}
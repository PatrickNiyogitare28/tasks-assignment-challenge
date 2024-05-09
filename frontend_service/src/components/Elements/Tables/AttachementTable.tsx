import React, { useState } from 'react';
import useUpdateTasks from './hooks/useUpdateTasks';
import { Toaster } from 'react-hot-toast';
import { Task } from '@/types/task';
import AddTaskForm from '@/components/Forms/AddTaskFrom';
import Modal from '@/components/Modal';

interface Props {
    tasks: Task[],
    refetch: () => void;
}

const AttachementTable = ({ tasks, refetch }: Props) => {
  const {handleChangeStatus} = useUpdateTasks({refetch});
  const [showModal, setShowModal] = useState<boolean>(false);
  
  return (
    <>
    <div className="overflow-x-auto" style={{borderRadius: '20px 20px 0px 0px'}}>
      <Toaster />
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className='text-xs h-[40px]'>
            <th className="border bg-gray-200">TITLE</th>
            <th className="border bg-gray-200">PROJECT</th>
            <th className="border bg-gray-200">START DATE</th>
            <th className="border bg-gray-200">END DATE</th>
            <th className="border bg-gray-200">DESCRIPTION</th>
            <th className="border bg-gray-200">PRIORITY</th>
            <th className="border bg-gray-200">ASSIGNEES</th>
            <th className="border bg-gray-200">ATTACHEMENT</th>
            <th className="border bg-gray-200">EDIT</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className='text-xs text-gray-500 font-lighter text-center'>
              <td className="border p-2">{task.title}</td>
              <td className="border p-2">{task.projectName}</td>
              <td className="border p-2">{task.startDate}</td>
              <td className="border p-2">{task.endDate}</td>
              <td className="border p-2">{task.description}</td>
              <td className="border p-2">{task.priority}</td>
              <td className="border p-2 flex gap-2">
                {task.assignee.map((ass, index) => (
                  <label key={index} className='p-2 bg-blue-2 text-gray-600'>{ass.fullName}</label>
                ))}
              </td>
              <td className="border p-2">
                <a href={task.attachment} target='_blank' className='bg-green-400 text-black px-6 font-bold p-2 rounded-md'>View</a>
              </td>
              <td className="border p-2">
                <button className='bg-blue-400  text-white  font-bold py-2 px-6 rounded-md' onClick={() => setShowModal(true)}>EDIT</button>
              </td>
              {showModal &&
                <Modal title='EDIT TASK' onClose={() => setShowModal(false)}>
                  <AddTaskForm task={task} onClose={() => {setShowModal(false); refetch()}} />
                </Modal>
              }
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
    
    </>
  );
};

export default AttachementTable;

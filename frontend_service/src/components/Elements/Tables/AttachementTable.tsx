import React from 'react';
import useUpdateAppointment from './hooks/useUpdateAppointment';
import { Toaster } from 'react-hot-toast';
import { Task } from '@/types/task';

interface Props {
    tasks: Task[],
    refetch: () => void;
}

const AttachementTable = ({ tasks, refetch }: Props) => {
  const {handleChangeStatus} = useUpdateAppointment({refetch});
  return (
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
              {/* <td className="border p-2">{new Date(appointment.Time as string).toLocaleDateString()}</td> */}
              <td className="border p-2 flex gap-2">
                {task.assignee.map((ass, index) => (
                  <label key={index} className='p-2 bg-blue-2 text-gray-600'>{ass.fullName}</label>
                ))}
              </td>
              <td className="border p-2">
                <a href={task.attachment} target='_blank' className='bg-green-400 text-black px-6 font-bold p-2 rounded-md'>View</a>
              </td>
              <td className="border p-2">
                <button className='bg-blue-400  text-white  font-bold py-2 px-6 rounded-md'>EDIT</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttachementTable;

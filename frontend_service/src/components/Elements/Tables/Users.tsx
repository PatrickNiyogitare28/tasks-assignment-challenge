import React from 'react';
import {BiPen} from 'react-icons/bi';
import useUpdateUserStatus from './hooks/useUpdateUser';
import { Profile } from '@/types/profile';

interface UserTableProps {
    users: Profile[],
    refetch: () => void
}

const UserTable = ({ users, refetch }: UserTableProps) => {

  return (
    <div className="overflow-x-auto" style={{borderRadius: '20px 20px 0px 0px'}}>
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr className='text-xs h-[40px]'>
            <th className="border bg-gray-200">FULL NAME</th>
            <th className="border bg-gray-200">PHONE</th>
            <th className="border bg-gray-200">EMAIL</th>
            <th className="border bg-gray-200">ROLE</th>
            <th className="border bg-gray-200">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={index} className='text-xs text-gray-500 font-lighter text-center'>
              <td className="border p-2">{user.fullName}</td>
              <td className="border p-2">{user.mobile}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.roles[0].name.split("_").join(" ")}</td>
              <td className='border-[0.5px] text-center'>
                <label className={`p-2 rounded-full  text-[10px]  ${user.activationCode ? 'bg-green-200 ' : 'bg-red-200 ' }`}>{user.activationCode ? 'VERIFIED' : 'NOT VERIFIED' }</label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

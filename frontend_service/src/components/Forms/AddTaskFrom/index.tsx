import Input from '@/components/Elements/Input';
import users from '@/lib/users';
import React, { useEffect } from 'react';
import Select from 'react-select';
import InfoLabel from '../Labels/InfoLabel';
import DatePicker from "react-datepicker";
import useAddTask from './hooks/useAddTask';
import FormActionButton from '@/components/Elements/FormActionButton';
import { CgAttachment } from "react-icons/cg";
import FormAction from './FormAction';
import Link from 'next/link';
import useGetAssignees from './hooks/useAssignees';
import { PROJECTS_OPTIONS } from './projects';


export default function AddTaskForm({onClose}: {onClose: () => void}){
   const {errors, touched, values, setFieldValue, getFieldProps, loading, onSubmit, uploading, uploadToCloudinary, attachement } = useAddTask({onClose});
   const {assignees} = useGetAssignees();
  return (
        <div className='w-[30vw] h-[80vh] overflow-y-scroll'>
            <form noValidate onSubmit={(event: any) => onSubmit(event)}>
            <div className='mt-4'>
            <InfoLabel text='Task' info='Task title' />
            <Input 
            placeholder='Title' 
            type="text" 
            isDirty={(errors.title && touched.title) ? true : false}
            fieldProps={getFieldProps("title")}
            error={errors.title}
            />
            </div>
            
            <div className='flex gap-4'>
            <div className='mt-2 w-full'>
                <InfoLabel text='Start' info='Select starting date' />
                <DatePicker 
                 className='border-[0.5px] border-gray-400 p-4 w-full rounded-xl'
                 selected={(values.startDate && values.startDate.length > 0) ? new Date(values.startDate) : new Date()}
                 onChange={(date) => setFieldValue("startDate", date?.toString())}
                //  showTimeSelect 
                //  timeFormat="HH:mm" 
                 timeIntervals={15} 
                 dateFormat="yyyy-MMMM-d"
                />
            </div>
            <div className='mt-2 w-full'>
                <InfoLabel text='End' info='Select end date and time' />
                <DatePicker 
                 className='border-[0.5px] border-gray-400 p-4 w-full rounded-xl'
                 selected={(values.endDate && values.endDate.length > 0) ? new Date(values.endDate) : new Date()}
                 onChange={(date) => setFieldValue("endDate", date?.toString())}
                //  showTimeSelect 
                //  timeFormat="HH:mm" 
                 timeIntervals={15} 
                //  dateFormat="MMMM d, yyyy h:mm aa"
                dateFormat={"yyyy-MMMM-d"}
                />
            </div>
            </div>

            <div className='mt-2'>
            <InfoLabel text='Projects' info='Add project' />
             <Select 
             options={PROJECTS_OPTIONS}  
             classNamePrefix='py-[5px]  bg-red-500' 
             className='rounded-xl'
             onChange={(selected) => setFieldValue('projectName', selected?.value)}
             />
            </div>

            <div className='mt-2'>
            <InfoLabel text='Assignees' info='Task assignees' />
             <Select 
             isMulti={true}
             options={assignees}  
             classNamePrefix='py-[5px]  bg-red-500' 
             className='rounded-xl'
             onChange={(selected) => setFieldValue('assignees', selected)}
             />
            </div>

            <div className='mt-4'>
            <InfoLabel text='Description' info='Description about the task' />
            <Input placeholder='Reason' type="text" isTextArea={true}
            isDirty={(errors.description && touched.description) ? true : false}
            fieldProps={getFieldProps("description")}
            error={errors.description}
            />
            </div>

            {/* Radio group */}
            
            <div className='mt-4'>
                    <InfoLabel text='Priority' info="Select priority" />
                    <div className='flex gap-12'>
                        <label className='flex items-center gap-2'>
                            <input
                                type="radio"
                                name="Priority"
                                value="Low"
                                checked={values.priority === 'Low'}
                                onChange={() => setFieldValue("priority", "Low")}
                            />
                            Low
                        </label>
                        <label className='flex items-center gap-2'>
                            <input
                                type="radio"
                                name="Priority"
                                value="Normal"
                                checked={values.priority === 'Normal'}
                                onChange={() => setFieldValue("priority", "Normal")}
                            />
                            Normal
                        </label>
                        <label className='flex items-center gap-2'>
                            <input
                                type="radio"
                                name="Priority"
                                value="High"
                                checked={values.priority === 'High'}
                                onChange={() => setFieldValue("priority", "High")}
                            />
                            High
                        </label>
                    </div>
                </div>

            
            {/* Attachement  */}
            <div className='mt-4'>
                    <InfoLabel text='Pin attachement' info={uploading ? "Uploading ...." : 'Click to select a file'} />
                    {attachement && (<a className='text-blue-400 tex-sm underline' href={attachement} target="_blank" >View uploaded attachement</a>)}
                    <div className=''>
                        <label htmlFor="file-upload" className="cursor-pointer flex gap-3 items-center">
                             <CgAttachment />
                            Attach
                        </label>
                        <input
                            type="file"
                            id="file-upload"
                            name="Attachment"
                            onChange={(event: any) => uploadToCloudinary(event.target.files[0])}
                            style={{ display: 'none' }} // Hide the default file input
                        />
                    </div>
                </div>


            <div className='mt-6 w-[max-content]'>
            {/* <FormActionButton 
                onSubmit={() => {}}
                type="submit"
                disabled={(Object.keys(errors).length === 0 || (Object.keys(touched).length === 0) || loading) ? false : true}
                label={(loading) ? "REQUESTING ..." : "REQUEST"}
            /> */}
             <FormAction 
               isLoading={loading}
               onCancel={() => onClose()}
               onSubmit={(event: any) => onSubmit(event)}
             />
            </div>
            </form>
        </div>
    )
}
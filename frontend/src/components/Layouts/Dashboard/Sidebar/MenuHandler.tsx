import React from 'react';
import MenuItem from './Menu';
import {BiSolidDashboard, BiBox, BiListUl, BiGroup, BiSolidUserAccount} from 'react-icons/bi';
import useActiveRoute from './hooks/useActiveRoute';

export function AdminMenuHandler({onDashboard}: {onDashboard?:boolean}){
    const {checkIsActiveRoute, onRoute} = useActiveRoute();
    return (
        <div className='mt-12'>
            <MenuItem 
             onRoute={() => onRoute("/dashboard")}
             isActive={onDashboard ? true : checkIsActiveRoute("/dashboard", true)}
             icon={<BiSolidDashboard color={(checkIsActiveRoute("/dashboard", true) || onDashboard) ? 'white' : 'silver'} size={20} />}
             label='Dashboard'
            />
            <MenuItem 
             onRoute={() => onRoute("/dashboard/tasks")}
             isActive={checkIsActiveRoute("/dashboard/tasks", true)}
             icon={<BiBox color={(checkIsActiveRoute("/dashboard/tasks", true)) ? 'white' : 'silver'} size={20} />}
             label='Tasks'
            />
             <MenuItem 
             onRoute={() => onRoute("/dashboard/users")}
             isActive={checkIsActiveRoute("/dashboard/users", true)}
             icon={<BiGroup color={(checkIsActiveRoute("/dashboard/users", true)) ? 'white' : 'silver'} size={20} />}
             label='Users'
            />
             <MenuItem 
             onRoute={() => onRoute("/dashboard/profile")}
             isActive={checkIsActiveRoute("/dashboard/profile", true)}
             icon={<BiSolidUserAccount color={(checkIsActiveRoute("/dashboard/profile", true)) ? 'white' : 'silver'} size={20} />}
             label='Profile'
            />
        </div>
    )
}

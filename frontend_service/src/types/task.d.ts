import { Role } from "./profile";


interface User {
    id: number;
    firstName: string;
    lastName: string;
    fullName: string;
    username: string;
    mobile: string;
    email: string;
    status: string;
    activationCode: string;
    roles: Role[];
}

interface Task {
    id: number;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    assignee: User[];
    projectName: string;
    priority: string;
    attachment: string;
}

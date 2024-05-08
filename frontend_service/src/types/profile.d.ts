export interface Role {
    id: number;
    name: string;
    description: string;
   }
   
   export interface Profile {
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
   
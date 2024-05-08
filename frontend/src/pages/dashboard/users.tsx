import Dashboard from '@/components/Layouts/Dashboard';
import AdminUsers from '@/components/Users/AdminUsers';
import { TSessionUser } from '@/types/user';
import getSessionUser from '@/utils/get-user';
import { GetServerSideProps } from 'next';
import React from 'react';

export default function Users({User}: {User: TSessionUser}){
    return (
       <Dashboard User={User}>
        <AdminUsers />
       </Dashboard>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      return {
        redirect: {
          destination: '/auth/login',
          permanent: false,
        },
      };
    }
    const SessionUser = getSessionUser(accessToken);
    if (!SessionUser) {
      return {
        redirect: {
          destination: '/auth/login',
          permanent: false,
        },
      };
    }
    console.log("In session getting...");
    console.log(SessionUser)
    return {
      props: {
        User: SessionUser
      },
    };
  };
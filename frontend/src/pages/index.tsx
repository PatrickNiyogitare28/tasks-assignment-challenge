import { GetServerSideProps } from 'next';
import getSessionUser from '@/utils/get-user';
import Admin from './dashboard';
import { TSessionUser } from '@/types/user';
import { useRouter } from 'next/router';
export default function Home(props:any) {
  const router = useRouter();
  const SessionUser= props.SessionUser as TSessionUser;

  return (
        <Admin User={SessionUser}/>
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
  return {
    props: {
      SessionUser
    },
  };
};
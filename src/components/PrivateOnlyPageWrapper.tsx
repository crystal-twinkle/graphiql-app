import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth } from '../utils/firebaseModule';
import { RouterPage } from '../router';
import { CommonReactProps } from '../models/common';
import { Loader } from './Loader/Loader';

export function PrivateOnlyPageWrapper({ children }: CommonReactProps) {
  const [user, loading] = useAuthState(auth);
  return loading ? (
    <Loader className="w-20 h-20 m-auto" />
  ) : user ? (
    children
  ) : (
    <Navigate to={RouterPage.WELCOME} />
  );
}

import { Navigate } from 'react-router-dom';
import { AppRoutes } from '../consts/consts.ts';
import { useAppSelector } from '../store/hooks';
import { getAuthCheckedStatus } from '../store/user-process/user-process.selectors';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  return useAppSelector(getAuthCheckedStatus) ? children : <Navigate to={AppRoutes.Login} />;
}

export default PrivateRoute;

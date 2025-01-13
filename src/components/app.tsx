import Main from '../pages/main.tsx';
import NotFound from '../pages/not-found.tsx';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../consts/consts.ts';
import Login from '../pages/login.tsx';
import Favourites from '../pages/favourites.tsx';
import Offer from '../pages/offer.tsx';
import PrivateRoute from './private-route.tsx';
import { useAppSelector } from '../store/hooks.ts';
import { LoadingScreen } from './loading-screen.tsx';
import HistoryRouter from './history-router.tsx';
import browserHistory from '../browser-history.ts';
import { isOffersDataStillLoading } from '../store/data-process/data-process.selectors.ts';

function App(): JSX.Element {
  const isDataStillLoading = useAppSelector(isOffersDataStillLoading);
  if (isDataStillLoading) {
    return <LoadingScreen />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoutes.Main} element={<Main />} />
        <Route path={AppRoutes.Login} element={<Login />} />
        <Route
          path={AppRoutes.Favorites}
          element={
            <PrivateRoute>
              <Favourites />
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.Offer} element={<Offer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;

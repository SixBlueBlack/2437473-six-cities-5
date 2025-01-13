import { useAppDispatch, useAppSelector } from '../store/hooks.ts';
import { getFavoriteOffers } from '../store/user-process/user-process.selectors.ts';
import { AppRoutes, CardType, CityInfoList } from '../consts/consts.ts';
import { Link } from 'react-router-dom';
import { City } from '../types/city.ts';
import { changeCityAction } from '../store/data-process/data-process.slice.ts';
import { redirectToRoute } from '../store/actions.ts';
import FavoritesEmpty from './favorites-empty.tsx';
import { LoadingScreen } from '../components/loading-screen.tsx';
import Header from '../components/header.tsx';
import OfferCardList from '../components/offer-card-list.tsx';

function Favourites(): JSX.Element {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(getFavoriteOffers);
  const handleCityClick = (city: City) => (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(changeCityAction(city));
    dispatch(redirectToRoute(AppRoutes.Main));
  };
  if (!favorites) {
    return <LoadingScreen />;
  }
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favorites.length > 0 ? (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {CityInfoList.map((city) => {
                  const cityFavorites = favorites.filter(
                    (favorite) => favorite.city.name === city.name
                  );
                  return (
                    cityFavorites.length > 0 && (
                      <li
                        key={city.name}
                        className="favorites__locations-items"
                      >
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <Link
                              className="locations__item-link"
                              onClick={handleCityClick(city)}
                              to={AppRoutes.Main}
                            >
                              <span>{city.name}</span>
                            </Link>
                          </div>
                        </div>
                        <OfferCardList
                          offerCards={cityFavorites}
                          onOfferCardChange={() => {}}
                          cardClass={CardType.Favorites}
                          wrapperClassName="favorites__places"
                        />
                      </li>
                    )
                  );
                })}
              </ul>
            </section>
          ) : (
            <FavoritesEmpty />
          )}
        </div>
      </main>
      <footer className="footer container">
        <Link to={AppRoutes.Main}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
}

export default Favourites;

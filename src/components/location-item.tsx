import { Link } from 'react-router-dom';
import { AppRoutes, CityInfoList } from '../consts/consts.ts';
import { changeCityAction } from '../store/data-process/data-process.slice.ts';
import { useAppDispatch } from '../store/hooks.ts';
import { redirectToRoute } from '../store/actions.ts';

export function LocationItem(): JSX.Element {
  const randomCityIndex = Math.floor(Math.random() * CityInfoList.length);
  const randomCity = CityInfoList[randomCityIndex];
  const dispatch = useAppDispatch();
  const handleCityClick = () => {
    dispatch(changeCityAction(randomCity));
    dispatch(redirectToRoute(AppRoutes.Main));
  };
  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link
          className="locations__item-link"
          to={AppRoutes.Main}
          onClick={handleCityClick}
        >
          <span>{randomCity.name}</span>
        </Link>
      </div>
    </section>
  );
}

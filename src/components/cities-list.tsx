import { memo, useCallback } from 'react';
import { CityInfoList, CityData } from '../consts/consts.ts';
import { getCurrentCityName } from '../store/data-process/data-process.selectors.ts';
import { changeCityAction } from '../store/data-process/data-process.slice.ts';
import { useAppDispatch, useAppSelector } from '../store/hooks.ts';
import { City } from '../types/city.ts';

function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCityName = useAppSelector(getCurrentCityName);
  const handleCityClick = useCallback(
    (city: City) => dispatch(changeCityAction(city)),
    [dispatch]
  );
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CityInfoList.map((city: City) => (
            <li key={city.name} className="locations__item">
              <a
                className={`locations__item-link tabs__item${
                  currentCityName === city.name ? ' tabs__item--active' : ''
                }`}
                onClick={() => {
                  handleCityClick(CityData[city.name]);
                }}
              >
                <span>{city.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

const MemorizedCitiesList = memo(CitiesList);
export default MemorizedCitiesList;

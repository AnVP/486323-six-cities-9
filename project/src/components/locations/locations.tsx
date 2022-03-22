import {Link} from 'react-router-dom';
import {MouseEvent} from 'react';
import {cities} from '../../const';
import {City} from '../../types/city';
import {useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/action';

type LocationProps = {
  city: City;
}

function Locations({city}: LocationProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          cities.map((item) => (
            <li key={item} className="locations__item">
              <Link className={`locations__item-link tabs__item ${item === city ? 'tabs__item--active' : ''}`}
                to={`${item}`}
                onClick={(evt: MouseEvent<HTMLAnchorElement>) => {
                  evt.preventDefault();
                  dispatch(changeCity(item));
                }}
              >
                <span>{item}</span>
              </Link>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
export default Locations;

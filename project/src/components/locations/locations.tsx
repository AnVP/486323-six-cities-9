import {Link} from 'react-router-dom';
import {MouseEvent} from 'react';
import {cities} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/offer-process/offer-process';

function Locations(): JSX.Element {
  const dispatch = useAppDispatch();
  const {city} = useAppSelector(({OFFER}) => OFFER);

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

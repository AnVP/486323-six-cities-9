import {Link} from 'react-router-dom';
import {MouseEvent} from 'react';
import {cities} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/action';
import {State} from '../../types/state';

function Locations(): JSX.Element {
  const dispatch = useAppDispatch();
  const cityCurrent = useAppSelector(({city}: State) => city);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          cities.map((item) => (
            <li key={item} className="locations__item">
              <Link className={`locations__item-link tabs__item ${item === cityCurrent ? 'tabs__item--active' : ''}`}
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

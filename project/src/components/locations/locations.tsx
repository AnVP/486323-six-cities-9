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
              <a className={`locations__item-link tabs__item ${item === city ? 'tabs__item--active' : ''}`}
                href="#"
                onClick={() => {
                  dispatch(changeCity(item));
                }}
              >
                <span>{item}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
export default Locations;

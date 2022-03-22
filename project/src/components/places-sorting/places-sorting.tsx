import {sortList} from '../../const';
import {Sort} from '../../types/sort';
import {useState} from 'react';

type PlaceSortingType = {
  sortType: Sort;
  setSortType: (sortType: Sort) => void;
}

function PlacesSorting(props: PlaceSortingType): JSX.Element {
  const {sortType, setSortType} = props;

  const [isOpen, changeOpen] = useState<boolean>(false);

  const onSortModalClick = () => changeOpen(!isOpen);

  const onSortItemClick = (type: Sort) => {
    setSortType(type);
    changeOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type"
        tabIndex={0}
        onClick={onSortModalClick}
      >
        {sortType.name}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {
          sortList.map((item) => (
            <li className={`places__option ${item.type === sortType.name ? 'places__option--active' : ''}`}
              data-sort-type={item.type}
              key={item.type}
              tabIndex={0}
              onClick={() => onSortItemClick(item)}
            >
              {item.name}
            </li>
          ))
        };
      </ul>
    </form>
  );
}

export default PlacesSorting;

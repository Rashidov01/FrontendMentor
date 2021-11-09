import "./filter.scss"

function Filter(){
  return(
    <div className="filter">
      <ul className="filter__list">
        <li className="filter__item">
          <a className="filter__link filter__link--active" href="#">
          All
          </a >
        </li>
        <li className="filter__item">
          <a href="#" className="filter__link">
          UI
          </a >
        </li>
        <li className="filter__item">
          <a href="#" className="filter__link">
          UX
          </a >
        </li>
        <li className="filter__item">
          <a href="#" className="filter__link">
          Enxancement
          </a >
        </li>
        <li className="filter__item">
          <a href="#" className="filter__link">
          Bug
          </a >
        </li>
        <li className="filter__item">
          <a href="#" className="filter__link">
          Feature
          </a >
        </li>
      </ul>
    </div>
  );
}

export default Filter;
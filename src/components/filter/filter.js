import "./filter.scss"

function Filter(){
  return(
    <div className="filter">
      <button className="filter-btn filter-btn--active">
        All
      </button>
      <button className="filter-btn">
        UI
      </button>
      <button className="filter-btn">
        UX
      </button>
      <button className="filter-btn">
        Enxancement
      </button>
      <button className="filter-btn">
        Bug
      </button>
      <button className="filter-btn">
        Feature
      </button>
    </div>
  );
}

export default Filter;
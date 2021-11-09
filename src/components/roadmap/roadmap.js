import "./roadmap.scss"

function RoadMap(){
  return(
    <div className="roadmap">
      <div className="roadmap__heading">
        <span className="roadmap__title">Roadmap</span>
        <a className="roadmap__link" href="#">View</a>
      </div>

      <ul className="roadmap__list">
        <li className="roadmap-list__item">
          <p className="roadmap-list__name">Planned</p>
          <span className="roadmap-list__num">2</span>
        </li>
        <li className="roadmap-list__item">
          <p className="roadmap-list__name">In-Progress</p>
          <span className="roadmap-list__num">2</span>
        </li>
        <li className="roadmap-list__item">
          <p className="roadmap-list__name">Live</p>
          <span className="roadmap-list__num">4</span>  
        </li>
      </ul>
    </div>
  );
}

export default RoadMap;
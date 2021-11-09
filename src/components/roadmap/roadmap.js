import "./roadmap.scss"

function RoadMap(){
  return(
    <div className="roadmap">
      <div className="roadmap-heading">
        <h3 className="roadmap-heading__title">Roadmap</h3>
        <a className="roadmap-heading__link" href="#">View</a>
      </div>

      <ul className="roadmap-list">
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
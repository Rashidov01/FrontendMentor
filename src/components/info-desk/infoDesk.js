import "./infoDesk.scss"
import Logo from "../logo/logo";
import Filter from "../filter/filter";
import RoadMap from "../roadmap/roadmap";


function InfoDesk(){
  return(
    <div className="info-desk">
      <Logo />

      <Filter />

      <RoadMap />
    </div>
  );
}

export default InfoDesk;
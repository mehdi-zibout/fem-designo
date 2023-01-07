import Map from "react-map-gl";
import Panel from "../components/shared/Panel";
import { ReactComponent as Pattern } from "../assets/shared/desktop/bg-pattern-two-circles.svg";
import MapComponent from "../components/shared/MapComponent";
function Locations() {
  return (
    <div className="round">
      Locations
      <MapComponent />
      <div className="my-40 "></div>
    </div>
  );
}

export default Locations;

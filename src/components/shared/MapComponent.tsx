import Map from "react-map-gl";

import { ReactComponent as Pattern } from "../../assets/shared/desktop/bg-pattern-two-circles.svg";
import Panel from "./Panel";
function MapComponent() {
  return (
    <div className="desktop:grid desktop:grid-cols-3  desktop:mb-6 flex flex-col-reverse justify-start items-center desktop:gap-8 ">
      <div className="col-span-2 tablet:mt-8 desktop:mt-0 w-full">
        <Panel
          bg="bg-[#FDF3F0]"
          content={
            <div className="py-[5.5rem] px-24">
              <h2 className="text-h2 text-peach mb-6 text-center tablet:text-left">
                Canada
              </h2>
              <div className="tablet:flex text-center tablet:text-left ">
                <ul className=" text-darkGrey text-body tablet:mr-[5rem] mb-6 tablet:mb-0">
                  <li className="font-bold">Designo Central Office</li>
                  <li className="">3886 Wellington Street</li>
                  <li className="">Toronto, Ontario M9C 3J5</li>
                </ul>
                <ul className="  text-darkGrey text-body">
                  <li className="font-bold">Contact </li>
                  <li className="">P : +1 253-863-8967</li>
                  <li className="">M : contact@designo.co</li>
                </ul>
              </div>
            </div>
          }
          Pattern={Pattern}
          patternPosition={"absolute left-0 top-[10%]"}
        />
      </div>
      <div className="overflow-hidden tablet:rounded-2xl h-[23.43rem] tablet:h-[20.38rem] w-full  desktop:w-[21.87rem]">
        <Map
          mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14,
          }}
          style={{
            width: "full",
            height: 400,
            borderRadius: "15px",
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </div>
    </div>
  );
}

export default MapComponent;

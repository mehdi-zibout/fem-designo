import Map from "react-map-gl";

import { ReactComponent as Pattern } from "../../assets/shared/desktop/bg-pattern-two-circles.svg";
import Panel from "./Panel";

type MapProps = {
  countryName: string;
  addressTitle: string;
  contact1: string;
  contact2: string;
  address1: string;
  address2: string;
  longitude: number;
  latitude: number;
  Reverse?: boolean;
  zoom?: number;
};
function MapComponent({
  countryName,
  address1,
  address2,
  addressTitle,
  contact1,
  contact2,
  latitude,
  longitude,
  Reverse = false,
  zoom = 14,
}: MapProps) {
  return (
    <div
      id={countryName.toLowerCase().replace(/\s+/g, "")}
      className={`${
        Reverse ? "desktop:flex-row-reverse" : "desktop:flex-row"
      } z-20  desktop:mb-6 flex flex-col-reverse justify-start items-center desktop:gap-8 tablet:mb-[7.5rem] mb-10`}
    >
      <div className="tablet:mt-8 desktop:mt-0 w-full desktop:w-[66%] z-20">
        <Panel
          bg="bg-[#FDF3F0]"
          content={
            <div className="py-[5.5rem] tablet:pl-24 z-20">
              <h2 className="text-h2 text-peach mb-6 text-center tablet:text-left">
                {countryName}
              </h2>
              <div className="tablet:flex text-center tablet:text-left ">
                <ul className=" text-darkGrey text-body tablet:mr-[5rem] mb-6 tablet:mb-0">
                  <li className="font-bold">{addressTitle}</li>
                  <li className="">{address1}</li>
                  <li className="">{address2}</li>
                </ul>
                <ul className="  text-darkGrey text-body">
                  <li className="font-bold">Contact </li>
                  <li className="">P : {contact1}</li>
                  <li className="">M : {contact2}</li>
                </ul>
              </div>
            </div>
          }
          Pattern={Pattern}
          patternPosition={"absolute left-0 top-[10%]"}
        />
      </div>
      <div className="overflow-hidden tablet:rounded-2xl h-[23.43rem] tablet:h-[20.38rem] w-full  desktop:w-[21.87rem] cursor-pointer">
        <Map
          mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
          initialViewState={{
            longitude,
            latitude,
            zoom,
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

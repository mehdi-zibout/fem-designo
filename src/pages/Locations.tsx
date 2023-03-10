import MapComponent from "../components/shared/MapComponent";
import { useEffect } from "react";
import { useLocation } from "react-router";
function Locations() {
  const { hash } = useLocation();
  useEffect(() => {
    // get id from URL
    if (
      hash === "#canada" ||
      hash === "#australia" ||
      hash === "#unitedkingdom"
    )
      document.querySelector(hash)?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <MapComponent
        countryName={"Canada"}
        addressTitle={"Designo Central Office"}
        contact1={"+1 253-863-8967"}
        contact2={"contact@designo.co"}
        address1={"3886 Wellington Street"}
        address2={"Toronto, Ontario M9C 3J5"}
        longitude={-80}
        latitude={40}
      />
      <MapComponent
        countryName={"Australia"}
        addressTitle={"Designo AU Office"}
        contact1={"(02) 6720 9092"}
        contact2={"contact@designo.au"}
        address1={"19 Balonne Street"}
        address2={"New South Wales 2443"}
        longitude={149.1}
        latitude={-35.22}
        zoom={15}
        Reverse
      />
      <MapComponent
        countryName={"United Kingdom"}
        addressTitle={"Designo UK Office"}
        contact1={"078 3115 1400"}
        contact2={"contact@designo.uk"}
        address1={"13  Colorado Way"}
        address2={"Rhyd-y-fro SA8 9GA"}
        longitude={-1.34}
        latitude={53.71}
      />
      <div className="my-40 "></div>
    </div>
  );
}

export default Locations;

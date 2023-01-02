import { useParams } from "react-router-dom";

function Design() {
  const { type } = useParams();
  return <div className="">{type} Design</div>;
}

export default Design;

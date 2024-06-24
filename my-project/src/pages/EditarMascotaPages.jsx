import { useParams } from "react-router-dom";
import EditarComponents from "../components/EditarComponents";

const EdiatrMascotaPages = () => {
  const { id } = useParams();
  return <EditarComponents id={id} />;
};

export default EdiatrMascotaPages;

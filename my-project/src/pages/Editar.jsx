import { useParams } from "react-router-dom";
import Consultar from "../components/Consultar";

const Editar =()=>{
    const { id } = useParams();

return(
    <Consultar id={id}/>
)
};
export default Editar;
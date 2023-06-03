import { useContext } from "react";
import PlatosContext from "../../context/platosProvider";
const usePlatos = () => {
   return useContext(PlatosContext)
}
export default usePlatos
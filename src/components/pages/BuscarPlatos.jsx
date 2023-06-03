import usePlatos from "../../helpers/hooks/usePlatos";
import Buscador from "../Buscador";
import ListadoPlatos from "../ListadoPlatos"
import Spinner from "../Spinner";

const BuscarPlatos = () => {
  const { urlBusqueda, cargando } = usePlatos()
  
  return (
    <div className="container-lg my-3 mt-lg-4 p-0">
      <div className="row justify-content-center mx-2">
        <Buscador />

        {urlBusqueda && 
          <div 
            className="shadow rounded-3 ms-0 ms-md-3 mt-4 mt-md-2 mb-2 bg-white col-sm-9 col-md-5 col-lg-5 col-xl-7 p-0"
          >
            { cargando ? 
              <Spinner mensaje="Buscando Platos"/> 
              : <ListadoPlatos isMenu={false} /> 
            }
          </div> 
        }
      </div>
    </div>
  )
}

export default BuscarPlatos
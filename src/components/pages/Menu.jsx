import ListadoPlatos from "../ListadoPlatos";
import DetallesMenu from "../DetallesMenu";
import usePlatos from "../../helpers/hooks/usePlatos";
import { Link } from "react-router-dom";

const Menu = () => {
  const { platosMenu, } = usePlatos()

  return (
    <div className="container-lg my-3 mt-lg-4 p-0">
      <div className="row justify-content-center mx-2">
        { platosMenu.length ? 
          <>
            <DetallesMenu />
          
            <div className="align-self-start shadow rounded-3 ms-0 ms-md-3 mt-4 mt-md-2 mb-2 bg-white col-sm-10 col-md-5 col-lg-8 col-xl-7 col-xxl-8 p-0">
              <ListadoPlatos isMenu={true} />
            </div>
          </> 

        : <p className="my-3">
            Aun no has agregado ningun plato. Comienza <Link to="/" className="text-secondary text-decoration-underline ">buscando uno.</Link>
          </p> 
        }
      </div>
    </div>
  )
}

export default Menu
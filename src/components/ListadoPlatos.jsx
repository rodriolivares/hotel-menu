import usePlatos from "../helpers/hooks/usePlatos"
import useWindowDimension from "../helpers/hooks/useWindowDimension"
import Plato from "./Plato"

const ListadoPlatos = ({ isMenu }) => {
   const { platosMenu, platosBusqueda } = usePlatos()
   const [ isMobile ] = useWindowDimension(767)

   return (
      <div className="container-md p-0">
         <div className="bg-white rounded-3 col-md">
            <div className={`${!isMobile && "row row-cols-md-auto row-cols-lg-2"} justify-content-md-center`}>
               {isMenu ? ( platosMenu.map( (platoM, index) => ( 
                  <Plato 
                     key={index}
                     plato={platoM}
                     estaSeleccionado={true}
                     className={`mx-3 py-3 px-md-0 border-primary col-md-10 col-lg-5 d-flex flex-column justify-content-between ${index !== platosMenu.length - 1 && "border-bottom"}`}
                  />
               ))) : ( platosBusqueda.map( (plato, index) => ( 
                  <Plato 
                     key={index}
                     plato={plato}
                     estaSeleccionado={false}
                     className={`mx-3 py-3 px-md-0 border-primary col-md-10 col-lg-5 d-flex flex-column justify-content-between ${index !== platosBusqueda.length - 1 && "border-bottom"}`}
                  />
               )))}
            </div>
         </div>
      </div>
   )
}
export default ListadoPlatos
import usePlatos from "../helpers/hooks/usePlatos"
import Parrafo from "./Parrafo"
import Spinner from "./Spinner"
import parse from 'html-react-parser';
import { formatearDinero } from "../helpers/utils/formatearDinero";

const DetallePlato = () => {
  const { setModal, cargandoPlato, detallePlatoSeleccionado, agregarAlMenu, ocultarModal } = usePlatos()

  const { image, title, summary, healthScore, readyInMinutes, pricePerServing, vegan } = detallePlatoSeleccionado

  const handleClick = () => {
    agregarAlMenu(detallePlatoSeleccionado)
    setModal(false)
  }

  return (
    // <div className="top-100 start-50 bg-primary w-100">
    <div className="sticky-top position-absolute top-100 start-50 translate-middle container-sm z-3 pb-5">
      {cargandoPlato ? <Spinner /> :
        <div className="card bg-blanco">
          <div className="card-header text-center">
            <h5 className="card-title mt-2">{title}</h5>
          </div>
          <div className="row">
            <div className="col-lg">
              { cargandoPlato ? <Spinner /> :
                <div className="container-fluid pt-3 mx-auto">
                  <img src={image} className="card-img-top" alt={`Imagen Plato ${title}`}/> 
                </div>
              }
            </div>
            <div className="col-lg">
              <div className="card-body" data-bs-spy="scroll">
                <Parrafo>{`Este es un plato ${vegan ? "Vegano" : "No Vegano"}`}</Parrafo>
                <Parrafo>Receta: {summary ? parse(summary) : null}</Parrafo>
                <Parrafo>{`Health Score: ${healthScore} puntos`}</Parrafo>
                <Parrafo>{`Tiempo de Preparacion: ${readyInMinutes} minutos`}</Parrafo>
                <Parrafo>{`Precio: $${formatearDinero(+pricePerServing)}`}</Parrafo>
              </div>
            </div>
          </div>
          <div className="card-footer text-center">
            <button 
              type="button" 
              className="btn btn-secondary me-3" 
              onClick={ocultarModal}
            >Volver</button>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => handleClick()}
            >Agregar a menu</button>
          </div>
        </div>
      }
    </div>
    // </div>
  )
}

export default DetallePlato
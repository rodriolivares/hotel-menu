import usePlatos from "../helpers/hooks/usePlatos";
import { formatearDinero } from "../helpers/utils/formatearDinero";
import useWindowDimension from "../helpers/hooks/useWindowDimension";

const Plato = ({ plato, estaSeleccionado, className }) => {
  const { setPlatoSeleccionado, setModal, setCargando, eliminarPlato } = usePlatos()

  const { id, image, title, readyInMinutes, pricePerServing } = plato

  const handleVerDetalles = () => {
    setCargando(true)
    setModal(true);
    setPlatoSeleccionado(id)
    setCargando(false)
  }
  const handleEliminarPlato = () => {
    eliminarPlato(id)
  }
  const [ isMobile ] = useWindowDimension(767)

  return (
    <div className={className}>
      <div className="rounded-top flex-grow-1 d-flex justify-content-between justify-content-md-start pb-3 flex-md-column">
        <div className="me-3 w-100 order-md-1 mx-md-0 mt-md-3">
          <p className="m-0 fw-semibold fs-4 text-start">{title}</p>
          {estaSeleccionado && 
            <p className="m-0 fs-6 py-1 lh-sm text-start">Tiempo de preparacion: {readyInMinutes}minutos</p>
          }
        </div>
        <div className="p-0 order-md-0">
          <img 
            src={image} 
            alt={`Imagen ${title}`} 
            width={`${isMobile ? 120 : 480}`}
            className="rounded m-0 p-0 img-fluid"
          />
        </div>
      </div>
      <div className={`d-flex align-items-center justify-content-${estaSeleccionado ? 'between' : 'end'}`}>
        {estaSeleccionado &&
          <p className="m-0 py-1 fs-6 fw-semibold lh-sm text-start me-3 me-lg-2 me-xl-3">{formatearDinero(+pricePerServing)}</p>
        }
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-primary fs-6"
            onClick={handleVerDetalles}
          >Detalles</button>
          { estaSeleccionado && <button 
            type="button"
            className="btn btn-danger fs-6 ms-3 ms-lg-2 ms-xl-3"
            onClick={handleEliminarPlato}
          >Eliminar</button> }
        </div>
      </div>
    </div>
  )
}
export default Plato
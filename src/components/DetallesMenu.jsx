import React from 'react'
import usePlatos from "../helpers/hooks/usePlatos"
import { formatearDinero } from "../helpers/utils/formatearDinero"
import Alerta from "./Alerta"

const DetallesMenu = () => {
  const { alerta, menuInfo, pedirMenu } = usePlatos()
  const { healthScoteTotal, tiempoMaxPreparacion, precioTotal } = menuInfo

  return (
    <div
      className="rounded-3 px-0 mb-md-3 col-sm-10 col-md-5 col-lg-3 col-xl-4 col-xxl-3 sticky-md-top align-self-start pt-2 bg-success"
      style={{"--bs-bg-opacity": 0}}
    >
      <div className="shadow rounded-3 bg-primary">
        <h4 className="fw-semibold p-3 mb-0">Detalles del menú</h4>
        <div className="d-flex flex-column p-3 justify-content-start">
          <p className="text-start mx-0 mb-3 lh-sm text-start">
            Tiempo estimado de preparación: <span className="text-secondary fw-semibold">{tiempoMaxPreparacion} minutos</span>
          </p>
          <p className="text-start mx-0 mb-3 lh-sm">
            Health Score: <span className="text-secondary fw-semibold">{healthScoteTotal} puntos</span>
          </p>
          <p className="text-start mx-0 mb-3 lh-sm text-start">
            Precio total: <span className="text-secondary fw-semibold">{formatearDinero(+precioTotal)}</span>
          </p>
          { alerta && (
              <Alerta>{alerta}</Alerta> 
          ) }
        </div>
        <div className="p-3 d-flex justify-content-end">
          <button 
            className="btn btn-primary bg-white fs-6"
            onClick={pedirMenu}
          >
            Pedir este menú { precioTotal > 0 && 
            <strong>({formatearDinero(+precioTotal)})</strong> }
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetallesMenu
import React from 'react'
import Formulario from "./Formulario"

const Buscador = () => {
   return (
      <div
         className="rounded-3 px-0 mb-md-3 col-sm-9 col-md-5 col-xl-4 sticky-md-top align-self-start pt-2 bg-success z-2"
         style={{"--bs-bg-opacity": 0}}
      >
         <div className="shadow rounded-3 bg-primary">
            <div className="rounded-top d-flex flex-column align-items-start">
               <h4 className="fw-semibold p-3 mb-0">Agrega 4 Platos a tu Menú:</h4>
               <p className="m-0 px-3 pb-2">2 Veganos y 2 No Veganos</p>
            </div>
            <div className="p-3 rounded-bottom">
               <Formulario />
            </div>
         </div>
      </div>
   )
}

export default Buscador
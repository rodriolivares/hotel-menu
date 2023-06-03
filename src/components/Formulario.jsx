import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import usePlatos from "../helpers/hooks/usePlatos"
import Alerta from "./Alerta"

const Formulario = () => {
   const { urlBusqueda, setUrlBusqueda } = usePlatos()

   const nuevaBusquedaSchema = Yup.object().shape({
      nombrePlato: Yup.string()
                 .min(3, 'El Nombre es muy corto')
                 .required('El nombre del Plato es Obligatorio'),
      dieta: '',
      tipoPlato: '', 
      region: ''
   })
   const handleSubmit = async (valores) => {
      let url = `&query=${valores.nombrePlato}`
      if(valores.dieta.length) {url = `${url}&diet=${valores.dieta}`}
      if(valores.tipoPlato.length) {url = `${url}&type=${valores.tipoPlato}`}
      if(valores.region.length) {url = `${url}&cuisine=${valores.region}`}
      setUrlBusqueda(url)
   }

   return (
      <Formik
         initialValues={{
            nombrePlato: urlBusqueda?.nombrePlato ?? "",
            dieta: urlBusqueda?.dieta ?? "",
            tipoPlato: urlBusqueda?.tipoPlato ?? "",
            region: urlBusqueda?.region ?? "",
         }}
         enableReinitialize={true}
         onSubmit={ async (values, {resetForm}) => {
            await handleSubmit(values)
            resetForm()
         }}
         validationSchema={nuevaBusquedaSchema}
      >
         {({errors, touched}) => 
         <Form>
            <div className="d-flex flex-column">
               <div className="input-group mb-3 align-items-center">
                  <label 
                     htmlFor="nombrePlato"
                     className="me-sm-0 col-3 col-form-label col-form-label-sm"
                  >Nombre</label>
                  <div className="col-9">
                     <Field 
                        type="text" 
                        id="nombrePlato"
                        name="nombrePlato"
                        className="form-control form-control-sm" 
                        placeholder="-- Escribir Nombre --"
                     />
                  </div>
               </div>
               {errors.nombrePlato && touched.nombrePlato ? (
                  <Alerta>{errors.nombrePlato}</Alerta>
               ) : null }
               <div >
                  <div className="input-group mb-3 align-items-center">
                     <label 
                        htmlFor="dieta"
                        className="me-sm-0 col-3 col-form-label col-form-label-sm"
                     >Dieta</label>
                     <div className="col-9">
                        <Field 
                           component="select" 
                           id="dieta"
                           name="dieta"
                           className="form-select form-select-sm"
                        >
                           <option value="">-- Seleccionar Dieta --</option>
                           <option value="ketogenic">Cetogénicos</option>
                           <option value="vegetarian">Vegetarianos</option>
                           <option value="vegan">Veganos</option>
                           <option value="gluten">Libres de Gluten</option>
                        </Field>
                     </div>
                  </div>
                  <div className="input-group mb-3 align-items-center">
                     <label 
                        htmlFor="tipoPlato"
                        className="me-sm-0 col-3 col-form-label col-form-label-sm"
                     >Categoría</label>
                     <div className="col-9">
                        <Field 
                           component="select" 
                           id="tipoPlato"
                           name="tipoPlato"
                           className="form-select form-select-sm"
                        >
                           <option value="">-- Seleccionar Categoría --</option>
                           <option value="lunch">Platos Principales</option>
                           <option value="salad">Ensaladas</option>
                           <option value="breakfast">Desayunos</option>
                           <option value="snack">Meriendas</option>
                           <option value="dessert">Postres</option>
                           <option value="beverage">Bebidas</option>
                           <option value="appetizer">Aperitivos</option>
                        </Field>
                     </div>
                  </div>
                  <div className="input-group mb-3 align-items-center">
                     <label 
                        htmlFor="region"
                        className="me-sm-0 col-3 col-form-label col-form-label-sm"
                     >Región</label>
                     <div className="col-9">
                        <Field 
                           component="select" 
                           id="region"
                           name="region"
                           className="form-select form-select-sm"
                        >
                           <option value="">-- Seleccionar Región --</option>
                           <option value="african">Africana</option>
                           <option value="german">Alemana</option>
                           <option value="american">Americana</option>
                           <option value="british">Britanica</option>
                           <option value="cajun" >Cajún</option>
                           <option value="chinese" >China</option>
                           <option value="korean" >Coreana</option>
                           <option value="spanish" >Española</option>
                           <option value="french" >Francesa</option>
                           <option value="greek" >Greca</option>
                           <option value="indian" >India</option>
                           <option value="italian" >Italiana</option>
                           <option value="japanese" >Japonesa</option>
                           <option value="mediterranean" >Mediterranea</option>
                           <option value="nordic" >Nordica</option>
                           <option value="thai">Thai</option>
                           <option value="vietnamese">Vietnamita</option>
                        </Field>
                     </div>
                  </div>
               </div>
            </div>
            <div className="d-flex justify-content-end">
               <button 
                  type="submit"
                  className="btn btn-primary bg-white fs-6"
               >Buscar</button>
            </div>
         </Form>
         }
      </Formik>
   )
}

Formulario.defaultProps = {
   urlBusqueda: ''
}

export default Formulario
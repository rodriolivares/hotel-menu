import { Link, Outlet, useLocation } from "react-router-dom";
import usePlatos from "../../helpers/hooks/usePlatos";

const Layout = () => {
   const location = useLocation()
   const { divRef } = usePlatos()
   
   return (
      <div
         ref={divRef}
      >
         <header className="modal-header header flex-md-row align-items-md-center p-3">
            <h1 className="fs-2 m-0 py-2">Hotel Kemy - <span className="text-nowrap"> Nuestro Menú</span></h1>
         
            <nav className="navbar navbar-expand p-0">
               <ul className="navbar-nav">
                  <li className="navbar-item mx-1">
                     <Link 
                        className={`nav-link ${location.pathname === '/' && "active text-decoration-underline"}`}
                        to="/"
                     >Buscar Platos</Link>
                  </li>
                  <li className="navbar-item mx-1">
                     <Link 
                        className={`nav-link ${location.pathname === '/menu' && "active text-decoration-underline"}`}
                        to="/menu"
                     >Ver mi Menú</Link>
                  </li>
               </ul> 
            </nav>
         </header> 

         <main>
            <Outlet />
         </main>
      </div>
   )
}

export default Layout
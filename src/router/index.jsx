import { createBrowserRouter } from "react-router-dom";
import { Principal } from "../componentes/Principal";
import { Nosotros } from "../paginas/Nosotros";

export const rutas = createBrowserRouter([
  {
    path: "/avichurch/",
    element: <Principal />,
    children: [
      {
        path: "/avichurch/nosotros/",
        element: <Nosotros />

      },
    ]

  }
])
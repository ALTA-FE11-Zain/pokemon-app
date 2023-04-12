import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "pages";
import Detail from "pages/Detail";
import CatchPokemon from "pages/CatchPokemon";
import MyPokemon from "pages/MyPokemon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/detail/:id_pokemon",
    element: <Detail />,
  },
  {
    path: "/catchpokemon",
    element: <CatchPokemon />,
  },
  {
    path: "/mypokemon",
    element: <MyPokemon />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

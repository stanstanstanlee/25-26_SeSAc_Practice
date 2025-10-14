import Home from "../../pages/RootPages/Home";

import PATHS from "../../constants/paths";
import RootLayout from "../../layouts/RootLayout";

const rootRoutes = [
  {
    path: PATHS["ROOT"]["INDEX"],
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
];

export default rootRoutes;

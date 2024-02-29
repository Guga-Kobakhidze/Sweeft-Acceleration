import { RouterProvider, createBrowserRouter } from "react-router-dom";
import route from "./route/route";

function App() {
  return (
    <div>
      <RouterProvider router={createBrowserRouter(route)} />
    </div>
  );
}

export default App;

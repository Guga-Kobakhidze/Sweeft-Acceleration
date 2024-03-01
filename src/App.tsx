// Main App where rendering all of the routes, pages and components

import "./assets/styles/app.css";
import route from "./route/route";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 2000000,
      },
    },
  });

  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={createBrowserRouter(route)} />
      </QueryClientProvider>
    </div>
  );
}

export default App;

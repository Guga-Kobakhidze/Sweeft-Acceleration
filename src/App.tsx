import { RouterProvider, createBrowserRouter } from "react-router-dom";
import route from "./route/route";
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
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={createBrowserRouter(route)} />
      </QueryClientProvider>
    </div>
  );
}

export default App;

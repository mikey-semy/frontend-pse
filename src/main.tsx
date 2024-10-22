import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';
import App from './App.tsx'
import Main from './routes/Main.tsx'
import AutoSearch from './routes/AutoSearch.tsx'
import Error from './components/error/Error.tsx'
import './assets/styles/main.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/auto_search",
        element: <AutoSearch />
      },
    ],
  },
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)

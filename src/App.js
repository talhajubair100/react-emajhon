import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Orders from './components/Orders/Order';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import { ProCart } from './loaders/ProCart';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader : () => {
            return fetch ('./products.json')
          },
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader : ProCart,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    }
    
  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

import{Route,RouterProvider,createBrowserRouter,
  createRoutesFromElements} from 'react-router-dom';
  import HomePage from './Pages/HomePage';
  import AboutPage from './Pages/Aboutpage';

  const router=createBrowserRouter
  (createRoutesFromElements(
    <Route path='/'>
      <Route index element={<HomePage />}/>
      <Route path = '/about' element={<AboutPage />}/>
    </Route>
    ))
const aApp=()=>{
  return(
    <RouterProvider router={router} />
  )
};
export default App;

import Navbar from "../Components/Navbar";
import { Route , Routes } from 'react-router-dom'


export default function AllRoutes(){

return(
<>
    <Routes>
      <Route path="/"  element={<Navbar/>}/>
      {/* <Route path="/"  element={}/>
      <Route path="/"  element={}/>
      <Route path="/"  element={}/>
      <Route path="/"  element={}/> */}
    </Routes>;
</>
)
}
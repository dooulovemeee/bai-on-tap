import { Routes , Route } from "react-router-dom";
import Homepage from "../pages/trangchu";
import NotFoundPage from "../pages/404";
import TodoPage from "../pages/to-do";
function AppRoutes() {
  const img = {
    width: '500px'
  };

    return (
        <Routes>
            <Route path = '/trang-chu' element={<Homepage/>}></Route>
            <Route path='*' element={<NotFoundPage/>}></Route>
            <Route path='/todo' element={<TodoPage/>}></Route>
            
        </Routes>
    )
}


export default AppRoutes;
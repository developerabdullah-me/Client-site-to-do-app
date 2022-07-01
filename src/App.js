
import './App.css';

import Heder from './Pages/Home/Sheare/Heder';
import { Route, Routes } from 'react-router-dom';
import Completed from './Pages/Home/Sheare/Navber/Completed ';
import SignUp from './Pages/User/SignUp';
import Login from './Pages/User/Login';
import Calender from './Pages/Calender';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToDo from './Pages/ToDo';
import RequireAuth from './Pages/Home/Sheare/RequireAuth';
import Update from './Pages/Update';
function App() {
  return (
    <div>
      <Heder>
        <Routes>
          <Route path="/completed" element={<Completed></Completed>}></Route>
          <Route path="/calendar" element={<Calender></Calender>}></Route>
          <Route path="/upDate" element={<Update/>}></Route>
          <Route path="/upDate/:Id" element={<Update/>}></Route>
          <Route path="/todo" element={<RequireAuth><ToDo/></RequireAuth>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Heder>
      <ToastContainer />
    </div>
  );
}

export default App;

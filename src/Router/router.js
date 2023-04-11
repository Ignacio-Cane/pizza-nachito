import{BrowserRouter, Routes, Route} from "react-router-dom";
import Log from '../Components/Log/Log';
import Main from '../Components/Main/main';
import Contact from "../Components/Contact/contact";
import Check from "../Components/Check/check";

export default function Routeo(){
  return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Log/>}/>
                <Route path="/Main" element={<Main/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Check" element={<Check/>}/>
            </Routes>
        </BrowserRouter>
  )
}

 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import Works from "../works/Works";
import AddWork from "../addWork/AddWork";
import Register from "../user/Register";
import Login from "../user/Login";
function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/works" element={<Works/>}/>
        <Route path="/add-work" element={<AddWork/>}/>
        <Route path="/update-work/:id" element={<AddWork/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App

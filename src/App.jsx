import {Route,Routes} from "react-router-dom"
import Layout from "./Layout"
import Dokan from "./Dokan"
import Home from "./Home"
import Transaction from "./Transaction"
import Summary from "./Summary"


export const BaseUrl="https://dokan-backend-jdyo.onrender.com";
export default function App(){
  return <div className="h-screen bg-[#2B2B2B]">
    <Routes >
<Route path="/" element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path="/dokan" element={<Dokan/>}/>
  <Route path="/transaction" element={<Transaction/>}/>
  <Route path="/summary" element={<Summary/>}/>
  </Route>
  </Routes>
    </div>

}
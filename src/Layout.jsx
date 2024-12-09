import { Outlet } from "react-router-dom";
import Header from "./Header";
import OptionBar from "./OptionBar";

export default function Layout(){
    return <div >
        <Header/>
        <OptionBar/>
        <Outlet/>
    </div>
}
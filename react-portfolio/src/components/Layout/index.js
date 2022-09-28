import "./index.scss"
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const Layout =()=>{
    return(
        <div className="App">
            <Sidebar></Sidebar>
            <div className="page">
                <span className="tags top-tags">&lt;body&gt;</span>
            </div>
            <Outlet></Outlet>

            <span className="tags bottom-tags">
                &lt;body&gt;
                <br></br>    
                <span className="bottom-tag-html">&lt;/html&gt;</span>
            </span>
        </div>
    );
}

export default Layout;
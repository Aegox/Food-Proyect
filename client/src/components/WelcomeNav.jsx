import navStyle from "../styles/WelcomeNav.module.css";
import {Link} from "react-router-dom"

export default function WelcomeNav() {
    return (
        <div className={navStyle.nav}>
            <div>
                <img src="./images/makerecipes.png" alt="" width="60px" height="55px"/> 
            </div>
            <div className={navStyle.linkHome}>
                <Link to="/home">Home</Link>  
            </div>
            <div className={navStyle.linkAbout}>
                <Link to="/about">About</Link>  
            </div>
        </div>
    )
}

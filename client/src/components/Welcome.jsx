import WelcomeNav from "./WelcomeNav.jsx";
import WelcomeStyle from "../styles/Welcome.module.css";
import {Link} from "react-router-dom";

export default function Welcome() {
    return (
        <div>
            <WelcomeNav/>
            <div className={WelcomeStyle.slider}>
                <ul>
                    <li>
                        <img src="./images/0.jpg" alt=""/>
                    </li>
                    <li>
                        <img src="./images/1.jpg" alt=""/>
                    </li>
                    <li>
                        <img src="./images/2.jpg" alt=""/>
                    </li>
                    <li>
                        <img src="./images/3.jpg" alt=""/>
                    </li>
                    <li>
                        <img src="./images/4.jpg" alt=""/>
                    </li>
                    <li>
                        <img src="./images/5.jpg" alt=""/>
                    </li>
                </ul>

            </div>
            <div className={WelcomeStyle.imageText}>           
                <h1>!Create and discover thousands of recipes <br/>
                    delicious with amazing diets!</h1>
                <Link to="/home">
                    <button>search recipes</button>
                </Link>   
            </div>
            {/*<div className={WelcomeStyle.cards}>
            </div>
            <div className={WelcomeStyle.description}>
                <div className={WelcomeStyle.text}>
                    <h1>¿Qué es Master Recipes?</h1>
                    <p><strong>Master Recipes</strong> es un buscador de recetas, donde puedes encontrar miles de recetas, desde vegetarianas, pescerianas, sin gluten, y muchisimas dietas, ya que contamos con una amplia base de datos con variedades de todo tipo y ocasion. <br/> Ademas puedes crear recetas que se guardaran en nuestra base de datos y otras personas pueden acceder y mirar tu receta, asi que animate, explora, crea y comparte tus recetas.</p>
                </div>
                <div className={WelcomeStyle.imagedesc}>
                    <img src="./images/makerecipes.png" alt=""/>
                </div>
            </div>
            <div className={WelcomeStyle.footer}>
                <h2>Diego Amundaray</h2>
                <h2>©2022 MASTER RECIPES</h2>
            </div>*/}
        </div>
    )
}
